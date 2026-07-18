/** POST /api/admin-stats —— 密码保护的聚合统计（供简易后台统计页） */
const crypto = require('crypto');
const { sbRpc } = require('../lib/supabase');
const { readJson, send } = require('../lib/util');

function safeEqual(a, b) {
  const ba = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'Method not allowed' });

  const expected = process.env.ADMIN_PASSWORD || '';
  if (!expected) return send(res, 500, { ok: false, error: '未配置 ADMIN_PASSWORD。/ ADMIN_PASSWORD not set.' });

  const body = await readJson(req);
  const pass = body && typeof body.password === 'string' ? body.password : '';
  if (!safeEqual(pass, expected)) return send(res, 401, { ok: false, error: '密码错误 / Wrong password' });

  try {
    const stats = await sbRpc('disc_stats');
    // Postgres 函数返回 json，PostgREST 会包成值
    send(res, 200, { ok: true, stats: stats });
  } catch (e) {
    const debug = process.env.DEBUG_MODE === 'true';
    send(res, 500, { ok: false, error: debug ? String(e.message) : '系统出现问题。/ Something went wrong.' });
  }
};
