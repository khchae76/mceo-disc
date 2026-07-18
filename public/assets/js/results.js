/* MCEO DISC — 结果报告渲染 + 图表（Vercel 版：数据走 /api/get-result） */
(function () {
  'use strict';
  var M = window.MCEO;
  var R = null;
  var COLORS = (M && M.colors) || { D: '#E23D3D', I: '#F5B301', S: '#2E9E5B', C: '#2F6BD6' };
  var ORDER = ['D', 'I', 'S', 'C'];
  var radar = null, bar = null;

  function L(obj) { if (!obj) return ''; return (obj[M.lang] != null) ? obj[M.lang] : (obj.zh || ''); }
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }

  var SECS = [
    ['sec_2', 's2_pattern'], ['sec_3', 's3_strengths'], ['sec_4', 's4_blindspots'],
    ['sec_5', 's5_communication'], ['sec_6', 's6_decision_buying'], ['sec_7', 's7_sales_strength'],
    ['sec_8', 's8_lose_customer'], ['sec_9', 's9_how_to_reach_you']
  ];

  function styleName(letter) { var t = R.types[letter]; return t ? L(t.name) : letter; }

  function renderMeta() {
    document.getElementById('r-name').textContent = R.meta.name || '';
    document.getElementById('r-date').textContent = R.meta.date || '';
    setBadge('r-primary', R.scores.primary);
    setBadge('r-secondary', R.scores.secondary);
    document.getElementById('r-combo-name').textContent = R.combo_report ? L(R.combo_report.name) : R.scores.combination_type;
    document.getElementById('r-combo-badge').style.setProperty('--accent', accentFor(R.scores.combination_type));
    document.getElementById('r-dual-note').hidden = !R.scores.is_dual;
  }
  function setBadge(prefix, letter) {
    document.getElementById(prefix + '-letter').textContent = letter;
    document.getElementById(prefix + '-name').textContent = styleName(letter);
    document.getElementById(prefix + '-badge').style.setProperty('--accent', COLORS[letter] || '#888');
  }
  function accentFor(combo) { return combo === 'ADAPTIVE' ? '#6B7280' : (COLORS[combo.charAt(0)] || '#888'); }

  function renderScoreTable() {
    var box = document.getElementById('r-score-table'); box.innerHTML = '';
    ORDER.forEach(function (k) {
      var val = R.scores.intensity[k], raw = R.scores.raw[k];
      var row = document.createElement('div'); row.className = 'score-row';
      row.innerHTML =
        '<span class="score-key" style="color:' + COLORS[k] + '">' + k + '</span>' +
        '<span class="score-name">' + esc(styleName(k)) + '</span>' +
        '<span class="score-bar"><span class="score-fill" style="width:' + val + '%;background:' + COLORS[k] + '"></span></span>' +
        '<span class="score-val">' + val + '</span>' +
        '<span class="score-raw">(' + (raw >= 0 ? '+' : '') + raw + ')</span>';
      box.appendChild(row);
    });
  }

  function sectionBlock(titleKey, num, textObjOrArr) {
    var wrap = document.createElement('div'); wrap.className = 'report-section';
    var h = '<h3 class="rs-title"><span class="rs-num">' + num + '</span>' + esc(M.t(titleKey)) + '</h3>';
    var bodyHtml;
    var maybeArr = textObjOrArr[M.lang] || textObjOrArr.zh;
    if (Array.isArray(maybeArr)) {
      bodyHtml = '<ol class="rs-list">' + maybeArr.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ol>';
    } else {
      bodyHtml = '<p class="rs-body">' + esc(L(textObjOrArr)) + '</p>';
    }
    wrap.innerHTML = h + bodyHtml; return wrap;
  }

  function renderPrimaryReport() {
    var el = document.getElementById('r-primary-report'); el.innerHTML = '';
    var rep = R.primary_report; if (!rep) return;
    var p = R.scores.primary;
    var head = document.createElement('div'); head.className = 'report-lead'; head.style.setProperty('--accent', COLORS[p]);
    head.innerHTML = '<span class="lead-letter">' + p + '</span><div><div class="lead-name">' + esc(styleName(p)) +
      '</div><div class="lead-pos">' + esc(L(R.types[p].positioning)) + '</div></div>';
    el.appendChild(head);
    el.appendChild(sectionBlock('sec_1', 1, R.types[p].positioning));
    SECS.forEach(function (pair, i) { if (rep[pair[1]]) el.appendChild(sectionBlock(pair[0], i + 2, rep[pair[1]])); });
    if (rep.s10_7day) el.appendChild(sectionBlock('sec_10', 10, rep.s10_7day));
  }

  function renderComboReport() {
    var el = document.getElementById('r-combo-report'); el.innerHTML = '';
    var rep = R.combo_report; if (!rep) return;
    var head = document.createElement('div'); head.className = 'report-lead combo-lead'; head.style.setProperty('--accent', accentFor(R.scores.combination_type));
    head.innerHTML = '<div><div class="lead-cap">' + esc(M.t('combo_title')) + '</div><div class="lead-name">' + esc(L(rep.name)) +
      '</div><div class="lead-pos">' + esc(L(rep.positioning)) + '</div></div>';
    el.appendChild(head);
    el.appendChild(sectionBlock('sec_1', 1, rep.positioning));
    SECS.forEach(function (pair, i) { if (rep[pair[1]]) el.appendChild(sectionBlock(pair[0], i + 2, rep[pair[1]])); });
    if (rep.s10_7day) el.appendChild(sectionBlock('sec_10', 10, rep.s10_7day));
  }

  function renderSales() {
    var el = document.getElementById('r-sales-module'); el.innerHTML = '';
    if (!R.sales) return;
    var html = '<h2 class="section-h sales-h">' + esc(M.t('sales_title')) + '</h2>';
    html += '<div class="sales-block"><h3>' + esc(M.t('sales_natural')) + '</h3><p>' + esc(L(R.sales.natural_close)) + '</p></div>';
    html += '<div class="sales-block"><h3>' + esc(M.t('sales_mistake')) + '</h3><p>' + esc(L(R.sales.common_mistake)) + '</p></div>';
    html += '<h3 class="sellto-h">' + esc(M.t('sales_sellto_title')) + '</h3><div class="sellto-grid">';
    ORDER.forEach(function (k) {
      html += '<div class="sellto-card" style="--accent:' + COLORS[k] + '"><h4>' + esc(M.t('sellto_' + k)) + '</h4><p>' + esc(L(R.sell_to[k])) + '</p></div>';
    });
    html += '</div>'; el.innerHTML = html;
  }

  function drawCharts() {
    if (typeof Chart === 'undefined') return;
    var labels = ORDER.map(function (k) { return k + ' · ' + styleName(k); });
    var data = ORDER.map(function (k) { return R.scores.intensity[k]; });
    var bg = ORDER.map(function (k) { return COLORS[k]; });
    if (radar) radar.destroy(); if (bar) bar.destroy();
    radar = new Chart(document.getElementById('radarChart').getContext('2d'), {
      type: 'radar',
      data: { labels: labels, datasets: [{ data: data, backgroundColor: 'rgba(245,130,32,0.18)', borderColor: '#F58220', pointBackgroundColor: bg, pointBorderColor: bg, borderWidth: 2, pointRadius: 4 }] },
      options: { responsive: false, plugins: { legend: { display: false } }, scales: { r: { min: 0, max: 100, ticks: { stepSize: 20, backdropColor: 'transparent' }, pointLabels: { font: { size: 12 } } } } }
    });
    bar = new Chart(document.getElementById('barChart').getContext('2d'), {
      type: 'bar',
      data: { labels: ORDER, datasets: [{ data: data, backgroundColor: bg, borderRadius: 6 }] },
      options: { responsive: false, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100, ticks: { stepSize: 20 } } } }
    });
  }

  function renderAll() {
    if (!R) return;
    renderMeta(); renderScoreTable(); renderPrimaryReport(); renderComboReport(); renderSales(); drawCharts();
  }

  function showError(msg) {
    var rep = document.getElementById('report');
    var nf = document.getElementById('report-notfound');
    if (rep) rep.hidden = true;
    if (nf) { nf.hidden = false; var m = nf.querySelector('[data-err-msg]'); if (m) m.textContent = msg; }
  }

  document.addEventListener('mceo:langchange', renderAll);

  // 取 token 并拉取数据
  var params = new URLSearchParams(window.location.search);
  var token = params.get('token');
  if (params.get('lang') === 'en' || params.get('lang') === 'zh') { M.setLang(params.get('lang')); }
  if (!token) { showError(M.t('not_found')); return; }

  fetch('/api/get-result?token=' + encodeURIComponent(token))
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (!d || !d.ok || !d.data) { showError((d && d.error) ? d.error : M.t('not_found')); return; }
      R = d.data; M.result = R;
      var rep = document.getElementById('report'); if (rep) rep.hidden = false;
      renderAll();
    })
    .catch(function () { showError(M.t('sys_error')); });
})();
