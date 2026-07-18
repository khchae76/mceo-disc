/**
 * 计分与类型判定（与 PHP 版逻辑一致）
 * ⚠ MVP 判定规则，阈值可依试测数据调整；未经心理测量学正式验证。
 */

const CONFIG = {
  score_most: 2,        // Most Like Me = +2
  score_least: -1,      // Least Like Me = -1
  raw_min: -24,
  raw_max: 48,
  adaptive_spread: 5,   // 四型 最高-最低 ≤ 5 → 四维切换者
  dual_gap: 3,          // 前两名差 ≤ 3 → 双主导
  colors: { D: '#E23D3D', I: '#F5B301', S: '#2E9E5B', C: '#2F6BD6' },
};

/**
 * @param {Array<{most_type:string,least_type:string}>} answers  24 条
 */
function calculateScores(answers) {
  const raw = { D: 0, I: 0, S: 0, C: 0 };
  for (const a of answers) {
    if (a.most_type in raw) raw[a.most_type] += CONFIG.score_most;
    if (a.least_type in raw) raw[a.least_type] += CONFIG.score_least;
  }

  const span = (CONFIG.raw_max - CONFIG.raw_min) || 1;
  const intensity = {};
  for (const k of ['D', 'I', 'S', 'C']) {
    intensity[k] = Math.round(((raw[k] - CONFIG.raw_min) / span) * 1000) / 10; // 0..100, 1 位小数
  }

  // 排序：原始分降序；同分按 D,I,S,C 稳定顺序
  const order = ['D', 'I', 'S', 'C'];
  const ranking = [...order].sort((x, y) => {
    if (raw[x] === raw[y]) return order.indexOf(x) - order.indexOf(y);
    return raw[y] - raw[x];
  });

  const primary = ranking[0];
  const secondary = ranking[1];
  const maxRaw = raw[ranking[0]];
  const minRaw = raw[ranking[3]];
  const top1 = raw[ranking[0]];
  const top2 = raw[ranking[1]];

  let combination, isDual = false;
  if (maxRaw - minRaw <= CONFIG.adaptive_spread) {
    combination = 'ADAPTIVE';
  } else {
    combination = primary + secondary;
    if (top1 - top2 <= CONFIG.dual_gap) isDual = true;
  }

  return { raw, intensity, primary, secondary, combination_type: combination, is_dual: isDual, ranking };
}

module.exports = { calculateScores, CONFIG };
