/* MCEO DISC — 答题逻辑（Vercel 版：题库与提交走 /api/*） */
(function () {
  'use strict';
  var M = window.MCEO;
  var KEY = 'mceo_disc_state';
  var QS = [];               // 题库（fetch 后填入）
  var TOTAL = 0;
  var API = { questions: '/api/questions', save: '/api/save-progress', submit: '/api/submit-assessment' };

  var state = load() || { token: null, infoDone: false, info: {}, answers: {}, order: {}, index: 0 };

  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function reset() { try { localStorage.removeItem(KEY); } catch (e) {} }

  var elInfo = document.getElementById('screen-info');
  var elQuiz = document.getElementById('screen-quiz');
  var elConfirm = document.getElementById('screen-confirm');
  var form = document.getElementById('info-form');

  function show(el) {
    [elInfo, elQuiz, elConfirm].forEach(function (s) { if (s) s.hidden = (s !== el); });
    window.scrollTo(0, 0);
  }

  function orderFor(q) {
    if (!state.order[q.id]) {
      var ids = q.options.map(function (o) { return o.id; });
      for (var i = ids.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = ids[i]; ids[i] = ids[j]; ids[j] = t;
      }
      state.order[q.id] = ids; save();
    }
    return state.order[q.id];
  }
  function optText(q, oid) {
    var o = q.options.find(function (x) { return x.id === oid; });
    return o ? (o[M.lang] || o.zh) : '';
  }

  function renderQuestion() {
    var q = QS[state.index];
    if (!q) return;
    var ans = state.answers[q.id] || { most: null, least: null };
    document.getElementById('q-progress').textContent =
      (M.t('q_progress') || 'Question %d of %d').replace('%d', state.index + 1).replace('%d', TOTAL);
    document.getElementById('q-progress-fill').style.width = Math.round((state.index / TOTAL) * 100) + '%';
    document.getElementById('q-scenario').textContent = q.scenario[M.lang] || q.scenario.zh;

    var wrap = document.getElementById('q-options');
    wrap.innerHTML = '';
    orderFor(q).forEach(function (oid) {
      var row = document.createElement('div'); row.className = 'opt-row'; row.setAttribute('data-oid', oid);
      var most = document.createElement('button');
      most.type = 'button'; most.className = 'opt-pick most' + (ans.most === oid ? ' selected' : '');
      most.setAttribute('aria-label', M.t('col_most')); most.setAttribute('aria-pressed', ans.most === oid ? 'true' : 'false');
      most.innerHTML = '<span>＋</span>';
      most.addEventListener('click', function () { pick(q.id, 'most', oid); });
      var text = document.createElement('span'); text.className = 'opt-text'; text.textContent = optText(q, oid);
      var least = document.createElement('button');
      least.type = 'button'; least.className = 'opt-pick least' + (ans.least === oid ? ' selected' : '');
      least.setAttribute('aria-label', M.t('col_least')); least.setAttribute('aria-pressed', ans.least === oid ? 'true' : 'false');
      least.innerHTML = '<span>－</span>';
      least.addEventListener('click', function () { pick(q.id, 'least', oid); });
      row.appendChild(most); row.appendChild(text); row.appendChild(least);
      wrap.appendChild(row);
    });
    document.getElementById('quiz-err').textContent = '';
    document.getElementById('btn-prev').disabled = (state.index === 0);
    document.getElementById('btn-next').textContent = (state.index === TOTAL - 1) ? M.t('btn_continue') : M.t('btn_next');
  }

  function pick(qid, kind, oid) {
    var a = state.answers[qid] || { most: null, least: null };
    if (kind === 'most') { a.most = (a.most === oid) ? null : oid; if (a.least === oid) a.least = null; }
    else { a.least = (a.least === oid) ? null : oid; if (a.most === oid) a.most = null; }
    state.answers[qid] = a; save(); renderQuestion();
  }

  function validateCurrent() {
    var q = QS[state.index]; var a = state.answers[q.id] || {};
    var err = document.getElementById('quiz-err');
    if (!a.most) { err.textContent = M.t('err_need_most'); return false; }
    if (!a.least) { err.textContent = M.t('err_need_least'); return false; }
    if (a.most === a.least) { err.textContent = M.t('err_same_option'); return false; }
    return true;
  }

  function next() {
    if (!validateCurrent()) return;
    if (state.index < TOTAL - 1) { state.index++; save(); renderQuestion(); }
    else {
      var missing = QS.some(function (q) { var a = state.answers[q.id] || {}; return !a.most || !a.least || a.most === a.least; });
      if (missing) { document.getElementById('quiz-err').textContent = M.t('err_incomplete'); return; }
      document.getElementById('q-progress-fill').style.width = '100%';
      show(elConfirm);
    }
  }
  function prev() { if (state.index > 0) { state.index--; save(); renderQuestion(); } }

  function setErr(name, msg) { var el = form.querySelector('[data-err="' + name + '"]'); if (el) el.textContent = msg; }
  function validateInfo() {
    var ok = true;
    form.querySelectorAll('.err').forEach(function (e) { e.textContent = ''; });
    if (!form.name.value.trim()) { setErr('name', M.t('err_name')); ok = false; }
    var email = form.email.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('email', M.t('err_email')); ok = false; }
    if (!form.whatsapp.value.trim()) { setErr('whatsapp', M.t('err_whatsapp')); ok = false; }
    if (!form.role.value) { setErr('role', M.t('err_role')); ok = false; }
    if (!form.consent.checked) { setErr('consent', M.t('consent_required')); ok = false; }
    return ok;
  }

  function submitInfo(e) {
    e.preventDefault();
    if (!validateInfo()) return;
    var btn = form.querySelector('button[type=submit]');
    btn.disabled = true; btn.textContent = M.t('loading');
    state.info = {
      name: form.name.value.trim(), email: form.email.value.trim(), whatsapp: form.whatsapp.value.trim(),
      company: form.company.value.trim(), industry: form.industry.value.trim(),
      role: form.role.value, consent: 1, language: M.lang
    };
    fetch(API.save, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(state.info) })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.ok && d.token) {
          state.token = d.token; state.infoDone = true; state.index = 0; save();
          show(elQuiz); renderQuestion();
        } else {
          setErr('consent', (d && d.error) ? d.error : M.t('sys_error'));
          btn.disabled = false; btn.textContent = M.t('btn_continue');
        }
      })
      .catch(function () { setErr('consent', M.t('sys_error')); btn.disabled = false; btn.textContent = M.t('btn_continue'); });
  }

  function submitAssessment() {
    var btn = document.getElementById('btn-submit');
    btn.disabled = true; btn.textContent = M.t('loading');
    var payload = {
      token: state.token, language: M.lang,
      answers: QS.map(function (q) { var a = state.answers[q.id] || {}; return { question_id: q.id, most: a.most, least: a.least }; })
    };
    fetch(API.submit, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.ok && d.token) { reset(); window.location.href = '/results?token=' + encodeURIComponent(d.token) + '&lang=' + M.lang; }
        else { document.getElementById('confirm-err').textContent = (d && d.error) ? d.error : M.t('sys_error'); btn.disabled = false; btn.textContent = M.t('btn_submit'); }
      })
      .catch(function () { document.getElementById('confirm-err').textContent = M.t('sys_error'); btn.disabled = false; btn.textContent = M.t('btn_submit'); });
  }

  function confirmRestart() {
    var modal = document.createElement('div'); modal.className = 'modal-overlay';
    modal.innerHTML = '<div class="modal card" role="dialog" aria-modal="true"><p class="modal-msg">' + escapeHtml(M.t('restart_confirm')) +
      '</p><div class="modal-actions"><button type="button" class="btn btn-ghost" id="m-cancel">' + escapeHtml(M.lang === 'en' ? 'Cancel' : '取消') +
      '</button><button type="button" class="btn btn-primary" id="m-ok">' + escapeHtml(M.t('btn_restart')) + '</button></div></div>';
    document.body.appendChild(modal);
    modal.querySelector('#m-cancel').addEventListener('click', function () { modal.remove(); });
    modal.querySelector('#m-ok').addEventListener('click', function () {
      reset(); state = { token: null, infoDone: false, info: {}, answers: {}, order: {}, index: 0 };
      modal.remove(); form.reset();
      var sb = form.querySelector('button[type=submit]'); sb.disabled = false; sb.textContent = M.t('btn_continue');
      show(elInfo);
    });
  }
  function escapeHtml(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  document.addEventListener('mceo:langchange', function () { if (!elQuiz.hidden) renderQuestion(); });
  form.addEventListener('submit', submitInfo);
  document.getElementById('btn-next').addEventListener('click', next);
  document.getElementById('btn-prev').addEventListener('click', prev);
  document.getElementById('btn-restart').addEventListener('click', confirmRestart);
  document.getElementById('btn-back-check').addEventListener('click', function () { show(elQuiz); state.index = TOTAL - 1; save(); renderQuestion(); });
  document.getElementById('btn-submit').addEventListener('click', submitAssessment);

  // 载入题库后启动
  fetch(API.questions).then(function (r) { return r.json(); }).then(function (d) {
    if (!d || !d.ok || !Array.isArray(d.questions)) { throw new Error('questions'); }
    QS = d.questions; TOTAL = QS.length;
    if (state.infoDone && state.token) { show(elQuiz); renderQuestion(); } else { show(elInfo); }
  }).catch(function () {
    // 题库加载失败：留在资料页并提示
    show(elInfo);
    var e = form.querySelector('[data-err="consent"]'); if (e) e.textContent = M.t('sys_error');
  });
})();
