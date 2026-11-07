/* ==========================================================================
   immersive.js — the PeekAZoo Trail
   A progressive-enhancement layer that sits on top of site.js. It never
   changes page content: it reads the existing markup, wraps words for
   animation, and adds navigation chrome (chapter rail, progress, play pass).

   If GSAP is missing, the browser is old, or the visitor prefers reduced
   motion, the layer degrades to the original static site plus a plain
   chapter rail. Nothing here is required to read the page.

   Loads AFTER site.js, so the existing video coordinator, carousels and
   enquiry form keep full ownership of their behaviour.
   ========================================================================== */

(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  // Bail out entirely on browsers without the basics. The static site stands
  // on its own, so there is nothing to patch up.
  if (!('IntersectionObserver' in window) || !document.querySelector('main')) return;

  var main = document.querySelector('main');
  root.classList.add('pz-on');

  var gsap = window.gsap;
  if (hasGsap) {
    gsap.registerPlugin(window.ScrollTrigger);
    gsap.ticker.lagSmoothing(0);
  }
  var ST = window.ScrollTrigger;

  /* ------------------------------------------------------------------ */
  /* Neutralise the older reveal system so one layer owns entrances.     */
  /* site.js keeps running; its observer simply has nothing left to do.  */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    el.classList.add('reveal-ready', 'in-view');
  });

  /* ================================================================== */
  /* 1. Smooth scroll                                                    */
  /* ================================================================== */
  var lenis = null;
  if (!reduced && hasGsap && typeof window.Lenis === 'function') {
    try {
      lenis = new window.Lenis({
        duration: 1.05,
        easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smoothWheel: true,
        syncTouch: false          // phones keep their native, familiar scroll
      });
      lenis.on('scroll', ST.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    } catch (e) { lenis = null; }
  }

  function scrollToEl(el) {
    if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.1 });
    else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }

  // In-page anchors must keep working with Lenis in charge.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (!id || id === '#') return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    scrollToEl(target);
    // Keep keyboard focus with the visual jump.
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

  /* ================================================================== */
  /* 2. Headline splitting                                               */
  /* Words become inline-block spans that rise out of a clipped box.     */
  /* <em> is preserved, and a space is inserted before every <br> so the */
  /* accessible text reads "Your child moves. The game responds."        */
  /* ================================================================== */
  function splitInto(node, out) {
    var kids = [].slice.call(node.childNodes);
    kids.forEach(function (child) {
      if (child.nodeType === 3) {
        var text = child.nodeValue;
        if (!text.trim()) return;
        var frag = document.createDocumentFragment();
        var leading = /^\s/.test(text);
        var trailing = /\s$/.test(text);
        var words = text.trim().split(/\s+/);
        if (leading) frag.appendChild(document.createTextNode(' '));
        words.forEach(function (word, i) {
          var outer = document.createElement('span');
          outer.className = 'pz-word';
          var inner = document.createElement('span');
          inner.textContent = word;
          outer.appendChild(inner);
          frag.appendChild(outer);
          if (i < words.length - 1) frag.appendChild(document.createTextNode(' '));
          out.push(inner);
        });
        if (trailing) frag.appendChild(document.createTextNode(' '));
        node.replaceChild(frag, child);
      } else if (child.nodeType === 1) {
        if (child.tagName === 'BR') {
          // Restore the word break that the original markup dropped.
          node.insertBefore(document.createTextNode(' '), child);
          return;
        }
        splitInto(child, out);
      }
    });
    return out;
  }

  function splitHeading(h) {
    if (h.closest('.sr-only') || h.classList.contains('sr-only')) return null;
    if (h.dataset.pzSplit) return null;
    if (h.querySelector('a, button, input')) return null;   // leave interactive text alone
    h.dataset.pzSplit = '1';
    var parts = splitInto(h, []);
    if (!parts.length) { delete h.dataset.pzSplit; return null; }
    h.classList.add('pz-split');
    return parts;
  }

  /* ================================================================== */
  /* 3. Chapters — the guidance model                                    */
  /* ================================================================== */
  var CHAPTER_FALLBACK = {
    'home-stage': 'Welcome', 'choice-section': 'Two ways in',
    'character-scene': 'The characters', 'hello-section': 'One world'
  };

  function labelFor(el, index) {
    if (el.dataset.chapter) return el.dataset.chapter;
    var byClass = (el.className || '').split(/\s+/).map(function (c) { return CHAPTER_FALLBACK[c]; }).filter(Boolean)[0];
    if (byClass) return byClass;
    var h = el.querySelector('h2, h3');
    if (h) {
      var t = h.textContent.replace(/\s+/g, ' ').trim();
      // Headings are written as two short lines; the first makes a good label.
      // (Written without a lookbehind: that syntax is a parse error on older
      // Safari, which would take this whole file down with it.)
      var stop = t.indexOf('.');
      var first = stop > 0 ? t.slice(0, stop) : t;
      return first.slice(0, 30);
    }
    return 'Section ' + (index + 1);
  }

  var sections = [].slice.call(main.children).filter(function (el) {
    return el.tagName === 'SECTION' || el.tagName === 'ASIDE';
  });

  // A page built as one long document (the privacy policy) is better guided by
  // its headings than by its single wrapper section.
  var chapterEls = sections;
  var chapterMode = 'section';
  if (sections.filter(function (s) { return s.tagName === 'SECTION'; }).length < 3) {
    var heads = [].slice.call(main.querySelectorAll('h2'));
    if (heads.length >= 3) { chapterEls = heads; chapterMode = 'heading'; }
  }

  var chapters = chapterEls.map(function (el, i) {
    return {
      el: el,
      label: chapterMode === 'heading'
        ? el.textContent.replace(/\s+/g, ' ').trim().slice(0, 38)
        : labelFor(el, i),
      index: i,
      visited: false
    };
  });

  /* ================================================================== */
  /* 4. Chrome: progress bar, rail, chapter bar, play pass, toast        */
  /* ================================================================== */
  function make(tag, cls, parent) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (parent) parent.appendChild(el);
    return el;
  }

  var progress = make('div', 'pz-progress', body);
  progress.setAttribute('aria-hidden', 'true');

  var sparkLayer = make('div', 'pz-spark-layer', body);
  sparkLayer.setAttribute('aria-hidden', 'true');

  var rail = null, railItems = [], bar = null, barName = null, barIndex = null, barFill = null;
  var showChrome = chapters.length >= 3;

  if (showChrome) {
    rail = make('nav', 'pz-rail', body);
    rail.setAttribute('aria-label', 'Page chapters');
    chapters.forEach(function (ch) {
      var item = make('button', 'pz-rail-item', rail);
      item.type = 'button';
      make('span', 'pz-rail-label', item).textContent = ch.label;
      make('span', 'pz-rail-dot', item);
      item.addEventListener('click', function () {
        scrollToEl(chapterMode === 'heading' ? ch.el : ch.el);
      });
      railItems.push(item);
    });

    bar = make('div', 'pz-chapterbar', body);
    bar.setAttribute('aria-hidden', 'true');
    barIndex = make('span', 'pz-chapterbar-index', bar);
    barName = make('span', 'pz-chapterbar-name', bar);
    var track = make('span', 'pz-chapterbar-track', bar);
    barFill = make('span', 'pz-chapterbar-fill', track);
  }

  /* --- Play Pass ---------------------------------------------------- */
  var PASS_KEY = 'pz-pass-v1';
  var pageKey = (location.pathname.split('/').pop() || 'index.html');
  var passStore = {};
  try { passStore = JSON.parse(localStorage.getItem(PASS_KEY) || '{}') || {}; } catch (e) { passStore = {}; }
  var savePass = function () {
    try { localStorage.setItem(PASS_KEY, JSON.stringify(passStore)); } catch (e) { /* private mode */ }
  };

  var pass = null, passBar = null, passCount = null, passCrew = null, passLabel = null;
  var RING_R = 13, RING_C = 2 * Math.PI * RING_R;

  if (showChrome) {
    pass = make('div', 'pz-pass', body);
    pass.setAttribute('role', 'status');
    pass.setAttribute('aria-live', 'polite');

    var ring = make('span', 'pz-pass-ring', pass);
    ring.innerHTML =
      '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">' +
      '<circle class="pz-pass-track" cx="16" cy="16" r="' + RING_R + '"></circle>' +
      '<circle class="pz-pass-bar" cx="16" cy="16" r="' + RING_R + '" ' +
      'stroke-dasharray="' + RING_C.toFixed(1) + '" stroke-dashoffset="' + RING_C.toFixed(1) + '"></circle>' +
      '</svg>';
    passCount = make('span', 'pz-pass-count', ring);
    passBar = ring.querySelector('.pz-pass-bar');

    var ptext = make('span', 'pz-pass-text', pass);
    passLabel = make('b', '', ptext);
    passLabel.textContent = 'Play Pass';
    make('small', '', ptext).textContent = 'chapters explored';

    passCrew = make('span', 'pz-pass-crew', pass);
  }

  function renderPass() {
    if (!pass) return;
    var done = chapters.filter(function (c) { return c.visited; }).length;
    var total = chapters.length;
    passCount.textContent = done + '/' + total;
    passBar.style.strokeDashoffset = String(RING_C * (1 - done / total));
    pass.classList.toggle('pz-complete', done === total);
    passLabel.textContent = done === total ? 'Pass complete!' : 'Play Pass';
    pass.classList.remove('pz-pass-pop');
    void pass.offsetWidth;
    pass.classList.add('pz-pass-pop');
  }

  /* --- Chapter-complete toast --------------------------------------- */
  var NEXT_STEP = {
    'home-page':    { href: 'peekazoo.html',  cta: 'Meet the Console', line: 'Two worlds to explore.', art: 'assets/nimu.webp' },
    'console-page': { href: 'oaks-kidz.html', cta: 'See Oaks Kidz',    line: 'Now the classroom side.', art: 'assets/mimi.webp' },
    'oaks-page':    { href: 'about.html',     cta: 'Our story',        line: 'Who builds all this?',   art: 'assets/jiku.webp' },
    'about-page':   { href: 'contact.html',   cta: 'Get in touch',     line: 'Start a conversation.',  art: 'assets/pebi.webp' }
  };
  var nextStep = null;
  Object.keys(NEXT_STEP).forEach(function (k) { if (body.classList.contains(k)) nextStep = NEXT_STEP[k]; });

  var toast = null, toastShown = false;
  function buildToast() {
    if (!nextStep || toast) return;
    toast = make('div', 'pz-toast', body);
    toast.setAttribute('role', 'status');
    var art = make('img', '', toast);
    art.src = nextStep.art;
    art.alt = '';
    art.setAttribute('aria-hidden', 'true');
    art.loading = 'lazy';
    var copy = make('span', 'pz-toast-copy', toast);
    make('b', '', copy).textContent = 'Chapter complete!';
    make('small', '', copy).textContent = nextStep.line;
    var link = make('a', '', toast);
    link.href = nextStep.href;
    link.textContent = nextStep.cta + ' ↗';
    var close = make('button', 'pz-toast-close', toast);
    close.type = 'button';
    close.setAttribute('aria-label', 'Dismiss');
    close.textContent = '×';
    close.addEventListener('click', function () { toast.classList.remove('pz-toast-show'); });
  }

  function celebrate() {
    if (toastShown || !nextStep) return;
    toastShown = true;
    buildToast();
    if (!toast) return;
    requestAnimationFrame(function () { toast.classList.add('pz-toast-show'); });
    burst(innerWidth / 2, innerHeight - 90, 22);
    setTimeout(function () { if (toast) toast.classList.remove('pz-toast-show'); }, 11000);
  }

  /* --- Sparkle burst ------------------------------------------------- */
  var SPARK_COLOURS = ['#f5a623', '#2e90c8', '#387b45', '#f47b5a', '#b68ce8'];
  function burst(x, y, count) {
    if (reduced || !hasGsap) return;
    for (var i = 0; i < (count || 14); i++) {
      var dot = make('i', 'pz-spark', sparkLayer);
      dot.style.background = SPARK_COLOURS[i % SPARK_COLOURS.length];
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      var angle = (Math.PI * 2 * i) / (count || 14) + Math.random() * 0.5;
      var dist = 50 + Math.random() * 90;
      gsap.fromTo(dot,
        { scale: 0, opacity: 1 },
        {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 30,
          scale: Math.random() * 0.9 + 0.5,
          opacity: 0,
          duration: 0.9 + Math.random() * 0.5,
          ease: 'power2.out',
          onComplete: function () { this.targets()[0].remove(); }
        });
    }
  }

  /* ================================================================== */
  /* 5. Entrance choreography — one read order per section               */
  /* eyebrow → heading → body → media. This is what keeps a section from */
  /* arriving as an undifferentiated block.                              */
  /* ================================================================== */
  var ENTER_ORDER = [
    '.eyebrow', 'h1:not(.sr-only)', 'h2', 'h3', 'p', 'ul', 'ol', 'dl',
    '.button', '.text-link', 'form', 'details',
    'img', 'video', 'figure', '.product-world', '.round-arrow'
  ];

  sections.forEach(function (section) {
    if (section.querySelector('video')) section.classList.add('pz-has-media');

    var seen = [];
    var order = 0;

    // Headings get the word-rise treatment; everything else a soft lift.
    [].slice.call(section.querySelectorAll('h1:not(.sr-only), h2')).forEach(function (h) {
      if (h.closest('details')) return;
      var parts = splitHeading(h);
      if (!parts) return;
      parts.forEach(function (span, i) {
        span.style.setProperty('--pz-delay', (i * 0.045).toFixed(3) + 's');
      });
    });

    ENTER_ORDER.forEach(function (sel) {
      [].slice.call(section.querySelectorAll(sel)).forEach(function (el) {
        if (seen.indexOf(el) !== -1) return;
        if (el.closest('.pz-rail, .pz-pass, .pz-toast')) return;
        if (el.classList.contains('pz-split')) return;      // handled by the splitter
        if (el.closest('[data-pz-enter]')) return;          // parent already animates
        if (el.closest('.ambient')) return;
        // Content inside a collapsed <details> is display:none when the
        // observer would fire, so it would never be told to appear — and
        // would still be invisible after the visitor opened the accordion.
        // The accordion animates itself; leave its contents alone.
        if (el.closest('details')) return;
        seen.push(el);
        el.setAttribute('data-pz-enter', '');
        el.style.setProperty('--pz-delay', Math.min(order * 0.07, 0.42).toFixed(3) + 's');
        order++;
      });
    });
  });

  // One observer drives every entrance, including the split headings.
  // threshold 0 (not a ratio) matters: an element taller than ~8x the
  // viewport can never reach a 12% ratio, and would stay invisible forever.
  var enterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('pz-in');
      enterObserver.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('[data-pz-enter], .pz-split').forEach(function (el) {
    enterObserver.observe(el);
  });

  // Failsafe. Hiding content behind an animation means a missed callback
  // hides it permanently, so anything at or above the fold is forced visible
  // once the page settles, whatever the observer did or did not report.
  function sweep() {
    document.querySelectorAll('[data-pz-enter]:not(.pz-in), .pz-split:not(.pz-in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < innerHeight * 1.2) el.classList.add('pz-in');
    });
  }
  addEventListener('load', function () { setTimeout(sweep, 400); });
  setTimeout(sweep, 2500);

  // Carousel slides are display:none until their turn, so their contents can
  // never intersect. Rather than freeze them visible, replay the entrance
  // each time site.js reveals a slide — the headline animates on every turn.
  [].slice.call(document.querySelectorAll('[data-slide]')).forEach(function (slide) {
    var parts = function () { return slide.querySelectorAll('[data-pz-enter], .pz-split'); };
    var show = function () {
      [].forEach.call(parts(), function (el) { el.classList.add('pz-in'); });
    };
    if (reduced) { show(); return; }
    var replay = function () {
      var els = parts();
      [].forEach.call(els, function (el) { el.classList.remove('pz-in'); });
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          [].forEach.call(els, function (el) { el.classList.add('pz-in'); });
        });
      });
    };
    new MutationObserver(function () {
      if (!slide.hidden) replay();
    }).observe(slide, { attributes: true, attributeFilter: ['hidden'] });
    if (!slide.hidden) show();
  });

  /* ================================================================== */
  /* 6. Focus choreography + chapter tracking                            */
  /* The section nearest the viewport centre is the focal point; the     */
  /* others step back. Exactly one is active at any scroll position.     */
  /* ================================================================== */
  if (!reduced) root.classList.add('pz-focus');

  var activeIndex = -1;
  var firstSection = sections[0];

  function updateFocus() {
    var mid = innerHeight / 2;
    var best = -1, bestDist = Infinity;
    for (var i = 0; i < sections.length; i++) {
      var r = sections[i].getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) continue;
      var dist = Math.abs((r.top + r.bottom) / 2 - mid);
      // A section taller than the viewport is the focus whenever it spans it.
      if (r.top <= mid && r.bottom >= mid) dist = 0;
      if (dist < bestDist) { bestDist = dist; best = i; }
    }
    if (best === -1 || best === activeIndex) return;

    if (sections[activeIndex]) sections[activeIndex].classList.remove('pz-focused');
    activeIndex = best;
    sections[activeIndex].classList.add('pz-focused');

    if (chapterMode === 'section') markChapter(activeIndex);
  }

  var peekTimer = null;
  function markChapter(i) {
    if (!chapters[i]) return;
    chapters.forEach(function (c, n) {
      if (railItems[n]) {
        if (n === i) railItems[n].setAttribute('aria-current', 'true');
        else railItems[n].removeAttribute('aria-current');
      }
    });
    // Name the chapter you just arrived in, then get out of the way.
    if (rail) {
      rail.classList.add('pz-rail-peek');
      clearTimeout(peekTimer);
      peekTimer = setTimeout(function () { rail.classList.remove('pz-rail-peek'); }, 2200);
    }
    if (!chapters[i].visited) {
      chapters[i].visited = true;
      if (railItems[i]) railItems[i].classList.add('pz-visited');
      renderPass();
      if (chapters.every(function (c) { return c.visited; })) {
        setTimeout(celebrate, 700);
      }
    }
    if (bar) {
      barIndex.textContent = String(i + 1).padStart(2, '0') + ' /' + String(chapters.length).padStart(2, '0');
      barName.textContent = chapters[i].label;
      barFill.style.width = ((i + 1) / chapters.length * 100) + '%';
    }
  }

  // Heading-driven pages (privacy) track their chapters separately.
  if (chapterMode === 'heading') {
    var headObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var i = chapterEls.indexOf(entry.target);
        if (i !== -1) markChapter(i);
      });
    }, { rootMargin: '-20% 0px -60% 0px' });
    chapterEls.forEach(function (h) { headObserver.observe(h); });
  }

  /* --- scroll loop --------------------------------------------------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      updateFocus();

      var max = document.documentElement.scrollHeight - innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      progress.style.transform = 'scaleX(' + p + ')';

      // Rail, pass and chapter bar stay out of the way over the opening
      // scene, then arrive together once the journey actually starts.
      var past = firstSection ? scrollY > firstSection.offsetHeight * 0.55 : scrollY > 300;
      if (rail) rail.classList.toggle('pz-rail-show', past);
      if (pass) pass.classList.toggle('pz-pass-show', past);
      if (bar) bar.classList.toggle('pz-bar-show', past);
      if (cue) cue.classList.toggle('pz-cue-gone', scrollY > 120);
    });
  }

  if (lenis) lenis.on('scroll', onScroll);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });

  /* ================================================================== */
  /* 7. Hero scroll cue                                                  */
  /* ================================================================== */
  var cue = null;
  if (firstSection && showChrome) {
    if (getComputedStyle(firstSection).position === 'static') firstSection.style.position = 'relative';
    cue = make('div', 'pz-cue', firstSection);
    cue.setAttribute('aria-hidden', 'true');
    make('span', 'pz-cue-chev', cue);
    make('span', '', cue).textContent = 'Scroll to explore';
    setTimeout(function () { cue.classList.add('pz-in'); }, 1400);
  }

  /* ================================================================== */
  /* 8. Parallax                                                         */
  /* Decorative depth only: particle fields, section art, hero media.    */
  /* Nothing that carries meaning is allowed to drift out of place.      */
  /* ================================================================== */
  if (hasGsap && !reduced) {
    // The ambient particle fields site.js created become the deepest layer.
    document.querySelectorAll('main > section .ambient').forEach(function (field, i) {
      gsap.to(field, {
        yPercent: i % 2 ? 14 : -14,
        ease: 'none',
        scrollTrigger: { trigger: field.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
      });
    });

    // Section artwork drifts gently against the scroll.
    var artSelectors = [
      '.character-panorama', '.product-world img', '.device-visual img',
      '.family-visual img', '.practice-visual img', '.setup-visual img',
      '.about-work img', '.parent-strip img', '.character-line img'
    ];
    document.querySelectorAll(artSelectors.join(',')).forEach(function (img, i) {
      var host = img.closest('section');
      if (!host) return;
      gsap.fromTo(img,
        { yPercent: 6 },
        {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: { trigger: host, start: 'top bottom', end: 'bottom top', scrub: 0.8 }
        });
    });

    // Opening scenes: copy and media separate slightly as you leave them.
    document.querySelectorAll('.home-stage, .console-opening, .oaks-opening, .about-opening').forEach(function (hero) {
      var copy = hero.querySelector('.hero-message, .container > div, h1');
      var media = hero.querySelector('.reel, video, .portrait-stage');
      if (copy) {
        gsap.to(copy, {
          yPercent: -11, opacity: 0.55, ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.7 }
        });
      }
      if (media && media !== copy) {
        gsap.to(media, {
          yPercent: 5, ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.7 }
        });
      }
    });

    ST.refresh();
  }

  /* ================================================================== */
  /* 9. Micro-interactions                                               */
  /* ================================================================== */

  /* --- Magnetic buttons --------------------------------------------- */
  if (fine && !reduced) {
    document.querySelectorAll('.button, .round-arrow, .product-tab, .pz-toast a').forEach(function (el) {
      el.classList.add('pz-magnet');
      var raf = null;
      el.addEventListener('pointermove', function (e) {
        if (raf) return;
        raf = requestAnimationFrame(function () {
          raf = null;
          var r = el.getBoundingClientRect();
          var dx = (e.clientX - (r.left + r.width / 2)) / r.width;
          var dy = (e.clientY - (r.top + r.height / 2)) / r.height;
          el.style.setProperty('--pz-mx', (dx * 14).toFixed(2) + 'px');
          el.style.setProperty('--pz-my', (dy * 10).toFixed(2) + 'px');
          el.style.setProperty('--pz-ms', '1.045');
        });
      });
      var reset = function () {
        el.style.setProperty('--pz-mx', '0px');
        el.style.setProperty('--pz-my', '0px');
        el.style.setProperty('--pz-ms', '1');
        el.classList.remove('pz-pressing');
      };
      el.addEventListener('pointerleave', reset);
      el.addEventListener('pointerdown', function () { el.classList.add('pz-pressing'); });
      el.addEventListener('pointerup', function () { el.classList.remove('pz-pressing'); });
      el.addEventListener('blur', reset);
    });
  }

  /* --- Card tilt ------------------------------------------------------ */
  if (fine && !reduced) {
    var tiltSel = '.product-world, .character-card, .game-card, .format-card, .step-card, .concern-card, .route-card, .product-card';
    document.querySelectorAll(tiltSel).forEach(function (card) {
      card.classList.add('pz-tilt');
      var raf = null;
      card.addEventListener('pointermove', function (e) {
        if (raf) return;
        raf = requestAnimationFrame(function () {
          raf = null;
          var r = card.getBoundingClientRect();
          var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          var dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          card.style.setProperty('--pz-ry', (dx * 5).toFixed(2) + 'deg');
          card.style.setProperty('--pz-rx', (-dy * 5).toFixed(2) + 'deg');
          card.classList.add('pz-tilting');
        });
      });
      card.addEventListener('pointerleave', function () {
        card.classList.remove('pz-tilting');
        card.style.setProperty('--pz-rx', '0deg');
        card.style.setProperty('--pz-ry', '0deg');
      });
    });
  }

  /* --- Characters: the collectible crew ------------------------------ */
  var CREW = ['pebi', 'nimu', 'mimi', 'jiku'];
  var crewImgs = [].slice.call(document.querySelectorAll('img')).filter(function (img) {
    var src = (img.getAttribute('src') || '').toLowerCase();
    return CREW.some(function (n) { return src.indexOf('/' + n + '.') !== -1 || src.indexOf(n + '.webp') !== -1; });
  });

  if (crewImgs.length && passCrew) {
    passStore[pageKey] = passStore[pageKey] || { crew: [] };
    var owned = passStore[pageKey].crew || [];

    crewImgs.forEach(function (img) {
      img.classList.add('pz-char');
      if (!reduced) img.classList.add('pz-locked');

      // A shadow copy of each character rides along in the Play Pass.
      var chip = make('img', '', passCrew);
      chip.src = img.getAttribute('src');
      chip.alt = '';
      chip.setAttribute('aria-hidden', 'true');
      chip.loading = 'lazy';

      var unlock = function () {
        if (!img.classList.contains('pz-locked') && !reduced) return;
        img.classList.remove('pz-locked');
        img.classList.add('pz-unlocked');
        chip.classList.add('pz-got');
        var r = img.getBoundingClientRect();
        burst(r.left + r.width / 2, r.top + r.height / 2, 12);
        var name = (img.getAttribute('src') || '').split('/').pop().split('.')[0];
        if (owned.indexOf(name) === -1) { owned.push(name); passStore[pageKey].crew = owned; savePass(); }
      };

      if (reduced) { chip.classList.add('pz-got'); return; }

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          setTimeout(unlock, crewImgs.indexOf(img) * 180);
          io.unobserve(entry.target);
        });
      }, { threshold: 0.5 });
      io.observe(img);

      img.addEventListener('click', unlock);
    });
  }

  /* --- Reach counter --------------------------------------------------- */
  document.querySelectorAll('.home-reach strong, .about-reach strong, .reach-figure').forEach(function (el) {
    var raw = el.textContent.trim();
    var m = raw.match(/([\d,]+)/);
    if (!m) return;
    var target = parseInt(m[1].replace(/,/g, ''), 10);
    if (!target || reduced) return;
    var suffix = raw.slice(raw.indexOf(m[1]) + m[1].length);
    var prefix = raw.slice(0, raw.indexOf(m[1]));
    el.classList.add('pz-count');
    el.setAttribute('aria-label', raw);
    var ran = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || ran) return;
        ran = true;
        io.disconnect();
        var obj = { n: 0 };
        if (hasGsap) {
          gsap.to(obj, {
            n: target, duration: 1.8, ease: 'power2.out',
            onUpdate: function () { el.textContent = prefix + Math.round(obj.n).toLocaleString('en-IN') + suffix; },
            onComplete: function () { el.textContent = raw; }
          });
        }
      });
    }, { threshold: 0.6 });
    io.observe(el);
  });

  /* --- FAQ accordion -------------------------------------------------- */
  if (!reduced) {
    document.querySelectorAll('details').forEach(function (d) {
      d.classList.add('pz-acc');
      var summary = d.querySelector('summary');
      if (!summary) return;
      var wrap = make('div', 'pz-acc-body');
      while (summary.nextSibling) wrap.appendChild(summary.nextSibling);
      d.appendChild(wrap);
      if (!d.open) { wrap.style.height = '0px'; wrap.style.opacity = '0'; }

      summary.addEventListener('click', function (e) {
        e.preventDefault();
        var opening = !d.open;
        if (opening) {
          d.open = true;
          wrap.style.height = '0px';
          wrap.style.opacity = '0';
          requestAnimationFrame(function () {
            wrap.style.height = wrap.scrollHeight + 'px';
            wrap.style.opacity = '1';
          });
          wrap.addEventListener('transitionend', function once(ev) {
            if (ev.propertyName !== 'height') return;
            wrap.style.height = 'auto';
            wrap.removeEventListener('transitionend', once);
            if (ST) ST.refresh();
          });
        } else {
          wrap.style.height = wrap.scrollHeight + 'px';
          requestAnimationFrame(function () {
            wrap.style.height = '0px';
            wrap.style.opacity = '0';
          });
          wrap.addEventListener('transitionend', function once(ev) {
            if (ev.propertyName !== 'height') return;
            d.open = false;
            wrap.removeEventListener('transitionend', once);
            if (ST) ST.refresh();
          });
        }
      });
    });
  }

  /* --- Form progress --------------------------------------------------- */
  var enquiry = document.getElementById('enquiry-form');
  if (enquiry) {
    enquiry.addEventListener('input', function (e) {
      var field = e.target.closest('.enquiry-field');
      if (field) field.classList.toggle('pz-filled', !!e.target.value.trim());
    });
    enquiry.addEventListener('submit', function () {
      setTimeout(function () { burst(innerWidth / 2, innerHeight * 0.6, 18); }, 400);
    });
  }

  /* --- Cursor companion ------------------------------------------------ */
  if (fine && !reduced && hasGsap) {
    var cursor = make('div', 'pz-cursor', body);
    cursor.setAttribute('aria-hidden', 'true');
    var qx = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
    var qy = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
    addEventListener('pointermove', function (e) {
      cursor.classList.add('pz-cursor-on');
      qx(e.clientX); qy(e.clientY);
      var hot = e.target.closest('a, button, summary, .pz-tilt, select');
      var media = e.target.closest('video, .reel');
      cursor.classList.toggle('pz-cursor-hot', !!hot && !media);
      cursor.classList.toggle('pz-cursor-media', !!media);
    }, { passive: true });
    addEventListener('pointerleave', function () { cursor.classList.remove('pz-cursor-on'); });
  }

  /* ================================================================== */
  /* 10. Start                                                           */
  /* ================================================================== */
  if (showChrome) {
    rail.classList.add('pz-rail-ready');
    bar.classList.add('pz-rail-ready');
    if (pass) pass.classList.add('pz-rail-ready');
  }
  renderPass();
  updateFocus();
  if (chapterMode === 'section') markChapter(Math.max(activeIndex, 0));
  onScroll();

  addEventListener('load', function () { if (ST) ST.refresh(); });

  /* A small handle for debugging and for driving the page in tests. Reading
     it tells you which chapter is active; goTo() moves through them in a way
     that works whether or not Lenis is running. */
  window.PeekAZooTrail = {
    chapters: chapters,
    lenis: lenis,
    get active() { return activeIndex; },
    goTo: function (i) {
      var ch = chapters[Math.max(0, Math.min(chapters.length - 1, i))];
      if (ch) scrollToEl(ch.el);
    },
    scrollTo: function (y) {
      if (lenis) lenis.scrollTo(y, { immediate: true });
      else scrollTo(0, y);
    }
  };
})();
