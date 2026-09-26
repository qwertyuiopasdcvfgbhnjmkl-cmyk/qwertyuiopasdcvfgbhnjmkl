/* ============================================================
   互動效果
   ------------------------------------------------------------
   設計原則：所有效果都可以優雅失效。
   - JS 未載入或失敗 → 內容正常顯示（初始隱藏狀態寫在 .js 之下）
   - 不支援 IntersectionObserver → 全部直接顯示
   - 使用者系統設定「減少動態效果」→ 全部直接顯示
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showAll(nodes) {
    nodes.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ------------------------------------------------------------
     1. 進場浮現：同群組的元素一起出現，並依序錯開
     ------------------------------------------------------------ */
  var groups = [
    ['.hero__inner', 1],
    ['.section__title', 1],
    ['.about__narrative', 1],
    ['.timeline__item', 4],
    ['.work', 3],
    ['.work__title', 3],
    ['.verse__item', 6],
    ['.contact__list li', 2]
  ].map(function (g) {
    return Array.prototype.slice.call(document.querySelectorAll(g[0]));
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    groups.forEach(showAll);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    groups.forEach(function (nodes) {
      nodes.forEach(function (el, i) {
        el.style.setProperty('--d', (i * 90) + 'ms');
        io.observe(el);
      });
    });
  }

  /* ------------------------------------------------------------
     2. 朱印蓋印
     ------------------------------------------------------------ */
  var seal = document.querySelector('.seal');
  if (seal && !reduceMotion) {
    seal.classList.add('is-stamp');
  }

  /* ------------------------------------------------------------
     3. 首頁山水視差：捲動時畫面緩慢位移
     ------------------------------------------------------------ */
  var hero = document.querySelector('.hero');
  if (hero && !reduceMotion) {
    var ticking = false;

    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.pageYOffset;
        if (y < window.innerHeight) {
          hero.style.backgroundPosition = 'center ' + (42 + y * 0.055) + '%';
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
