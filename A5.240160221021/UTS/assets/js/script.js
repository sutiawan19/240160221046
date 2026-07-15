// Memastikan script jalan setelah halaman siap
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const loader = document.getElementById('loader');

    // 1. Menghilangkan Loader
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Memberi jeda 0.5 detik agar smooth
    }

    // 2. Logika Dark Mode
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            console.log("Tombol diklik!"); // Cek di Inspect Element > Console
            
            // Memberi tanda 'dark-mode' pada body
            body.classList.toggle('dark-mode');

            // Ganti ikon tombol
            if (body.classList.contains('dark-mode')) {
                themeToggle.innerText = '☀️';
            } else {
                themeToggle.innerText = '🌙';
            }
        });
    } else {
        console.log("Tombol theme-toggle tidak ditemukan!");
    }
});