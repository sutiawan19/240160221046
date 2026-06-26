// Fungsi untuk menghasilkan warna acak
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// Mengubah warna latar belakang halaman secara acak
function changeBackgroundColor() {
    document.body.style.backgroundColor = generateRandomColor();
}

// Menampilkan pesan sambutan
function showWelcomeMessage() {
    alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
}

// Memanggil fungsi saat halaman dimuat
window.onload = function() {
    changeBackgroundColor();
    showWelcomeMessage();
};