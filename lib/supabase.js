/**
 * Supabase REST(PostgREST) 轻封装 —— 使用 Node 原生 fetch，无第三方依赖。
 * 需要环境变量：
 *   SUPABASE_URL                例：https://xxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY   服务角色密钥（仅服务端使用，切勿暴露到前台）
 */

function baseHeaders(extra = {}) {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return Object.assign({
    apikey: key,
    Authorization: 'Bearer ' + key,
    'Content-Type': 'application/json',
  }, extra);
}

function restUrl(table, query = '') {
  const url = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  return url + '/rest/v1/' + table + (query ? ('?' + query) : '');
}

async function sbInsert(table, rows, { upsert = false } = {}) {
  const prefer = ['return=representation'];
  if (upsert) prefer.push('resolution=merge-duplicates');
  const res = await fetch(restUrl(table), {
    method: 'POST',
    headers: baseHeaders({ Prefer: prefer.join(',') }),
    body: JSON.stringify(rows),
  });
  if (!res.ok) throw new Error('Supabase insert ' + table + ' failed: ' + res.status + ' ' + (await res.text()));
  return res.json();
}

async function sbSelect(table, query) {
  const res = await fetch(restUrl(table, query), { method: 'GET', headers: baseHeaders() });
  if (!res.ok) throw new Error('Supabase select ' + table + ' failed: ' + res.status + ' ' + (await res.text()));
  return res.json();
}

async function sbPatch(table, query, body) {
  const res = await fetch(restUrl(table, query), {
    method: 'PATCH',
    headers: baseHeaders({ Prefer: 'return=representation' }),
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('Supabase patch ' + table + ' failed: ' + res.status + ' ' + (await res.text()));
  return res.json();
}

async function sbDelete(table, query) {
  const res = await fetch(restUrl(table, query), { method: 'DELETE', headers: baseHeaders() });
  if (!res.ok) throw new Error('Supabase delete ' + table + ' failed: ' + res.status + ' ' + (await res.text()));
  return true;
}

/** 调用 Postgres 函数（RPC），用于聚合统计 */
async function sbRpc(fn, args = {}) {
  const res = await fetch(restUrl('rpc/' + fn), {
    method: 'POST',
    headers: baseHeaders(),
    body: JSON.stringify(args),
  });
  if (!res.ok) throw new Error('Supabase rpc ' + fn + ' failed: ' + res.status + ' ' + (await res.text()));
  return res.json();
}

module.exports = { sbInsert, sbSelect, sbPatch, sbDelete, sbRpc };
