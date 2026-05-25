// ======================================================
// LOAD COMPONENT
// ======================================================

async function loadComponent(id, file) {

    const element =
        document.getElementById(id);

    const response =
        await fetch(file);

    const html =
        await response.text();

    element.innerHTML = html;
}


// ======================================================
// INIT WEBSITE
// ======================================================

async function initWebsite() {

    // ======================================================
    // LOAD ALL COMPONENTS
    // ======================================================

    await loadComponent("navbar", "sections/navbar.html");
    await loadComponent("hero", "sections/hero.html");
    await loadComponent("about", "sections/about.html");
    await loadComponent("experience", "sections/experience.html");
    await loadComponent("project", "sections/project.html");
    await loadComponent("explore-projects", "sections/explore-projects.html");
    await loadComponent("footer", "sections/footer.html");


    // ======================================================
    // TYPING ANIMATION
    // ======================================================

    const texts = ["SUTIAWAN"];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingText =
        document.getElementById("typing-text");

    function typeEffect() {

        const currentText = texts[textIndex];

        if (!typingText) return;

        if (!isDeleting) {

            typingText.textContent =
                currentText.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentText.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingText.textContent =
                currentText.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                textIndex =
                    (textIndex + 1) % texts.length;

            }

        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);

    }

    typeEffect();


    // ======================================================
    // IMAGE SLIDER
    // ======================================================

    const images = [
        "assets/images/profile-1.png",
        "assets/images/profile-2.png",
        "assets/images/profile-3.png"
    ];

    let imageIndex = 0;

    const heroImage =
        document.getElementById("hero-image");

    if (heroImage) {

        setInterval(() => {

            heroImage.style.opacity = 0;

            setTimeout(() => {

                imageIndex =
                    (imageIndex + 1) % images.length;

                heroImage.src =
                    images[imageIndex];

                heroImage.style.opacity = 1;

            }, 0);

        }, 1000);

    }


    // ======================================================
    // MOBILE MENU
    // ======================================================

    const menuBtn =
        document.getElementById("menu-btn");

    const mobileMenu =
        document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

        });

    }


    // ======================================================
    // NAVBAR ACTIVE
    // ======================================================

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(
            ".nav-link, .mobile-nav-link"
        );

    // CLICK ACTIVE

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((item) => {
                item.classList.remove("active-link");
            });

            link.classList.add("active-link");

        });

    });

    // SCROLL ACTIVE

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 200;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active-link");

            const href =
                link.getAttribute("href")?.replace("#", "");

            if (href === current) {

                link.classList.add("active-link");

            }

        });

    });


    // ======================================================
    // REVEAL ANIMATION
    // ======================================================

    const items =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0"
                        );

                        entry.target.classList.remove(
                            "opacity-0",
                            "translate-y-10"
                        );

                    }, index * 150);

                }

            });

        }, {
            threshold: 0.2
        });

    items.forEach((item) => observer.observe(item));


    // ======================================================
    // DARK MODE
    // ======================================================

    const themeToggle =
        document.getElementById("theme-toggle");

    const themeIcon =
        document.getElementById("theme-icon");

    // Load Saved Theme

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeIcon) {
            themeIcon.classList.add("rotate-180");
        }

    }

    // Toggle Theme

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (themeIcon) {
                themeIcon.classList.toggle("rotate-180");
            }

            // Save Theme

            if (
                document.body.classList.contains("dark-mode")
            ) {

                localStorage.setItem("theme", "dark");

            } else {

                localStorage.setItem("theme", "light");

            }

        });

    }


    // ======================================================
    // INIT PERSPECTIVE
    // ======================================================

    setTimeout(() => {

        initPerspective();

    }, 500);

}


// ======================================================
// PERSPECTIVE EFFECT
// ======================================================

function initPerspective() {

    const wrapper =
        document.getElementById("home");

    const card =
        document.getElementById("hero-card");

    const layer1 =
        document.getElementById("layer-1");

    const layer2 =
        document.getElementById("layer-2");

    const layer3 =
        document.getElementById("layer-3");

    const heroImage =
        document.getElementById("hero-image");

    if (
        !wrapper ||
        !card ||
        !layer1 ||
        !layer2 ||
        !layer3 ||
        !heroImage
    ) return;

    wrapper.addEventListener("mousemove", (e) => {

        const rect =
            wrapper.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -8;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        // MAIN CARD

        card.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        // DEPTH

        layer1.style.transform =
            `translate(${rotateY * -2}px,
             ${rotateX * -2}px)
             rotate(-12deg)`;

        layer2.style.transform =
            `translate(${rotateY * 3}px,
             ${rotateX * 3}px)
             rotate(15deg)`;

        layer3.style.transform =
            `translate(${rotateY * -4}px,
             ${rotateX * -4}px)
             rotate(8deg)`;

        heroImage.style.transform =
            `translate(${rotateY * 2}px,
             ${rotateX * 2}px)
             scale(1.02)`;

    });

    wrapper.addEventListener("mouseleave", () => {

        card.style.transform =
            `perspective(1200px)
             rotateX(0deg)
             rotateY(0deg)`;

        layer1.style.transform =
            `translate(0px,0px) rotate(-12deg)`;

        layer2.style.transform =
            `translate(0px,0px) rotate(15deg)`;

        layer3.style.transform =
            `translate(0px,0px) rotate(8deg)`;

        heroImage.style.transform =
            `translate(0px,0px) scale(1)`;

    });

}


// ======================================================
// PAGE LOADER
// ======================================================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("page-loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hidden");

            setTimeout(() => {

                loader.style.display = "none";

            }, 700);

        }, 2000);

    }

});


// ======================================================
// START WEBSITE
// ======================================================

initWebsite();