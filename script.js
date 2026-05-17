/* humoyun.dev — interactivity */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───────── Year ───────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ───────── Nav scroll state ───────── */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ───────── Mobile menu ───────── */
  const menuBtn = document.getElementById('navMenu');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    // close on link click
    nav.querySelectorAll('.nav__links a, .nav__cta').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ───────── Active section highlighting ───────── */
  const links = Array.from(document.querySelectorAll('.nav__links a[href^="#"]'));
  const sectionMap = new Map();
  links.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) sectionMap.set(el, a);
  });
  if ('IntersectionObserver' in window && sectionMap.size) {
    const navObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const link = sectionMap.get(en.target);
        if (!link) return;
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sectionMap.forEach((_link, sec) => navObs.observe(sec));
  }

  /* ───────── Reveal on scroll ───────── */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, io) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const delay = parseInt(en.target.dataset.delay || '0', 10);
          setTimeout(() => en.target.classList.add('is-in'), delay);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => obs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  /* ───────── Number count-up ───────── */
  const counts = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const countObs = new IntersectionObserver((entries, io) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const dur = 1100;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    counts.forEach(c => countObs.observe(c));
  } else {
    counts.forEach(c => { c.textContent = c.dataset.count; });
  }

  /* ───────── Spotlight that follows cursor ───────── */
  const spot = document.getElementById('spotlight');
  let spotShown = false;
  if (spot && !prefersReduced && window.matchMedia('(pointer: fine)').matches) {
    let raf = 0, tx = 0, ty = 0;
    window.addEventListener('mousemove', (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!spotShown) {
        spot.style.opacity = '1';
        spotShown = true;
      }
      if (!raf) {
        raf = requestAnimationFrame(() => {
          spot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
          raf = 0;
        });
      }
    }, { passive: true });
    document.addEventListener('mouseleave', () => { spot.style.opacity = '0'; spotShown = false; });
  }

  /* ───────── Card glow tracking ───────── */
  if (!prefersReduced) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* ───────── Magnetic buttons ───────── */
  if (!prefersReduced && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const strength = 18;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ───────── Smooth-scroll offset for sticky nav ───────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' });
      history.replaceState(null, '', href);
    });
  });

  /* ───────── Subtle hero parallax ───────── */
  const glow = document.querySelector('.hero__glow');
  if (glow && !prefersReduced) {
    let raf = 0, my = 0, mx = 0;
    window.addEventListener('mousemove', (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 20;
      my = (e.clientY / window.innerHeight - 0.5) * 20;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          glow.style.transform = `translate(${mx}px, calc(-50% + ${my}px))`;
          raf = 0;
        });
      }
    }, { passive: true });
  }
})();
