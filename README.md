# MCEO DISC 成交沟通测评™ · Vercel + Supabase 版
**MCEO DISC Sales & Communication Profile™**

双语（简体中文 / English）DISC 在线测评系统，部署在 **Vercel**（前台 + Serverless API），
数据存于 **Supabase（PostgreSQL）**。无需 PHP、无需服务器、无需构建流程，自动 HTTPS。

> **重要声明**：本系统为**商业培训与自我觉察工具**，并非临床心理测试、医疗诊断、招聘淘汰工具或职业成功预测工具，也未获任何官方心理测量认证。DISC 行为理论源自 William Moulton Marston；题库、报告、类型名称与计分逻辑均为 **MCEO 原创**。

---

## 架构
```
浏览器（静态前台 /public）
   │  fetch JSON（同源）
   ▼
Vercel Serverless Functions（/api/*.js，Node 18+）
   │  计分与 D/I/S/C 类型映射只在这里，前台看不到
   ▼  Supabase REST（service_role 密钥，仅服务端）
Supabase / PostgreSQL（respondents / sessions / answers / scores）
```

## 目录结构
```
public/                        静态前台（Vercel 直接托管）
  index.html                   欢迎页
  assessment.html              基本资料 + 24 题作答
  results.html                 结果报告
  privacy.html / terms.html    隐私 / 条款（双语）
  admin/index.html             密码保护的简易统计页
  assets/css/                  style.css · print.css
  assets/js/                   i18n.js（双语文案）· app.js（切换）· assessment.js · results.js · vendor/chart.min.js
  assets/images/logo.png
api/                           Serverless 函数
  questions.js                 返回 24 题（剔除类型映射）
  save-progress.js             建立受测者 + 场次
  submit-assessment.js         服务端权威计分并写库
  get-result.js                按 token 返回报告数据（中英双语）
  admin-stats.js               密码保护的聚合统计
lib/                           服务端专用（不对外暴露）
  questions.js                 题库（含真实 D/I/S/C 映射）
  reports.js                   17 份报告 + 四类顾客成交提醒
  scoring.js                   计分与类型判定
  supabase.js                  Supabase REST 封装（原生 fetch，无依赖）
  util.js                      校验 / 哈希 / 请求辅助
supabase/schema.sql            在 Supabase SQL Editor 执行
vercel.json  package.json  .env.example  .gitignore
DEPLOYMENT.md                  非技术版部署指南
```

## 功能
- 双语无刷新切换（答案与图表随语言更新，进度不丢）
- 24 组原创强迫选择题（四型各 24 次，完全平衡）
- 服务端权威计分，前台拿不到类型映射（防作弊）
- 相对行为强度（0–100）+ 雷达图 + 柱状图（Chart.js 本地打包）
- 17 份原创报告（4 主型 + 12 组合 + 四维切换者），每份 10 段 + 成交模块
- localStorage 进度续答、返回修改、重新开始二次确认
- 隐私/条款、同意 Checkbox、IP 仅存加盐哈希、PDPA 友善
- A4 打印 / 存 PDF；移动优先、响应式、无障碍
- 后台：Supabase 内置表格看/筛/导出 + 密码保护统计页

## 快速开始
详见 **DEPLOYMENT.md**。概要：
1. Supabase 建项目 → SQL Editor 执行 `supabase/schema.sql` → 复制 URL 与 service_role 密钥；
2. 文件上传 GitHub → Vercel 导入；
3. 在 Vercel 填环境变量（见 `.env.example`）→ Deploy；
4. 打开网址测评；`/admin` 用 `ADMIN_PASSWORD` 看统计。

## 环境变量
见 `.env.example`：`SUPABASE_URL`、`SUPABASE_SERVICE_ROLE_KEY`、`ADMIN_PASSWORD`、`APP_SECRET`、`ALLOWED_ORIGIN`（选填）、`DEBUG_MODE`（选填）。

## 计分逻辑（摘要）
Most +2 / Least −1；Raw −24…48；强度 =((Raw+24)/72)×100。
判定顺序：先「四维切换 Adaptive（最高−最低≤5）」，再「双主导（前两名差≤3）」，否则标准两字母组合。
阈值在 `lib/scoring.js`，可依试测数据调整。**MVP 规则，未经心理测量学正式验证。**

## 安全
- `service_role` 仅在 Vercel 环境变量；前台永不接触。
- Supabase 开启 RLS，匿名无法直接读写；仅后端函数（service_role）可访问。
- `/api/questions` 返回的题目不含 type。
- API 走同源校验（`ALLOWED_ORIGIN`）。

## 授权
题库、报告、界面与代码为 MCEO 原创，版权所有。未经许可不得复制、转售或商业分发。
