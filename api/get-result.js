/** GET /api/get-result?token= —— 返回报告数据（含中英双语，供不刷新切换） */
const REPORTS = require('../lib/reports');
const { sbSelect } = require('../lib/supabase');
const { cleanString, send } = require('../lib/util');

function buildPayload(score, session, respondent) {
  const primary = score.primary_style;
  const secondary = score.secondary_style;
  const combo = score.combination_type;
  const comboKey = combo === 'ADAPTIVE' ? 'ADAPTIVE' : combo;
  const primaryReport = REPORTS.primary[primary] || null;
  const comboReport = REPORTS.combo[comboKey] || null;

  return {
    scores: {
      raw: { D: score.d_raw, I: score.i_raw, S: score.s_raw, C: score.c_raw },
      intensity: { D: Number(score.d_intensity), I: Number(score.i_intensity), S: Number(score.s_intensity), C: Number(score.c_intensity) },
      primary, secondary, combination_type: combo, is_dual: !!score.is_dual,
    },
    meta: {
      name: respondent ? respondent.name : '',
      date: session && session.complete_time ? String(session.complete_time).slice(0, 10) : new Date().toISOString().slice(0, 10),
    },
    types: REPORTS.types,
    primary_report: primaryReport,
    combo_report: comboReport,
    sales: primaryReport ? primaryReport.sales : null,
    sell_to: REPORTS.sell_to,
  };
}

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { ok: false, error: 'Method not allowed' });
  const url = new URL(req.url, 'http://x');
  const tk = cleanString(url.searchParams.get('token') || '', 64);
  if (!tk) return send(res, 400, { ok: false, error: 'Bad request' });

  try {
    const sessions = await sbSelect(
      'assessment_sessions',
      'select=id,language,complete_time,status,respondent_id&session_token=eq.' + encodeURIComponent(tk) + '&status=eq.completed&limit=1'
    );
    if (!sessions.length) return send(res, 404, { ok: false, error: '找不到报告，可能链接已失效。/ Report not found.' });
    const session = sessions[0];

    const scores = await sbSelect('assessment_scores', 'select=*&session_id=eq.' + session.id + '&limit=1');
    if (!scores.length) return send(res, 404, { ok: false, error: '找不到报告。/ Report not found.' });

    const respondents = await sbSelect('respondents', 'select=name&id=eq.' + session.respondent_id + '&limit=1');
    const respondent = respondents.length ? respondents[0] : null;

    send(res, 200, { ok: true, data: buildPayload(scores[0], session, respondent) });
  } catch (e) {
    const debug = process.env.DEBUG_MODE === 'true';
    send(res, 500, { ok: false, error: debug ? String(e.message) : '系统出现问题。/ Something went wrong.' });
  }
};
