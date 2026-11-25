'use strict';

const regionPrices = { india: '₹14,999', europe: '€197', us: '$217', other: '$217' };
const euroCountries = new Set(['AT','BE','BG','CY','DE','EE','ES','FI','FR','GR','HR','IE','IT','LT','LU','LV','MT','NL','PT','SI','SK']);
const localeRegion = (() => {
  try { return new Intl.Locale(navigator.language).region; } catch { return ''; }
})();
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const detectedRegion = timezone === 'Asia/Kolkata' || timezone === 'Asia/Calcutta' || localeRegion === 'IN' ? 'india' : localeRegion === 'US' ? 'us' : euroCountries.has(localeRegion) ? 'europe' : 'other';
const regionPriceNodes = document.querySelectorAll('[data-region-price]');
if (regionPriceNodes.length) {
  regionPriceNodes.forEach(node => { node.textContent = regionPrices[detectedRegion]; });
}

const motionReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuButton && mobileMenu) {
  const setOpen = open => {
    mobileMenu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };
  menuButton.addEventListener('click', () => setOpen(mobileMenu.hidden));
  mobileMenu.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('click', event => {
    if (!mobileMenu.hidden && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) { setOpen(false); menuButton.focus(); }
  });
  matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) setOpen(false); });
}

// Decorative movement is contained by each section and stays behind its content.
if (!motionReduced) {
  document.querySelectorAll('main > section').forEach((section, sectionIndex) => {
    const field = document.createElement('div');
    field.className = 'ambient';
    field.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('i');
      particle.style.left = `${7 + ((i * 19 + sectionIndex * 11) % 88)}%`;
      particle.style.top = `${15 + ((i * 23 + sectionIndex * 7) % 72)}%`;
      particle.style.animationDelay = `${-i * 2.7}s`;
      particle.style.animationDuration = `${12 + i * 1.6}s`;
      field.append(particle);
    }
    section.prepend(field);
  });
  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); reveal.unobserve(entry.target); }
      });
    }, { threshold: .1 });
    document.querySelectorAll('[data-reveal]').forEach(element => {
      element.classList.add('reveal-ready');
      reveal.observe(element);
    });
  }
}

// One media coordinator covers every carousel and standalone video.
const films = [...document.querySelectorAll('video[data-play]')];
const visibility = new Map();
const intentionalPauses = new WeakSet();
const managedPauses = new WeakSet();
const controllers = new Map();
let activeFilm = null;
const pauseFilm = film => {
  if (film && !film.paused) { managedPauses.add(film); film.pause(); }
};
const eligible = film => !document.hidden && !film.closest('[data-slide][hidden]') && !controllers.get(film.closest('[data-carousel]'))?.paused;
const playFilm = film => {
  if (!film || !eligible(film)) return;
  films.forEach(other => { if (other !== film) pauseFilm(other); });
  film.muted = true;
  activeFilm = film;
  film.play().catch(() => { if (activeFilm === film) activeFilm = null; });
};
const updatePlayback = () => {
  if (motionReduced || document.hidden) return;
  const candidate = [...visibility.entries()]
    .filter(([film, ratio]) => ratio >= .25 && !film.ended && eligible(film))
    .sort((a, b) => b[1] - a[1])[0]?.[0];
  if (activeFilm && activeFilm !== candidate) pauseFilm(activeFilm);
  if (!candidate || intentionalPauses.has(candidate)) { activeFilm = null; return; }
  if (activeFilm !== candidate || candidate.paused) playFilm(candidate);
};

films.forEach(film => {
  film.addEventListener('play', () => {
    if (document.hidden || film.closest('[data-slide][hidden]')) { pauseFilm(film); return; }
    intentionalPauses.delete(film);
    const controller = controllers.get(film.closest('[data-carousel]'));
    if (controller?.paused) { controller.paused = false; controller.refreshPause(); }
    films.forEach(other => { if (other !== film) pauseFilm(other); });
    activeFilm = film;
  });
  film.addEventListener('pause', () => {
    if (managedPauses.has(film)) { managedPauses.delete(film); return; }
    if (!film.ended && !film.closest('[hidden]') && !document.hidden) intentionalPauses.add(film);
  });
  film.addEventListener('error', () => {
    if (film.parentElement.querySelector('.media-error')) return;
    const message = document.createElement('p');
    message.className = 'media-error';
    message.append('This video could not load. ');
    const open = document.createElement('a');
    open.href = film.querySelector('source')?.getAttribute('src') || '';
    open.textContent = 'Open the video';
    message.append(open);
    film.after(message);
  });
});

document.querySelectorAll('[data-carousel]').forEach(group => {
  const slides = [...group.querySelectorAll('[data-slide]')];
  const dots = [...group.querySelectorAll('[data-dot]')];
  if (!slides.length) return;
  let current = 0;
  const controller = { paused: false, refreshPause: () => {} };
  controllers.set(group, controller);
  const show = (index, play = false) => {
    const previous = slides[current].querySelector('video');
    pauseFilm(previous);
    if (previous) { try { previous.currentTime = 0; } catch {} }
    current = (index + slides.length) % slides.length;
    group.dataset.index = String(current);
    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
      slide.setAttribute('aria-hidden', String(i !== current));
      slide.querySelector('video')?.setAttribute('tabindex', i === current ? '0' : '-1');
    });
    dots.forEach((dot, i) => i === current ? dot.setAttribute('aria-current', 'true') : dot.removeAttribute('aria-current'));
    const film = slides[current].querySelector('video');
    intentionalPauses.delete(film);
    if (play && !controller.paused) {
      const rect = film.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) playFilm(film);
    }
  };
  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    controller.paused = false;
    controller.refreshPause();
    show(i, true);
  }));
  group.addEventListener('keydown', event => {
    if (event.target.closest('video')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      controller.paused = false;
      controller.refreshPause();
      show(current + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  slides.forEach((slide, i) => {
    slide.querySelector('video')?.addEventListener('ended', () => {
      if (i !== current) return;
      if (current < slides.length - 1) show(current + 1, !motionReduced);
      else if (group.hasAttribute('data-loop')) show(0, !motionReduced);
    });
  });
  if (group.classList.contains('home-reel')) {
    const pause = document.createElement('button');
    pause.type = 'button';
    pause.className = 'reel-pause';
    controller.paused = motionReduced;
    controller.refreshPause = () => {
      pause.textContent = controller.paused ? 'Play videos' : 'Pause videos';
      pause.setAttribute('aria-pressed', String(controller.paused));
    };
    pause.addEventListener('click', () => {
      controller.paused = !controller.paused;
      controller.refreshPause();
      const film = slides[current].querySelector('video');
      if (controller.paused) pauseFilm(film);
      else { intentionalPauses.delete(film); playFilm(film); }
    });
    controller.refreshPause();
    group.append(pause);
  }
  show(0);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visibility.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0));
    updatePlayback();
  }, { threshold: [0, .25, .5, .75, 1] });
  films.forEach(film => observer.observe(film));
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { films.forEach(pauseFilm); activeFilm = null; }
  else requestAnimationFrame(updatePlayback);
});

// Same established enquiry destination and legacy fields, with fresh form markup.
const form = document.getElementById('enquiry-form');
if (form) {
  const select = document.getElementById('audience');
  const fieldHost = document.getElementById('fields');
  const status = document.getElementById('form-status');
  const configs = {
    parent: { title: 'Register interest.', description: 'Leave your details. Our team will follow up.', fields: [['name','Your name'],['phone','Phone number'],['pin','PIN code (optional)',false],['message','Your question (optional)',false]] },
    school: { title: 'See Oaks Kidz.', description: 'Tell us about your school and demo needs.', fields: [['organization','School / institution'],['name','Your name'],['role','Your role'],['phone','Phone number'],['city','City and state'],['size','Approximate number of learners']] },
    government: { title: 'Discuss a program.', description: 'Connect with our institutional team.', fields: [['organization','Department / organization'],['name','Your name'],['role','Designation'],['region','District and state'],['phone','Official contact number'],['size','Estimated program reach']] },
    ngo: { title: 'Explore a partnership.', description: 'Share your communities and learning goals.', fields: [['organization','Organization'],['name','Your name'],['role','Your role'],['email','Email'],['region','States or districts'],['size','Estimated learner reach'],['message','Your initiative']] },
    investor: { title: 'Let’s connect.', description: 'For business, press and other enquiries.', fields: [['name','Your name'],['organization','Organization'],['email','Email'],['message','How can we help?']] }
  };
  const autocomplete = {name:'name',phone:'tel',pin:'postal-code',email:'email',organization:'organization',role:'organization-title',city:'address-level2',region:'address-level1'};
  const initial = new URLSearchParams(location.search).get('type');
  if (configs[initial]) select.value = initial;
  const render = () => {
    const config = configs[select.value];
    document.getElementById('form-title').textContent = config.title;
    document.getElementById('form-desc').textContent = config.description;
    fieldHost.replaceChildren();
    config.fields.forEach(([name,label,required=true]) => {
      const field = document.createElement('div');
      field.className = 'enquiry-field';
      const text = document.createElement('label');
      text.htmlFor = `enquiry-${name}`;
      text.textContent = label;
      const input = document.createElement(name === 'message' ? 'textarea' : 'input');
      input.id = text.htmlFor;
      input.name = name;
      input.required = required;
      if (name === 'message') input.rows = 4;
      else input.type = name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text';
      if (autocomplete[name]) input.autocomplete = autocomplete[name];
      if (name === 'pin') input.inputMode = 'numeric';
      field.append(text,input);
      fieldHost.append(field);
    });
    status.textContent = '';
  };
  select.addEventListener('change',render);
  render();
  let sending = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending) return;
    form.querySelectorAll('input,textarea').forEach(input => input.value = input.value.trim());
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const type = select.value;
    const data = Object.fromEntries(fields.entries());
    const button = form.querySelector('[type=submit]');
    const payload = new URLSearchParams({ ...data, name:data.name || '', phone:data.phone || '', email:data.email || '', pincode:data.pin || '', source:'peekazoo-website', submittedAt:new Date().toISOString(), enquiryType:type, details:JSON.stringify(data) });
    sending = true;
    button.disabled = true;
    select.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = '';
    try {
      await fetch('https://script.google.com/macros/s/AKfycbw-CLSrFJ5EPZHXFmsdXts6ik8oY67Zlnb9EDwkYjpA4Xb3K9YlzEWYjyjqLuXTMDFt/exec', { method:'POST',mode:'no-cors',body:payload });
      form.reset();
      status.textContent = 'Your enquiry was sent. This page cannot confirm it was saved. For confirmation, email contact@peekazoo.fun.';
    } catch {
      status.textContent = 'We could not send your enquiry. Please email contact@peekazoo.fun.';
    } finally {
      sending = false;
      button.disabled = false;
      select.disabled = false;
      button.textContent = 'Send enquiry ↗';
    }
  });
}

