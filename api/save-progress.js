/** POST /api/save-progress —— 建立受测者 + 场次，返回 token */
const { sbInsert } = require('../lib/supabase');
const { cleanString, isValidEmail, hashIp, simpleUserAgent, clientIp, token, readJson, sameOriginOk, send } = require('../lib/util');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'Method not allowed' });
  if (!sameOriginOk(req)) return send(res, 403, { ok: false, error: 'Forbidden' });

  const body = await readJson(req);
  if (!body || typeof body !== 'object') return send(res, 400, { ok: false, error: 'Bad request' });

  const name = cleanString(body.name, 120);
  const email = cleanString(body.email, 190);
  const whatsapp = cleanString(body.whatsapp, 40);
  const company = cleanString(body.company, 150);
  const industry = cleanString(body.industry, 120);
  let role = cleanString(body.role, 20);
  const language = body.language === 'en' ? 'en' : 'zh';
  const consent = !!body.consent;

  const validRoles = ['owner', 'sales', 'manager', 'team', 'other'];
  if (!validRoles.includes(role)) role = 'other';

  if (!name) return send(res, 422, { ok: false, error: '请填写姓名。/ Please enter your name.' });
  if (!isValidEmail(email)) return send(res, 422, { ok: false, error: '请填写有效的 Email。/ Please enter a valid email.' });
  if (!whatsapp) return send(res, 422, { ok: false, error: '请填写 WhatsApp 号码。/ Please enter your WhatsApp.' });
  if (!consent) return send(res, 422, { ok: false, error: '请先勾选同意个人资料使用声明。/ Please tick the consent box.' });

  try {
    const [respondent] = await sbInsert('respondents', {
      name, email, whatsapp, company: company || null, industry: industry || null, role,
    });

    const sessionToken = token(24);
    const ip = clientIp(req);
    const nowIso = new Date().toISOString();

    await sbInsert('assessment_sessions', {
      session_token: sessionToken,
      respondent_id: respondent.id,
      language,
      status: 'in_progress',
      start_time: nowIso,
      consent_at: nowIso,
      ip_hash: ip ? hashIp(ip) : null,
      user_agent_summary: simpleUserAgent(req.headers['user-agent'] || ''),
    });

    send(res, 200, { ok: true, token: sessionToken });
  } catch (e) {
    const debug = process.env.DEBUG_MODE === 'true';
    send(res, 500, { ok: false, error: debug ? String(e.message) : '系统出现问题，请稍后再试。/ Something went wrong.' });
  }
};
