/** POST /api/submit-assessment —— 服务端权威计分并写库 */
const QUESTIONS = require('../lib/questions');
const { calculateScores } = require('../lib/scoring');
const { sbSelect, sbInsert, sbDelete, sbPatch } = require('../lib/supabase');
const { cleanString, readJson, sameOriginOk, send } = require('../lib/util');

// 预构建映射：question_id -> {option_id -> type}
const MAP = {};
for (const q of QUESTIONS) { MAP[q.id] = {}; for (const o of q.options) MAP[q.id][o.id] = o.type; }

module.exports = async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'Method not allowed' });
  if (!sameOriginOk(req)) return send(res, 403, { ok: false, error: 'Forbidden' });

  const body = await readJson(req);
  if (!body || typeof body !== 'object') return send(res, 400, { ok: false, error: 'Bad request' });

  const tk = cleanString(body.token, 64);
  const language = body.language === 'en' ? 'en' : 'zh';
  const answers = Array.isArray(body.answers) ? body.answers : null;
  if (!tk || !answers) return send(res, 400, { ok: false, error: 'Bad request' });

  const incomplete = '还有题目尚未完成，请回去补答。/ Some questions are unanswered.';
  const sameOpt = '「最像我」和「最不像我」不能是同一个选项。/ Most and Least cannot be the same.';

  // 校验 + 映射
  const normalized = [];
  for (const q of QUESTIONS) {
    const a = answers.find((x) => Number(x.question_id) === q.id);
    if (!a) return send(res, 422, { ok: false, error: incomplete });
    const most = cleanString(a.most, 8);
    const least = cleanString(a.least, 8);
    if (!most || !least) return send(res, 422, { ok: false, error: incomplete });
    if (most === least) return send(res, 422, { ok: false, error: sameOpt });
    if (!MAP[q.id][most] || !MAP[q.id][least]) return send(res, 422, { ok: false, error: 'Invalid option' });
    normalized.push({
      question_id: q.id,
      most_option_id: most, least_option_id: least,
      most_type: MAP[q.id][most], least_type: MAP[q.id][least],
    });
  }

  const score = calculateScores(normalized.map((n) => ({ most_type: n.most_type, least_type: n.least_type })));

  try {
    // 找场次
    const sessions = await sbSelect('assessment_sessions', 'select=id,status&session_token=eq.' + encodeURIComponent(tk) + '&limit=1');
    if (!sessions.length) return send(res, 404, { ok: false, error: '找不到报告，可能链接已失效。/ Report not found.' });
    const sessionId = sessions[0].id;

    // 幂等：清旧答案后写入
    await sbDelete('assessment_answers', 'session_id=eq.' + sessionId);
    await sbInsert('assessment_answers', normalized.map((n) => ({ session_id: sessionId, ...n })));

    // upsert 计分（session_id 唯一）
    const r = score.raw, it = score.intensity;
    await sbInsert('assessment_scores', {
      session_id: sessionId,
      d_raw: r.D, i_raw: r.I, s_raw: r.S, c_raw: r.C,
      d_intensity: it.D, i_intensity: it.I, s_intensity: it.S, c_intensity: it.C,
      primary_style: score.primary, secondary_style: score.secondary,
      combination_type: score.combination_type, is_dual: score.is_dual,
    }, { upsert: true });

    // 标记完成
    await sbPatch('assessment_sessions', 'id=eq.' + sessionId, {
      status: 'completed', complete_time: new Date().toISOString(), language,
    });

    send(res, 200, { ok: true, token: tk });
  } catch (e) {
    const debug = process.env.DEBUG_MODE === 'true';
    send(res, 500, { ok: false, error: debug ? String(e.message) : '系统出现问题，请稍后再试。/ Something went wrong.' });
  }
};
