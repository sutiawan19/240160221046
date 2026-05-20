// Fungsi menghasilkan warna random
function generateRandomColor() {
    var randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
}

// Fungsi mengganti background
function changeBackgroundColor() {
    document.body.style.backgroundColor =
        generateRandomColor();
}

// Pesan sambutan
function showWelcomeMessage() {
    alert(
        "Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat."
    );
}

// Saat halaman dibuka
window.onload = function () {

    // Tampilkan alert
    showWelcomeMessage();

};