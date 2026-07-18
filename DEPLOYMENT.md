# 部署指南 · Vercel + Supabase
**MCEO DISC 成交沟通测评™**

本指南面向非技术人员，全程在网页上点击操作，不需要写代码、不需要命令行。
预计 30–45 分钟完成。整套用的是 Vercel + Supabase 的**免费额度**即可起步。

分三部分：
1. **Supabase** —— 建数据库（存资料）
2. **Vercel** —— 部署网站与 API
3. **连接与测试**

---

## 第一部分：Supabase（数据库）

### 1. 注册并建立项目
1. 打开 https://supabase.com → **Start your project** → 用 GitHub 或 Email 注册。
2. 点 **New project**。
3. 填 Project name（例如 `mceo-disc`），设一个 **Database Password**（记下来），Region 选 **Southeast Asia (Singapore)**（离马来西亚最近）。
4. 点 **Create new project**，等 1–2 分钟初始化完成。

### 2. 建立数据表
1. 左侧菜单点 **SQL Editor** → **New query**。
2. 打开本系统的 `supabase/schema.sql`，把里面**全部内容**复制粘贴进去。
3. 点右下角 **Run**。看到成功提示即可（会建好 4 张表 + 统计函数 + 安全策略）。

### 3. 拿到连接密钥（稍后填到 Vercel）
1. 左侧 **Project Settings**（齿轮）→ **API**。
2. 记下两样：
   - **Project URL**（形如 `https://xxxx.supabase.co`）
   - **service_role** 密钥（在 “Project API keys” 里，点 Reveal 显示）
     > ⚠ `service_role` 是最高权限密钥，**只**会填到 Vercel 的后台环境变量里，**绝不**放到网页前台或公开分享。

---

## 第二部分：Vercel（网站 + API）

Vercel 部署最简单的方式是先把文件放到 GitHub，再让 Vercel 导入。下面是**全程网页操作**的做法。

### 4. 把文件上传到 GitHub
1. 打开 https://github.com → 注册/登录 → 右上角 **+** → **New repository**。
2. 填仓库名（例如 `mceo-disc`），选 **Private**（私有），点 **Create repository**。
3. 在新仓库页点 **uploading an existing file**。
4. 把本系统**解压后的所有文件和文件夹**（`public/`、`api/`、`lib/`、`supabase/`、`vercel.json`、`package.json` 等）**整个拖进**上传框。
   > 注意：上传的是**这些文件本身**，不要多套一层文件夹。
5. 拉到底点 **Commit changes**。

### 5. 用 Vercel 导入
1. 打开 https://vercel.com → **Sign up** → 选 **Continue with GitHub**（用 GitHub 登录最顺）。
2. 点 **Add New… → Project**。
3. 找到刚才的 `mceo-disc` 仓库，点 **Import**。
4. **先别急着 Deploy**，展开 **Environment Variables**，逐条添加（见下表）。

### 6. 填写环境变量（Environment Variables）
| Name | Value |
|---|---|
| `SUPABASE_URL` | 第 3 步的 Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | 第 3 步的 service_role 密钥 |
| `ADMIN_PASSWORD` | 你自定的后台统计页密码（设强一点） |
| `APP_SECRET` | 随手敲一段很长的随机字符串（给 IP 加盐用） |
| `ALLOWED_ORIGIN` | 先留空，等第 8 步拿到网址后再填 |

填完点 **Deploy**，等 1–2 分钟部署完成，会给你一个网址（形如 `https://mceo-disc-xxxx.vercel.app`）。

---

## 第三部分：连接与测试

### 7. 打开网站试跑
- 打开 Vercel 给的网址，应看到测评首页。
- 完整做一遍 24 题，看是否正常出报告（含雷达图、中英切换）。

### 8. 回填 ALLOWED_ORIGIN（建议，增强安全）
1. Vercel → 你的项目 → **Settings → Environment Variables**。
2. 编辑 `ALLOWED_ORIGIN`，填你的正式网址（例如 `https://mceo-disc-xxxx.vercel.app`，或之后绑定的自有域名，**不要结尾斜线**）。
3. 到 **Deployments** 页，对最新一次点 **⋯ → Redeploy** 让它生效。

### 9. 查看后台统计
- 打开 `你的网址/admin`，输入你设的 `ADMIN_PASSWORD`，即可看到总人数、D/I/S/C 分布、组合类型分布。

### 10. 查看/导出每条记录（用 Supabase 自带界面）
- 到 **Supabase → Table Editor**，打开 `assessment_scores`、`respondents`、`assessment_sessions` 等表。
- Supabase 自带**筛选**和 **Export → CSV**，可直接导出数据到 Excel。
- 也可在 **SQL Editor** 用 SQL 做更复杂的查询。

### 11.（可选）绑定自有域名
- Vercel → 项目 → **Settings → Domains** → 添加你的域名，按提示到域名商设置 DNS。
- 绑好后记得把第 8 步的 `ALLOWED_ORIGIN` 改成新域名并 Redeploy。

---

## 常见问题
- **报告页显示「找不到报告」**：多半是 `SUPABASE_URL` 或 `service_role` 填错，或 schema 没导入成功。核对第 2、3、6 步。
- **后台统计页密码不对**：核对 Vercel 里的 `ADMIN_PASSWORD`，改完要 Redeploy。
- **想排查具体错误**：临时在 Vercel 加一个环境变量 `DEBUG_MODE=true`，接口会返回详细错误；排查完删掉或设为空。
- **改题目 / 报告文字**：编辑 `lib/questions.js`、`lib/reports.js`（界面文案在 `public/assets/js/i18n.js`），提交到 GitHub 后 Vercel 会自动重新部署。
- **改品牌颜色**：编辑 `public/assets/css/style.css` 顶部 `:root` 的变量。

## 安全要点
- `service_role` 密钥只在 Vercel 后台环境变量里，前台代码永远拿不到。
- 数据库已开启 **RLS（行级安全）**，匿名一律无法直接读写；只有用 service_role 的后端函数能访问。
- 题目的 D/I/S/C 类型映射只在服务端（`lib/questions.js`），前台 `/api/questions` 返回的题目**不含类型**。

## 成本
- Supabase 免费版：每月约 50,000 活跃用户额度、500MB 数据库，起步足够。
- Vercel 免费版（Hobby）：个人/小规模使用足够；商用大流量再考虑升级。
