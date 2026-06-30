// Dark Mode
const tombol = document.getElementById("darkMode");

tombol.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        tombol.innerHTML = "☀️";
    } else {
        tombol.innerHTML = "🌙";
    }
});

// Form Kontak
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Terima kasih, pesan Anda berhasil dikirim!");

    form.reset();
});