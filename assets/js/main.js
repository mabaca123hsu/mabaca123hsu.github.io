/* ==========================================================================
   TSAI — 站点脚本
   主题切换 / 移动端导航 / 顶栏吸附 / 滚动出现 / 复制链接 / 复制代码
   原生 JS，无依赖。
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'tsai-theme';

  /* ---------- 主题 ---------- */
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      themeBtn.setAttribute('aria-label', next === 'dark' ? '切换到浅色主题' : '切换到深色主题');
    });
  }

  /* ---------- 移动端导航 ---------- */
  var nav = document.getElementById('siteNav');
  var navToggle = document.getElementById('navToggle');

  function closeNav() {
    if (!nav) return;
    nav.classList.remove('is-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#siteNav') && !e.target.closest('#navToggle')) closeNav();
    });
  }

  /* ---------- 当前页高亮 ---------- */
  (function markActive() {
    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('#siteNav a').forEach(function (a) {
      var target = (a.getAttribute('href') || '').split('#')[0].split('/').pop().toLowerCase();
      if (target && target === here) {
        a.classList.add('is-active');
        a.setAttribute('aria-current', 'page');
      }
    });
  })();

  /* ---------- 顶栏吸附阴影 ---------- */
  var topbar = document.querySelector('.topbar');
  var lastY = -1;
  function onScroll() {
    var y = window.scrollY || 0;
    if (topbar && y !== lastY) {
      topbar.classList.toggle('is-stuck', y > 8);
      lastY = y;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 滚动出现 ---------- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      revealables.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i * 45, 240) + 'ms';
        io.observe(el);
      });

      /* 安全网：首屏内的元素若因任何原因没能触发，1 秒后直接显示 */
      window.addEventListener('load', function () {
        setTimeout(function () {
          revealables.forEach(function (el) {
            var box = el.getBoundingClientRect();
            if (box.top < window.innerHeight && box.bottom > 0) {
              el.classList.add('is-in');
            }
          });
        }, 900);
      });
    } else {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    }
  }

  /* ---------- 复制（链接 / 代码） ---------- */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); resolve(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var original = btn.textContent;
    btn.addEventListener('click', function () {
      copyText(btn.getAttribute('data-copy')).then(function () {
        btn.textContent = '已复制 ✓';
        btn.classList.add('is-done');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('is-done');
        }, 1600);
      }, function () {});
    });
  });

  document.querySelectorAll('.code .copy').forEach(function (btn) {
    var block = btn.closest('.code');
    var code = block && block.querySelector('pre code');
    if (!code) return;
    btn.addEventListener('click', function () {
      var text = code.innerText.replace(/\u00a0/g, ' ');
      copyText(text).then(function () {
        var old = btn.textContent;
        btn.textContent = '已复制 ✓';
        btn.classList.add('is-done');
        setTimeout(function () {
          btn.textContent = old;
          btn.classList.remove('is-done');
        }, 1600);
      }, function () {});
    });
  });

  /* ---------- 页脚年份 ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
