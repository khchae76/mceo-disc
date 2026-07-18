-- ============================================================
-- MCEO DISC 成交沟通测评™ · Supabase (PostgreSQL) 结构
-- 在 Supabase 后台 → SQL Editor 粘贴并 Run。
-- ============================================================

-- ---------- 受测者 ----------
create table if not exists respondents (
  id           bigint generated always as identity primary key,
  name         text not null,
  email        text not null,
  whatsapp     text,
  company      text,
  industry     text,
  role         text not null default 'other' check (role in ('owner','sales','manager','team','other')),
  created_at   timestamptz not null default now()
);
create index if not exists idx_resp_email on respondents(email);
create index if not exists idx_resp_created on respondents(created_at);

-- ---------- 测评场次 ----------
create table if not exists assessment_sessions (
  id                 bigint generated always as identity primary key,
  session_token      text not null unique,
  respondent_id      bigint not null references respondents(id) on delete cascade,
  language           text not null default 'zh' check (language in ('zh','en')),
  status             text not null default 'in_progress' check (status in ('in_progress','completed')),
  start_time         timestamptz not null default now(),
  complete_time      timestamptz,
  consent_at         timestamptz,
  ip_hash            text,
  user_agent_summary text,
  created_at         timestamptz not null default now()
);
create index if not exists idx_sess_status on assessment_sessions(status);
create index if not exists idx_sess_created on assessment_sessions(created_at);

-- ---------- 逐题答案 ----------
create table if not exists assessment_answers (
  id              bigint generated always as identity primary key,
  session_id      bigint not null references assessment_sessions(id) on delete cascade,
  question_id     smallint not null,
  most_option_id  text not null,
  least_option_id text not null,
  most_type       char(1) not null,
  least_type      char(1) not null,
  unique (session_id, question_id)
);

-- ---------- 计分结果 ----------
create table if not exists assessment_scores (
  id               bigint generated always as identity primary key,
  session_id       bigint not null unique references assessment_sessions(id) on delete cascade,
  d_raw smallint not null, i_raw smallint not null, s_raw smallint not null, c_raw smallint not null,
  d_intensity numeric(5,1) not null, i_intensity numeric(5,1) not null,
  s_intensity numeric(5,1) not null, c_intensity numeric(5,1) not null,
  primary_style   char(1) not null,
  secondary_style char(1) not null,
  combination_type text not null,
  is_dual boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists idx_score_primary on assessment_scores(primary_style);
create index if not exists idx_score_combo on assessment_scores(combination_type);

-- ============================================================
-- Row Level Security：默认拒绝所有匿名访问。
-- 我们的 Vercel 函数使用 service_role 密钥（自动绕过 RLS），
-- 因此启用 RLS 后，前台（anon key）无法直接读写任何数据。
-- ============================================================
alter table respondents         enable row level security;
alter table assessment_sessions enable row level security;
alter table assessment_answers  enable row level security;
alter table assessment_scores   enable row level security;
-- 不添加任何 policy = 匿名一律拒绝（service_role 仍可完全访问）。

-- ============================================================
-- 聚合统计函数：供 /api/admin-stats 调用（服务端已做密码校验）
-- ============================================================
create or replace function disc_stats()
returns json
language sql
security definer
set search_path = public
as $$
  select json_build_object(
    'total',      (select count(*) from assessment_sessions),
    'completed',  (select count(*) from assessment_sessions where status='completed'),
    'incomplete', (select count(*) from assessment_sessions where status<>'completed'),
    'zh',         (select count(*) from assessment_sessions where status='completed' and language='zh'),
    'en',         (select count(*) from assessment_sessions where status='completed' and language='en'),
    'primary',    (select coalesce(json_object_agg(primary_style, c), '{}'::json)
                     from (select primary_style, count(*) c from assessment_scores group by primary_style) t),
    'combo',      (select coalesce(json_agg(json_build_object('type', combination_type, 'count', c) order by c desc), '[]'::json)
                     from (select combination_type, count(*) c from assessment_scores group by combination_type) t)
  );
$$;

-- 允许通过 REST 调用该函数（service_role 默认可执行；这里显式授权更稳妥）
grant execute on function disc_stats() to service_role;
