/* ── Phở Quang Trung — shared behaviour ── */
(function () {
  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav shadow on scroll
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('shadow-soft', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Mobile menu toggle
  var burger = document.querySelector('.burger');
  var panel = document.getElementById('mobile-menu');
  if (burger && panel) {
    var close = function () {
      panel.classList.add('closing');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      window.setTimeout(function () { panel.hidden = true; panel.classList.remove('closing'); }, 320);
    };
    var open = function () {
      panel.hidden = false;
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close menu');
    };
    burger.addEventListener('click', function () {
      if (panel.hidden) open(); else close();
    });
    panel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) close();
    });
  }

  // Menu filtering (menu page only)
  var filters = document.getElementById('menu-filters');
  var groups = Array.prototype.slice.call(document.querySelectorAll('.menu-group'));
  if (filters && groups.length) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-pill');
      if (!btn) return;
      var f = btn.dataset.filter;
      filters.querySelectorAll('.filter-pill').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      groups.forEach(function (g) {
        g.classList.toggle('hide', !(f === 'all' || g.dataset.cat === f));
      });
    });
  }
})();
