/** 公用工具：输入清理、校验、哈希、请求辅助 */
const crypto = require('crypto');

const CONTROL_CHARS = new RegExp('[\\u0000-\\u001F\\u007F]', 'g');

function cleanString(v, max = 255) {
  if (typeof v !== 'string') return '';
  v = v.replace(CONTROL_CHARS, '').trim(); // 去除控制字符
  return v.slice(0, max);
}

function isValidEmail(v) {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function hashIp(ip) {
  const salt = process.env.APP_SECRET || 'salt';
  return crypto.createHash('sha256').update(String(ip) + '|' + salt).digest('hex');
}

function simpleUserAgent(ua) {
  ua = String(ua || '').slice(0, 400);
  const device = /Mobile|Android|iPhone|iPad/i.test(ua) ? 'Mobile' : 'Desktop';
  let browser = 'Other';
  const map = [['Edg', 'Edge'], ['OPR', 'Opera'], ['Chrome', 'Chrome'], ['Safari', 'Safari'], ['Firefox', 'Firefox']];
  for (const [needle, name] of map) { if (ua.includes(needle)) { browser = name; break; } }
  return device + ' / ' + browser;
}

function clientIp(req) {
  const xff = req.headers['x-forwarded-for'];
  if (xff) return String(xff).split(',')[0].trim();
  return req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : '';
}

function token(bytes = 24) {
  return crypto.randomBytes(bytes).toString('hex');
}

/** 读取 JSON body（Vercel Node 函数：req.body 可能已解析，也可能是字符串或流） */
async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string' && req.body.length) {
    try { return JSON.parse(req.body); } catch (e) { return null; }
  }
  return await new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => { data += c; });
    req.on('end', () => { try { resolve(data ? JSON.parse(data) : {}); } catch (e) { resolve(null); } });
    req.on('error', () => resolve(null));
  });
}

/** 同源校验（轻量 CSRF 防护）：允许来源由 ALLOWED_ORIGIN 指定；未配置则不强制 */
function sameOriginOk(req) {
  const allowed = process.env.ALLOWED_ORIGIN || '';
  if (!allowed) return true;
  const origin = req.headers.origin || '';
  const referer = req.headers.referer || '';
  if (origin) return origin === allowed;
  if (referer) return referer.startsWith(allowed);
  return true;
}

function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(obj));
}

module.exports = { cleanString, isValidEmail, hashIp, simpleUserAgent, clientIp, token, readJson, sameOriginOk, send };
