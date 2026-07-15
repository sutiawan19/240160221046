// ==========================================
// 1. DATA & VARIABEL (Modul 01)
// ==========================================
const title = 'Belajar JavaScript';
const profil = {
  nama: 'Nabilla Natasya Putri',
  umur: 20,
  jurusan: 'Sistem Informasi'
};

alert(title);

// ==========================================
// 2. OOP - OBJECT ORIENTED PROGRAMMING (Modul 03)
// ==========================================
// Membuat cetakan (Class) untuk Skill agar lebih terstruktur
class Keahlian {
  constructor(nama) {
    this.nama = nama;
  }
  tampilkan() {
    console.log("Skill: " + this.nama);
  }
}

// Inisialisasi data menggunakan Class Keahlian
const listSkill = [
  new Keahlian('Canva'),
  new Keahlian('Microsoft Word'),
  new Keahlian('Microsoft Excel'),
  new Keahlian('phpMyAdmin'),
];

// ==========================================
// 3. FUNGSI & LOGIKA (Modul 02 & 04)
// ==========================================
function sapa() {
  alert('Halo, terima kasih sudah mengunjungi portofolio saya!');
}

function generateRandomColor() {
  const colors = ['cornflowerblue', '#675860', '#635050'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// ==========================================
// 4. CASE STUDY - SISTEM UTAMA (Modul 04)
// ==========================================
function jalankanSistem() {
  // Ganti warna background
  document.body.style.backgroundColor = generateRandomColor();
  
  // Munculkan sapaan
  sapa();

  console.log('Selamat datang di website portofolio ' + profil.nama);
  
  // Cek Status Umur (Kondisional)
  if (profil.umur < 18) {
    console.log('Status: Masih remaja');
  } else {
    console.log('Status: Sudah dewasa');
  }

  // Menampilkan Skill menggunakan Looping (Perulangan)
  console.log('--- Daftar Keahlian ---');
  listSkill.forEach(item => {
    item.tampilkan();
  });
}

// Jalankan semua fungsi saat halaman selesai dimuat
window.onload = jalankanSistem;