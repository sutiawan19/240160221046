/* ============================================
   PORTFOLIO WEBSITE - MAIN SCRIPT
   ============================================ */

// ========== LOADING SCREEN ==========
window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1500);
});

// ========== DARK/LIGHT MODE ==========
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// ========== STICKY NAVBAR ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// ========== HAMBURGER MENU ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========== ANIMATED PROGRESS BARS (Intersection Observer) ==========
const progressBars = document.querySelectorAll('.progress-fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const progress = fill.getAttribute('data-progress');
      fill.style.width = `${progress}%`;
      observer.unobserve(fill);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => observer.observe(bar));

// ========== TYPING ANIMATION ==========
const typedElement = document.getElementById('typedText');
const texts = ['Creative Technologist', 'UI/UX Designer', 'Frontend Architect'];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typedElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typedElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

if (typedElement) typeText();

// ========== PORTFOLIO DATA ==========
const projects = [
  { id: 1, title: 'CyberMart E-Commerce', desc: 'Platform belanja modern dengan interaksi 3D', tech: ['React', 'Three.js', 'Tailwind'], category: 'web', image: '../UTS/asset/image/1.jpg' },
  { id: 2, title: 'NeoBank App', desc: 'Aplikasi banking dengan UI futuristik', tech: ['Flutter', 'Firebase'], category: 'app', image: '../UTS/asset/image/2.jpg' },
  { id: 3, title: 'AI Dashboard', desc: 'Dashboard analytics dengan AI insights', tech: ['Vue.js', 'D3.js'], category: 'web', image: 'https://placehold.co/600x400/0a0a2a/00ffff?text=AI+Dashboard' },
  { id: 4, title: 'Portfolio 3D', desc: 'Website portfolio interaktif 3D', tech: ['Three.js', 'GSAP'], category: 'web', image: 'https://placehold.co/600x400/0a0a2a/a855f7?text=3D+Portfolio' },
  { id: 5, title: 'Fitness Tracker UI', desc: 'Mobile app design untuk fitness', tech: ['Figma', 'Prototyping'], category: 'uiux', image: 'https://placehold.co/600x400/0a0a2a/00ffff?text=Fitness+UI' },
  { id: 6, title: 'Metaverse Social', desc: 'Platform sosial di metaverse', tech: ['Unity', 'WebXR'], category: 'app', image: 'https://placehold.co/600x400/0a0a2a/a855f7?text=Metaverse' }
];

const portfolioGrid = document.getElementById('portfolioGrid');
let currentFilter = 'all';

function renderPortfolio(filter) {
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  portfolioGrid.innerHTML = filtered.map(project => `
    <div class="portfolio-card" data-category="${project.category}">
      <img src="${project.image}" alt="${project.title}" class="portfolio-img" loading="lazy" data-src="${project.image}">
      <div class="portfolio-info">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="tech-stack">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <button class="btn-demo" data-demo="${project.title}">Live Demo →</button>
      </div>
    </div>
  `).join('');
  
  // Lazy loading images
  const images = document.querySelectorAll('.portfolio-img');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imgObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imgObserver.observe(img));
  
  // Add lightbox event to new images
  document.querySelectorAll('.portfolio-img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });
  
  // Add demo button events
  document.querySelectorAll('.btn-demo').forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`Demo untuk ${btn.dataset.demo} akan segera tersedia!`);
    });
  });
}

// Filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderPortfolio(currentFilter);
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.querySelector('.close-lightbox');

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Initialize portfolio
renderPortfolio('all');

// ========== CONTACT FORM VALIDATION ==========
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const msgError = document.getElementById('msgError');
const formNotification = document.getElementById('formNotification');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;
  
  // Name validation
  if (!nameInput.value.trim()) {
    nameError.textContent = 'Nama tidak boleh kosong';
    isValid = false;
  } else {
    nameError.textContent = '';
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Email tidak valid';
    isValid = false;
  } else {
    emailError.textContent = '';
  }
  
  // Message validation (min 10 chars)
  if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
    msgError.textContent = 'Pesan minimal 10 karakter';
    isValid = false;
  } else {
    msgError.textContent = '';
  }
  
  if (isValid) {
    formNotification.className = 'notification success';
    formNotification.textContent = '✓ Pesan berhasil dikirim! Saya akan segera menghubungi Anda.';
    formNotification.classList.remove('hidden');
    contactForm.reset();
    setTimeout(() => {
      formNotification.classList.add('hidden');
    }, 5000);
  } else {
    formNotification.className = 'notification error';
    formNotification.textContent = '✗ Mohon periksa kembali form Anda.';
    formNotification.classList.remove('hidden');
    setTimeout(() => {
      formNotification.classList.add('hidden');
    }, 3000);
  }
});

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== DOWNLOAD CV ==========
const downloadBtn = document.getElementById('downloadCV');
downloadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Download CV akan dimulai! (File demo)');
  // In production: window.location.href = 'path/to/cv.pdf';
});

// ========== SCROLL REVEAL ANIMATION ==========
const revealElements = document.querySelectorAll('.about-grid, .timeline-item, .portfolio-card, .contact-grid');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  revealObserver.observe(el);
});