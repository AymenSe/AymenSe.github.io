/* Drifting node graph behind the page.
 *
 * Nodes wander slowly and link to their neighbours; the mouse pushes nearby
 * nodes aside and draws its own links to them. Colours come from the
 * --net-* custom properties so the graph follows the light/dark theme.
 *
 * Honours prefers-reduced-motion by painting a single static frame, and
 * sleeps whenever the tab is hidden.
 */
(function () {
  'use strict';

  var canvas = document.querySelector('.neural-bg');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var LINK_DIST = 130;     // px — node-to-node link range
  var POINTER_DIST = 175;  // px — cursor influence radius
  var AREA_PER_NODE = 17000;
  var MAX_NODES = 85;
  var DRIFT = 0.16;        // px per frame
  var PUSH = 0.7;          // how hard the cursor shoves a node aside

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  var nodes = [];
  var width = 0;
  var height = 0;
  var frameId = null;
  var pointer = { x: 0, y: 0, active: false };
  var colors = { node: '', line: '', glow: '' };

  /* ------------------------------------------------------------- colours */

  function readColors() {
    var styles = getComputedStyle(document.documentElement);
    colors.node = styles.getPropertyValue('--net-node').trim() || 'rgba(120, 130, 200, .5)';
    colors.line = styles.getPropertyValue('--net-line').trim() || 'rgba(120, 130, 200, .2)';
    colors.glow = styles.getPropertyValue('--net-glow').trim() || colors.node;
  }

  /* -------------------------------------------------------------- layout */

  function populate() {
    var target = Math.max(12, Math.min(MAX_NODES, Math.round((width * height) / AREA_PER_NODE)));
    nodes = [];
    for (var i = 0; i < target; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2 * DRIFT,
        vy: (Math.random() - 0.5) * 2 * DRIFT,
        r: 1 + Math.random() * 1.3
      });
    }
  }

  function resize() {
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    populate();
  }

  /* --------------------------------------------------------------- paint */

  function step() {
    var i, a, dx, dy, distSq, dist, fade;

    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      a.x += a.vx;
      a.y += a.vy;

      // Wrap around the edges so the field never thins out.
      if (a.x < -25) a.x = width + 25;
      else if (a.x > width + 25) a.x = -25;
      if (a.y < -25) a.y = height + 25;
      else if (a.y > height + 25) a.y = -25;

      if (pointer.active) {
        dx = a.x - pointer.x;
        dy = a.y - pointer.y;
        distSq = dx * dx + dy * dy;
        if (distSq < POINTER_DIST * POINTER_DIST && distSq > 1) {
          dist = Math.sqrt(distSq);
          // Displace position rather than velocity: the gap tracks the
          // cursor and closes again on its own, with nothing to run away.
          fade = (1 - dist / POINTER_DIST) * PUSH;
          a.x += (dx / dist) * fade;
          a.y += (dy / dist) * fade;
        }
      }
    }
  }

  function draw() {
    var i, j, a, b, dx, dy, distSq, fade;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;

    ctx.strokeStyle = colors.line;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      for (j = i + 1; j < nodes.length; j++) {
        b = nodes[j];
        dx = a.x - b.x;
        dy = a.y - b.y;
        distSq = dx * dx + dy * dy;
        if (distSq > LINK_DIST * LINK_DIST) continue;
        ctx.globalAlpha = 1 - Math.sqrt(distSq) / LINK_DIST;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    if (pointer.active) {
      ctx.strokeStyle = colors.glow;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        dx = a.x - pointer.x;
        dy = a.y - pointer.y;
        distSq = dx * dx + dy * dy;
        if (distSq > POINTER_DIST * POINTER_DIST) continue;
        ctx.globalAlpha = (1 - Math.sqrt(distSq) / POINTER_DIST) * 0.85;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 1;
    ctx.fillStyle = colors.node;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* ---------------------------------------------------------------- loop */

  function tick() {
    step();
    draw();
    frameId = window.requestAnimationFrame(tick);
  }

  function start() {
    if (frameId !== null) return;
    if (motionQuery.matches) {
      draw();
      return;
    }
    frameId = window.requestAnimationFrame(tick);
  }

  function stop() {
    if (frameId === null) return;
    window.cancelAnimationFrame(frameId);
    frameId = null;
  }

  function restart() {
    stop();
    start();
  }

  /* -------------------------------------------------------------- events */

  var lastWidth = 0;
  var lastHeight = 0;
  var resizeTimer = null;

  function onResize() {
    // Mobile browsers fire resize as the URL bar hides. Only rebuild on a
    // real change, or the field resets every time the page scrolls.
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w === lastWidth && Math.abs(h - lastHeight) < 120) return;
    lastWidth = w;
    lastHeight = h;

    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      resize();
      if (motionQuery.matches) draw();
    }, 150);
  }

  window.addEventListener('resize', onResize);

  window.addEventListener('pointermove', function (event) {
    if (event.pointerType !== 'mouse') return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });

  document.addEventListener('pointerleave', function () {
    pointer.active = false;
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop();
    else start();
  });

  // Follow the theme, whether it changed via the toggle or the OS.
  new MutationObserver(function () {
    readColors();
    if (motionQuery.matches) draw();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  addChangeListener(darkQuery, function () {
    readColors();
    if (motionQuery.matches) draw();
  });

  addChangeListener(motionQuery, restart);

  function addChangeListener(query, handler) {
    if (query.addEventListener) query.addEventListener('change', handler);
    else if (query.addListener) query.addListener(handler);
  }

  /* ---------------------------------------------------------------- init */

  lastWidth = window.innerWidth;
  lastHeight = window.innerHeight;
  readColors();
  resize();
  start();
})();
