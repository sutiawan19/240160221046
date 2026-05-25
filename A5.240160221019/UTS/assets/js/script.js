// Portfolio Projects Data - 2 Project E-Commerce Platform
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        category: "web",
        image: "assets/images/ecommerce.jpg",
        lightboxImage: "assets/images/ecommerce.jpg"
    },
    {
        id: 2,
        title: "Student Management Platform",
        description: "Manage student data in one integrated platform.",
        category: "web",
        image: "assets/images/student.jpg",
        lightboxImage: "assets/images/student.jpg"
    }
];

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            const navLinksMenu = document.querySelector('.nav-links');
            if (navLinksMenu) {
                navLinksMenu.classList.remove('active');
            }
        }
    });
});

// Active Navigation Link on Scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentThemeValue = document.documentElement.getAttribute('data-theme');
        if (currentThemeValue === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinksMenu = document.querySelector('.nav-links');

if (hamburger && navLinksMenu) {
    hamburger.addEventListener('click', () => {
        navLinksMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinksMenu.contains(e.target)) {
            navLinksMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ========== PROGRESS BAR ANIMATION - MAJU MUNDUR TERUS ==========
// Fungsi untuk mendapatkan target persentase dari setiap skill
function getTargetPercentage(progressBar) {
    const skillItem = progressBar.closest('.skill-item');
    if (skillItem) {
        const percentSpan = skillItem.querySelector('.skill-percent');
        if (percentSpan) {
            return parseInt(percentSpan.textContent);
        }
    }
    return 0;
}

// Fungsi untuk cek apakah element visible di viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    // Cek apakah element visible (masuk layar)
    return (
        rect.top < windowHeight - 50 &&
        rect.bottom > 50 &&
        rect.left < windowWidth &&
        rect.right > 0
    );
}

// Fungsi utama untuk update progress bar (MAJU MUNDUR TERUS)
function updateProgressBarsContinuously() {
    const allProgressBars = document.querySelectorAll('.progress');
    
    allProgressBars.forEach(progressBar => {
        const isVisible = isElementInViewport(progressBar);
        const targetPercent = getTargetPercentage(progressBar);
        
        if (isVisible) {
            // Jika visible di layar -> gerak maju (ke target persentase)
            if (progressBar.style.width !== targetPercent + '%') {
                progressBar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                progressBar.style.width = targetPercent + '%';
            }
        } else {
            // Jika tidak visible (keluar layar) -> mundur (ke 0%)
            if (progressBar.style.width !== '0%' && progressBar.style.width !== '') {
                progressBar.style.transition = 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                progressBar.style.width = '0%';
            }
        }
    });
}

// Inisialisasi progress bar (semua mulai dari 0)
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// ========== PORTFOLIO FUNCTIONS ==========
function renderPortfolioItems(filter = 'all') {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    if (filteredProjects.length === 0) {
        portfolioGrid.innerHTML = `
            <div style="text-align: center; padding: 2rem; grid-column: 1/-1;">
                <p>No projects found in this category.</p>
            </div>
        `;
        return;
    }
    
    portfolioGrid.innerHTML = filteredProjects.map(project => `
        <div class="portfolio-item" data-category="${project.category}" data-id="${project.id}">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="portfolio-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="portfolio-category">Web Development</span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = parseInt(item.dataset.id);
            const project = projects.find(p => p.id === projectId);
            if (project) {
                openLightbox(project.lightboxImage, project.title);
            }
        });
    });
}

function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            renderPortfolioItems(filterValue);
        });
    });
}

// ========== LIGHTBOX FUNCTIONS ==========
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.querySelector('.close-lightbox');

function openLightbox(imageSrc, caption) {
    if (lightbox && lightboxImage && lightboxCaption) {
        lightboxImage.src = imageSrc;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'block';
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
        if (e.target === lightbox) {
            closeLightboxModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
        closeLightboxModal();
    }
});

// ========== CONTACT FORM VALIDATION ==========
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }
        
        if (message.length < 10) {
            showFormMessage('Message must be at least 10 characters', 'error');
            return;
        }
        
        showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();
        
        setTimeout(() => {
            if (formMessage) {
                formMessage.style.display = 'none';
            }
        }, 5000);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ========== LAZY LOADING ==========
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ========== THROTTLE FUNCTION ==========
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========== SKILL ITEMS ANIMATION ==========
function animateSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');
    const windowHeight = window.innerHeight;
    
    skillItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < windowHeight - 50) {
            item.classList.add('animate');
        }
    });
}

// ========== REVEAL ANIMATION ==========
function initRevealAnimation() {
    const revealElements = document.querySelectorAll('.about-content, .education, .portfolio-grid, .contact-content');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(element => {
            element.classList.add('reveal');
            revealObserver.observe(element);
        });
    }
}

// ========== TIMELINE ANIMATION ==========
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animation = `fadeInTimeline 0.6s ease forwards ${index * 0.2 + 0.2}s`;
    });
}

// ========== INITIALIZE ALL ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
    // Portfolio
    renderPortfolioItems('all');
    setupPortfolioFilters();
    
    // Lazy Loading
    initLazyLoading();
    
    // Progress Bars - Reset ke 0 dulu
    initProgressBars();
    
    // Skill Items Animation
    animateSkillItems();
    
    // Reveal Animation
    initRevealAnimation();
    
    // Timeline Animation
    initTimelineAnimation();
    
    // Trigger progress bar update pertama
    setTimeout(() => {
        updateProgressBarsContinuously();
    }, 500);
});

// Scroll event untuk progress bar (MAJU MUNDUR TERUS setiap scroll)
window.addEventListener('scroll', throttle(() => {
    updateActiveNav();
    updateProgressBarsContinuously();  // Progress bar update setiap scroll
    animateSkillItems();
}, 20));

// Load event tambahan
window.addEventListener('load', () => {
    setTimeout(() => {
        updateProgressBarsContinuously();
    }, 300);
});

// Juga update saat resize window
window.addEventListener('resize', () => {
    updateProgressBarsContinuously();
});

// ========== CSS ANIMATIONS STYLES ==========
const style = document.createElement('style');
style.textContent = `
    img[loading="lazy"] {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    img[loading="lazy"].loaded {
        opacity: 1;
    }
    
    .skill-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.5s ease;
    }
    .skill-item.animate {
        opacity: 1;
        transform: translateX(0);
    }
    
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes fadeInTimeline {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('Portfolio website loaded successfully! - 2 Project E-Commerce Platform');