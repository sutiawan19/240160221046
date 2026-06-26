/* =========================
   LOADING ANIMATION
========================= */
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
});


/* =========================
   DARK / LIGHT MODE
========================= */
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});


/* =========================
   RESPONSIVE NAVBAR
========================= */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});


/* =========================
   PORTFOLIO FILTER
========================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filterValue = button.getAttribute("data-filter");

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    portfolioCards.forEach(function (card) {
      if (filterValue === "all") {
        card.style.display = "block";
      } else if (card.classList.contains(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


/* =========================
   LIGHTBOX PREVIEW
========================= */
const previewButtons = document.querySelectorAll(".preview-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

previewButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const projectCard = button.closest(".portfolio-card");
    const projectImage = projectCard.querySelector("img");

    lightboxImg.src = projectImage.src;
    lightboxImg.alt = projectImage.alt;
    lightbox.classList.add("active");
  });
});

lightboxClose.addEventListener("click", function () {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }
});


/* =========================
   CONTACT FORM VALIDATION
========================= */
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Your message has been sent successfully!");

  contactForm.reset();
});


/* =========================
   SCROLL HEADER EFFECT
========================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});