/* Theme toggle + publication filters. No dependencies. */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- theme */

  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function currentTheme() {
    var set = root.getAttribute('data-theme');
    return set === 'dark' || set === 'light' ? set : systemTheme();
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* -------------------------------------------------------------- filters */

  var bar = document.querySelector('[data-filters]');
  if (!bar) return;

  var items = Array.prototype.slice.call(document.querySelectorAll('.pub-list .pub'));
  var empty = document.querySelector('.filters__empty');
  var buttons = Array.prototype.slice.call(bar.querySelectorAll('button'));

  function apply(key) {
    var shown = 0;

    items.forEach(function (item) {
      var topics = (item.getAttribute('data-topics') || '').split(/\s+/);
      var type = item.getAttribute('data-type') || '';
      var match = key === 'all' || type === key || topics.indexOf(key) !== -1;
      item.hidden = !match;
      if (match) shown++;
    });

    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.filter === key));
    });

    if (empty) empty.hidden = shown !== 0;
  }

  bar.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-filter]');
    if (button) apply(button.dataset.filter);
  });

  apply('all');
})();
