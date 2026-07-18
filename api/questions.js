/** GET /api/questions —— 返回 24 题（剔除 type，前台不可见类型映射） */
const QUESTIONS = require('../lib/questions');
const { send } = require('../lib/util');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { ok: false, error: 'Method not allowed' });
  const publicQuestions = QUESTIONS.map((q) => ({
    id: q.id,
    scenario: q.scenario,
    options: q.options.map((o) => ({ id: o.id, zh: o.zh, en: o.en })), // 不含 type
  }));
  // 缓存 1 小时（题库很少变动）
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  send(res, 200, { ok: true, questions: publicQuestions });
};
