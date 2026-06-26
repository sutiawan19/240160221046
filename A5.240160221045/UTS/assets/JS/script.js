/**
 * Portfolio Website - Full Script
 * Features: Portfolio Filter, Lightbox, Dark Mode, Form Validation, Typing Effect, Lazy Load, AOS
 */

// ============================================
// PORTFOLIO DATA
// ============================================
const projectsData = [
    {
        id: 1,
        title: "Pratikum 2 Portofolio Pribadi",
        category: "web",
        categoryName: "web",
        description: "Dashboard monitoring bisnis dengan visualisasi data real-time yang interaktif dan responsif.",
        img: "assets/image/Project/Portofolio Pribadi.png",
        tech: ["React", "D3.js", "Tailwind"]
    },
    {
        id: 2,
        title: "Hello React-JSX Children & Attributes",
        category: "web",
        categoryName: "web",
        description: "Desain antarmuka aplikasi mobile banking modern yang fokus pada keamanan dan kemudahan navigasi.",
        img: "assets/image/Project/jsx-children-attributes.png",
        tech: ["Figma", "Prototyping", "User Research"]
    },
    {
        id: 3,
        title: "Desain Poster Digital",
        category: "design",
        categoryName: "design",
        description: "Aplikasi pelacak kebugaran dengan fitur rencana latihan dan pemantauan progres yang sistematis.",
        img: "assets/image/Project/Logo Usaha.png",
        tech: ["Flutter", "Firebase", "REST API"]
    },
    {
        id: 4,
        title: "UTS Portofolio Website",
        category: "web",
        categoryName: "web",
        description: "Website portofolio kreatif dengan animasi modern dan tampilan responsif untuk identitas digita.",
        img: "assets/image/Project/Proyek UTS.png",
        tech: ["Next.js", "Framer Motion", "CSS3"]
    },
    {
        id: 5,
        title: "Sistem Informasi Toko",
        category: "web",
        categoryName: "web",
        description: "Platform edukasi ramah lingkungan dengan desain antarmuka yang intuitif dan user-friendly.",
        img: "assets/image/Project/Sistem Informasi Toko.png",
        tech: ["Adobe XD", "Illustrator", "Design System"]
    },
    {
        id: 6,
        title: "Analisis Data",
        category: "data",
        categoryName: "data",
        description: "Aplikasi prakiraan cuaca real-time dengan UI minimalis untuk akses informasi yang cepat.",
        img: "assets/image/Project/Data Balance Sheet.png",
        tech: ["React Native", "OpenWeather API", "Redux"]
    }
];

// ============================================
// DOM ELEMENTS
// ============================================
const portfolioGrid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const closeLightbox = document.querySelector('.close-lightbox');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const preloader = document.getElementById('preloader');

let currentFilter = 'all';

// ============================================
// PRELOADER
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);
});

// ============================================
// RENDER PORTFOLIO (MODERN CARDS)
// ============================================
function renderPortfolio() {
    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === currentFilter);
    
    portfolioGrid.innerHTML = filteredProjects.map((project, index) => `
        <div class="portfolio-card" data-id="${project.id}" style="animation-delay: ${index * 0.05}s">
            <div class="card-img-container">
                <img data-src="${project.img}" alt="${project.title}" class="lazy-img" loading="lazy">
                <div class="card-overlay">
                    <div class="overlay-icon">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <div class="category-badge">
                    <i class="fas fa-tag"></i> ${project.categoryName}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    lazyLoadImages();
    
    // Add click event to each card
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.id);
            const project = projectsData.find(p => p.id === projectId);
            if (project) openLightbox(project);
        });
    });
}

// ============================================
// LAZY LOAD IMAGES
// ============================================
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('.lazy-img');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderPortfolio();
    });
});

// ============================================
// LIGHTBOX
// ============================================
function openLightbox(project) {
    lightboxImg.src = project.img;
    lightboxTitle.textContent = project.title;
    lightboxDesc.textContent = project.description;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightboxModal() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (closeLightbox) {
    closeLightbox.addEventListener('click', closeLightboxModal);
}
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightboxModal();
    });
}

// ============================================
// DARK / LIGHT MODE
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark');
        updateThemeIcon(false);
    }
}

function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });
}

initTheme();

// ============================================
// FORM VALIDATION & SUBMIT
// ============================================
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const feedback = document.getElementById('formFeedback');
        
        if (!name || !email || !subject || !message) {
            feedback.textContent = '❌ Semua field harus diisi!';
            feedback.className = 'form-feedback error';
            return;
        }
        
        const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        if (!emailRegex.test(email)) {
            feedback.textContent = '❌ Format email tidak valid!';
            feedback.className = 'form-feedback error';
            return;
        }
        
        feedback.textContent = '';
        feedback.className = 'form-feedback';
        
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            feedback.textContent = '✅ Pesan berhasil dikirim! Terima kasih 🙌';
            feedback.className = 'form-feedback success';
            contactForm.reset();
            
            setTimeout(() => {
                if (feedback) {
                    feedback.textContent = '';
                    feedback.className = 'form-feedback';
                }
            }, 3000);
        }, 1500);
    });
}

// ============================================
// SMOOTH SCROLL & NAVBAR
// ============================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

// ============================================
// HAMBURGER MENU
// ============================================
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
}

// ============================================
// ANIMATED PROGRESS BARS (TRIGGER ON SCROLL)
// ============================================
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const width = fill.dataset.width;
        fill.style.width = width + '%';
    });
}

const aboutSection = document.getElementById('about');
let progressAnimated = false;

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !progressAnimated) {
            animateProgressBars();
            progressAnimated = true;
            progressObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

if (aboutSection) {
    progressObserver.observe(aboutSection);
}

// ============================================
// TYPING EFFECT FOR HERO SECTION
// ============================================
const roles = ["Front-End Developer", "UI Designer", "Mahasiswa Sistem Informasi", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedSpan = document.getElementById("typed");

function typeEffect() {
    if (!typedSpan) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

if (typedSpan) {
    typeEffect();
}

// ============================================
// INITIALIZE AOS (SCROLL REVEAL)
// ============================================
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// ============================================
// STICKY NAVBAR SHADOW ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// ============================================
// INITIAL RENDER
// ============================================
renderPortfolio();