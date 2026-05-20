'use strict';

/*1. LOADING SCREEN*/
(function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  
  const MIN_DURATION = 1800;
  const start = Date.now();

  function hideLoader() {
    const elapsed = Date.now() - start;
    const delay = Math.max(0, MIN_DURATION - elapsed);
    setTimeout(() => {
      loader.classList.add('hidden');
      
      triggerHeroReveals();
    }, delay);
  }

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
  }
})();




/* 2. HEADER — SCROLL BEHAVIOR*/
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();


/* 3. SMOOTH SCROLLING + ACTIVE NAV*/
(function initNavScroll() {
  const navLinks = document.querySelectorAll('.nav__link[data-scroll]');
  const sections = document.querySelectorAll('section[id]');

  // Smooth scroll on click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-scroll');
      const target   = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });

  // Highlight active section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('data-scroll') === entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
})();


/*4. DARK / LIGHT MODE TOGGLE*/
(function initThemeToggle() {
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const html = document.documentElement;
  const KEY  = 'portfolio-theme';

  // Load saved preference
  const saved = localStorage.getItem(KEY) || 'dark';
  applyTheme(saved);

  btn?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(KEY, next);
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
})();


/*5. HERO REVEAL ANIMATIONS*/
function triggerHeroReveals() {
  const revealEls = document.querySelectorAll('.hero .reveal');
  revealEls.forEach((el, i) => {
    // Use CSS transition-delay defined in CSS — just add visible class
    setTimeout(() => el.classList.add('visible'), i * 80);
  });

  // General scroll reveals
  initScrollReveal();
}

function initScrollReveal() {
  const revealItems = document.querySelectorAll('.section .reveal, .about__grid > *, .portfolio__card, .timeline__item');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Small stagger between siblings
        const siblings = [...entry.target.parentElement.children];
        const index    = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 60);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealItems.forEach(el => {
    // Set initial state if not already a .reveal
    if (!el.classList.contains('reveal')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
    }
    obs.observe(el);
  });
}


/* 6. SKILL PROGRESS BARS*/
(function initSkillBars() {
  const skillItems = document.querySelectorAll('.skill-item');
  if (!skillItems.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el      = entry.target;
        const percent = el.getAttribute('data-percent') || '0';
        const bar     = el.querySelector('.skill-item__bar span');
        if (bar) {
          // Small delay for stagger feel
          const idx = [...skillItems].indexOf(el);
          setTimeout(() => {
            bar.style.width = percent + '%';
          }, idx * 100);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  skillItems.forEach(item => obs.observe(item));
})();


/* 7. PORTFOLIO — FILTER + LIGHTBOX*/
(function initPortfolio() {
  /* --- FILTER --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.portfolio__card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show     = filter === 'all' || category === filter;

        if (show) {
          card.classList.remove('hidden');
          // Re-trigger entrance animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
              card.style.transition = 'opacity .4s ease, transform .4s ease';
            }, 50);
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* --- LIGHTBOX --- */
  const lightbox    = document.getElementById('lightbox');
  const lbClose     = document.getElementById('lightboxClose');
  const lbImg       = document.getElementById('lightboxImg');
  const lbTitle     = document.getElementById('lightboxTitle');
  const lbDesc      = document.getElementById('lightboxDesc');
  const lbTech      = document.getElementById('lightboxTech');
  const lbTag       = document.getElementById('lightboxTag');

  function openLightbox(card) {
    lbImg.src        = card.getAttribute('data-img') || '';
    lbImg.alt        = card.getAttribute('data-title') || '';
    lbTitle.textContent = card.getAttribute('data-title') || '';
    lbDesc.textContent  = card.getAttribute('data-desc') || '';
    lbTech.textContent  = card.getAttribute('data-tech') || '';
    lbTag.textContent   = card.querySelector('.portfolio__card-tag')?.textContent || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open on card click (or button inside)
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(card);
    });
  });

  // Close buttons
  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('open')) {
      closeLightbox();
    }
  });
})();


/* 8. CONTACT FORM VALIDATION*/
(function initContactForm() {
  const form       = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name:    { el: document.getElementById('name'),    err: document.getElementById('nameError'),    min: 2,  label: 'Nama' },
    email:   { el: document.getElementById('email'),   err: document.getElementById('emailError'),   type: 'email', label: 'Email' },
    subject: { el: document.getElementById('subject'), err: document.getElementById('subjectError'), min: 3,  label: 'Subjek' },
    message: { el: document.getElementById('message'), err: document.getElementById('messageError'), min: 10, label: 'Pesan' },
  };

  const successMsg = document.getElementById('formSuccess');
  const submitBtn  = document.getElementById('submitBtn');

  // Real-time validation on blur
  Object.values(fields).forEach(({ el, err, ...rules }) => {
    if (!el) return;
    el.addEventListener('blur', () => validateField(el, err, rules));
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) validateField(el, err, rules);
    });
  });

  function validateField(el, err, rules) {
    const val = el.value.trim();
    let msg   = '';

    if (!val) {
      msg = `${rules.label || 'Field'} tidak boleh kosong.`;
    } else if (rules.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      msg = 'Format email tidak valid.';
    } else if (rules.min && val.length < rules.min) {
      msg = `Minimal ${rules.min} karakter.`;
    }

    if (msg) {
      el.classList.add('error');
      if (err) err.textContent = msg;
      return false;
    } else {
      el.classList.remove('error');
      if (err) err.textContent = '';
      return true;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    const results = Object.values(fields).map(({ el, err, ...rules }) =>
      el ? validateField(el, err, rules) : true
    );

    const allValid = results.every(Boolean);
    if (!allValid) return;

    // Simulate sending (replace with real API call)
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn__text').textContent = 'Mengirim...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn__text').textContent = 'Kirim Pesan';
      successMsg?.classList.add('show');
      setTimeout(() => successMsg?.classList.remove('show'), 5000);
    }, 1500);
  });
})();


/* 9. FOOTER YEAR*/
(function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
})();


/* 10. LAZY LOADING (native + fallback for older browsers)*/
(function initLazyLoad() {
  // Native lazy loading is already set via loading="lazy" in HTML.
  // This polyfill handles browsers without native support.
  if ('loading' in HTMLImageElement.prototype) return; // Native supported

  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImgs.forEach(img => obs.observe(img));
})();


/* 11. MOBILE HAMBURGER MENU*/
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav__overlay';
  document.body.appendChild(overlay);

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMobileMenu);

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    overlay.classList.toggle('show', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
})();

/** Exported helper — close mobile menu from anywhere */
function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');
  const overlay   = document.querySelector('.nav__overlay');
  navMenu?.classList.remove('open');
  hamburger?.classList.remove('open');
  overlay?.classList.remove('show');
  document.body.style.overflow = '';
}
