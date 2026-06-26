const projectsData = [
    {
        id: 1,
        title: "Praktikum 2 Portofolio Pribadi",
        categoryName:"web",
        category: "web",
        description: "Proyek pembuatan website portofolio pribadi yang dirancang untuk menampilkan profil diri, keterampilan, pengalaman, serta hasil project yang pernah dikerjakan.",
        img: "file:///D:/SI-IV-B/A5.240160221029/UTS/assets/Image/Project/Portofolio%20Pribadi.png"
    },
    {
        id: 2,
        title: "Hello React-JSX Children & Attributes",
        categoryName: "web",
        category: "web",
        description: "Implementasi dasar framework React melalui pembuatan komponen sederhana dengan memanfaatkan JSX, children, dan attributes untuk memahami struktur pengembangan front-end.",
        img: "file:///D:/SI-IV-B/A5.240160221029/UTS/assets/Image/Project/jsx-children-attributes.png"
    },
    {
        id: 3,
        title: "Sistem Informasi Toko",
        category: "web",
        categoryName: "web",
        description: "Pengembangan sistem informasi berbasis web yang berfungsi untuk membantu pengelolaan data produk, transaksi penjualan, serta informasi toko agar lebih terstruktur dan efisien.",
        img: "file:///D:/SI-IV-B/A5.240160221029/UTS/assets/Image/Project/Sistem Informasi Toko.png"
    },
    {
        id: 4,
        title: "Analisis Data",
        category: "data",
        categoryName: "data",
        description: "Pengolahan dan analisis data menggunakan spreadsheet untuk menghitung dan menyajikan informasi secara lebih sistematis dan mudah dipahami.",
        img: "file:///D:/SI-IV-B/A5.240160221029/UTS/assets/Image/Project/Data Balance Sheet.png"
    },
    {
        id: 5,
        title: "Desain Logo Usaha",
        category: "Design",
        categoryName: "design",
        description: "Perancangan desain visual untuk kebutuhan branding usaha dengan memperhatikan identitas merek, estetika, dan daya tarik promosi.",
        img: "file:///D:/SI-IV-B/A5.240160221029/UTS/assets/Image/Project/Logo Usaha.png"
    },
    {
        id: 6,
        title: "UTS Portofolio Website",
        category: "web",
        categoryName: "web",
        description: "Proyek UTS berupa pembuatan website portofolio untuk mengimplementasikan HTML, CSS, dan JavaScript dalam menampilkan informasi pribadi dan hasil karya.",
        img: "file:///D:/SI-IV-B/A5.240160221029/UTS/assets/Image/Project/Proyek UTS.png"
    }
];

// ============================================
// DOM Elements
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
// Preloader
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
// Render Portfolio with Lazy Loading
// ============================================
function renderPortfolio() {
    if (!portfolioGrid) return;
    
    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === currentFilter);
    
    portfolioGrid.innerHTML = filteredProjects.map(project => `
        <div class="portfolio-card" data-id="${project.id}">
            <img data-src="${project.img}" alt="${project.title}" class="lazy-img" loading="lazy">
            <div class="card-info">
                <span class="category">${project.categoryName}</span>
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 60)}${project.description.length > 60 ? '...' : ''}</p>
            </div>
        </div>
    `).join('');
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Add click events to new cards
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.id);
            const project = projectsData.find(p => p.id === projectId);
            if (project) openLightbox(project);
        });
    });
}

// Lazy Loading using Intersection Observer
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
// Filter Functionality
// ============================================
if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderPortfolio();
        });
    });
}

// ============================================
// Lightbox
// ============================================
function openLightbox(project) {
    if (lightboxImg && lightboxTitle && lightboxDesc && lightbox) {
        lightboxImg.src = project.img;
        lightboxTitle.textContent = project.title;
        lightboxDesc.textContent = project.description;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightboxModal() {
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
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
// Dark/Light Mode with LocalStorage
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
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
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
// Form Validation with Loading Animation
// ============================================
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const subject = document.getElementById('subject')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';
        const feedback = document.getElementById('formFeedback');
        
        // Validation
        if (!name || !email || !subject || !message) {
            if (feedback) {
                feedback.textContent = '❌ Semua field harus diisi!';
                feedback.className = 'form-feedback error';
            }
            return;
        }
        
        const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        if (!emailRegex.test(email)) {
            if (feedback) {
                feedback.textContent = '❌ Format email tidak valid!';
                feedback.className = 'form-feedback error';
            }
            return;
        }
        
        // Clear error
        if (feedback) {
            feedback.textContent = '';
            feedback.className = 'form-feedback';
        }
        
        // Show loading animation
        if (submitBtn) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
        }
        
        // Simulate API call
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
            if (feedback) {
                feedback.textContent = '✅ Pesan berhasil dikirim! Terima kasih 🙌';
                feedback.className = 'form-feedback success';
            }
            if (contactForm) {
                contactForm.reset();
            }
            
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
// Smooth Scroll & Navbar Active State
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
// Hamburger Menu
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
// Animated Progress Bars (Trigger on Scroll)
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
// Typing Effect for Hero Section
// ============================================
const roles = ["Front-End Developer", "UI Designer", "Mahasiswa Sistem Informasi", "Creative Thinker"];
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
// Initialize AOS (Scroll Reveal)
// ============================================
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// ============================================
// Sticky Navbar Background Change
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.boxShadow = window.scrollY > 50 ? 'var(--shadow-md)' : 'none';
    }
});

// ============================================
// Initial Render
// ============================================
renderPortfolio();