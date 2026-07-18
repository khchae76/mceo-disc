/* MCEO DISC — 全局脚本：双语 i18n 引擎 + 语言切换（不刷新、不清答案） */
(function () {
  'use strict';
  window.MCEO = window.MCEO || {};
  var M = window.MCEO;
  M.i18n = M.i18n || { zh: {}, en: {} };

  // 读取本地保存的语言偏好（优先于服务端默认）
  var stored = null;
  try { stored = localStorage.getItem('mceo_disc_lang'); } catch (e) {}
  M.lang = (stored === 'zh' || stored === 'en') ? stored : (M.lang || 'zh');

  M.t = function (key) {
    var dict = M.i18n[M.lang] || {};
    return (key in dict) ? dict[key] : (M.i18n.zh[key] !== undefined ? M.i18n.zh[key] : key);
  };

  function applyI18n() {
    var dict = M.i18n[M.lang] || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-html')];
      if (typeof v === 'string') el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-ph')];
      if (typeof v === 'string') el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-i18n-list]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-list')];
      if (Array.isArray(v)) {
        el.innerHTML = '';
        v.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          el.appendChild(li);
        });
      }
    });

    // html lang 属性
    document.documentElement.setAttribute('lang', M.lang === 'en' ? 'en' : 'zh-Hans');
    document.documentElement.setAttribute('data-lang', M.lang);

    // 整段语言块（用于隐私/条款等长文）
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.hidden = (el.getAttribute('data-lang-block') !== M.lang);
    });

    // 语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === M.lang ? 'true' : 'false');
    });
  }
  M.applyI18n = applyI18n;

  M.setLang = function (lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    M.lang = lang;
    try { localStorage.setItem('mceo_disc_lang', lang); } catch (e) {}
    applyI18n();
    // 通知动态页面（题目/报告）用新语言重绘，答案不受影响
    document.dispatchEvent(new CustomEvent('mceo:langchange', { detail: { lang: lang } }));
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () { M.setLang(b.getAttribute('data-lang')); });
    });
    var yr = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = yr; });
    applyI18n();
  });
})();
