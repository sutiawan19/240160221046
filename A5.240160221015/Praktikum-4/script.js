// Fungsi untuk menghasilkan warna acak
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Mengubah warna latar belakang halaman secara acak
function changeBackgroundColor() {
    document.body.style.backgroundColor = generateRandomColor();
}

// Menampilkan pesan sambutan
function showWelcomeMessage() {
    alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
}

// Jika kamu memang punya dua fungsi tambahan ini:
function displayProjects() {}
function displayExperience() {}

// Gabungkan semua dalam satu event
window.onload = function() {
    changeBackgroundColor();
    showWelcomeMessage();
    displayProjects();
    displayExperience();
};