
// DATA & VARIABEL 

const title = 'Belajar JavaScript';
const profil = {
  nama: 'Rahma NadyaS',
  umur: 20,
  jurusan: 'Sistem Informasi'
};


// OOP - CLASS KEAIHLAN 

class Keahlian {
  constructor(nama, persentase = 75) {
    this.nama = nama;
    this.persentase = persentase;
  }
  tampilkan() {
    console.log("Skill: " + this.nama);
  }
}

// Data skill  
const listSkill = [
  new Keahlian('Canva', 85),
  new Keahlian('Microsoft Word', 90),
  new Keahlian('Microsoft Excel', 80),
  new Keahlian('phpMyAdmin', 75),
  new Keahlian('HTML/CSS', 75),
  
];


// 3. FUNGSI SIAPAN 

function sapa() {
  alert('Halo, terima kasih sudah mengunjungi portofolio saya!');
}
 


// ----- LOADING ANIMATION -----
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 800);
    }
    
    // fungsi sapaan setelah loading
    setTimeout(() => {
        console.log('Selamat datang di website portofolio ' + profil.nama);
        console.log('Jurusan: ' + profil.jurusan);
        console.log('Status: ' + (profil.umur < 18 ? 'Masih remaja' : 'Sudah dewasa'));
        console.log('--- Daftar Keahlian ---');
        listSkill.forEach(item => item.tampilkan());
    }, 1000);
});

// Fallback loading
setTimeout(function() {
    const loading = document.getElementById('loading');
    if (loading && loading.style.display !== 'none') {
        loading.style.display = 'none';
    }
}, 3000);

// ----- DARK MODE TOGGLE -----
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    const icon = darkModeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }
    });
}

// ----- SMOOTH SCROLLING -----
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) navMenu.classList.remove('active');
        }
    });
});

// ----- HAMBURGER MENU (Mobile) -----
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ----- PORTFOLIO DATA (6 Proyek) -----
const projects = [
    {
        id: 1,
        title:"Praktikum 2 Portofolio Pribadi",
        category: "web",
        image: "assets/image/Project/Portofolio Pribadi .png",
        description:"Pengembangan portofolio pribadi dengan CSS styling dan JavaScript interaktif, menampilkan profil, tabel organisasi, dan audio lagu favorit."
    },
    {
        id: 2,
        title: "Hello React-JSX Children & Attributes",
        category: "Web",
        image: "assets/image/Project/jsx-children-attributes.png",
        description:"Mempelajari JSX di React, termasuk penggunaan children elements dan custom attributes pada komponen."
    },
    {
        id: 3,
        title: "Desain Poster Digital",
        category: "design",
        image: "assets/image/Project/poster.jpg",
        description: "Desain publikasi digital untuk pendaftaran organisasi Badminton FTI menggunakan tools Canva. Proyek ini mencakup penataan tata letak visual dan penyampaian informasi pendaftaran secara efektif."
    },
    {
        id: 4,
        title: "UTS Portofolio Website",
        category: "data",
        image: "assets/image/Project/Proyek UTS Website Portofolio.png",
        description: "Proyek UTS website portofolio profesional dengan fitur Dark Mode, filter portofolio, lightbox, form validasi, dan responsive design."
    },
    {
        id: 5,
        title: "Sistem Informasi Toko",
        category: "web",
        image: "assets/image/Project/Sistem Informasi Toko.png",
        description:"Proyek pengembangan sistem informasi untuk manajemen toko."
    },
    {
        id: 6,
        title: "Analisis Data",
        category: "Data",
        image: "assets/image/Project/Data Balance Sheet.png",
        description: "Proyek analisis data menggunakan Excel"
    }
];

function renderProjects(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    grid.innerHTML = filteredProjects.map(project => `
        <div class="portfolio-item" data-id="${project.id}">
            <img src="${project.image}" alt="${project.title}" class="portfolio-img" loading="lazy">
            <div class="portfolio-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="portfolio-category">${project.category}</span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const project = projects.find(p => p.id === id);
            if (project) openLightbox(project.image);
        });
    });
}

// ----- FILTER PORTFOLIO -----
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(filter);
    });
});

// Initial render
renderProjects('all');

// ----- LIGHTBOX -----
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.querySelector('.close-lightbox');

function openLightbox(imageSrc) {
    if (lightbox && lightboxImg) {
        lightbox.style.display = 'flex';
        lightboxImg.src = imageSrc;
    }
}

if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        if (lightbox) lightbox.style.display = 'none';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

//FORM VALIDASI 
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    let isValid = true;
    
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name && nameError) {
        if (!name.value.trim()) {
            nameError.textContent = 'Nama lengkap harus diisi';
            isValid = false;
        } else if (name.value.trim().length < 3) {
            nameError.textContent = 'Nama minimal 3 karakter';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
    }
    
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (email && emailError) {
        if (!email.value.trim()) {
            emailError.textContent = 'Email harus diisi';
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            emailError.textContent = 'Email tidak valid';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
    }
    
    const subject = document.getElementById('subject');
    const subjectError = document.getElementById('subjectError');
    if (subject && subjectError) {
        if (!subject.value.trim()) {
            subjectError.textContent = 'Subjek harus diisi';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }
    }
    
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message && messageError) {
        if (!message.value.trim()) {
            messageError.textContent = 'Pesan harus diisi';
            isValid = false;
        } else if (message.value.trim().length < 10) {
            messageError.textContent = 'Pesan minimal 10 karakter';
            isValid = false;
        } else {
            messageError.textContent = '';
        }
    }
    
    return isValid;
}

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            formSuccess.style.display = 'block';
            formSuccess.textContent = '✅ Pesan berhasil dikirim!';
            contactForm.reset();
            
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });
}

// PROGRESS BAR ANIMATION
function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight - 100;
}

// Fungsi
function loadProgressBars() {
    const skillsContainer = document.querySelector('.skills');
    if (skillsContainer && listSkill.length > 0) {
        // Generate HTML progress bar dari listSkill
        let skillsHTML = '<h3>Skills & Expertise</h3>';
        listSkill.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${skill.nama}</span>
                        <span>${skill.persentase}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${skill.persentase}%"></div>
                    </div>
                </div>
            `;
        });
        skillsContainer.innerHTML = skillsHTML;
    }
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}

// loadProgressBars 
document.addEventListener('DOMContentLoaded', function() {
    loadProgressBars();
    animateProgressBars();
});

window.addEventListener('scroll', animateProgressBars);

console.log('✅ JavaScript berhasil dimuat! Data: ' + profil.nama);