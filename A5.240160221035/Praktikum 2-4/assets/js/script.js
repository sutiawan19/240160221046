
const title = 'Belajar JavaScript';
const profil = {
  nama: 'Rahma Nadya',
  umur: 20,
  jurusan: 'Sistem Informasi'
};

alert(title);

class Keahlian {
  constructor(nama) {
    this.nama = nama;
  }
  tampilkan() {
    console.log("Skill: " + this.nama);
  }
}

const listSkill = [
  new Keahlian('Canva'),
  new Keahlian('Microsoft Word'),
  new Keahlian('Microsoft Excel'),
  new Keahlian('phpMyAdmin'),
];

function sapa() {
  alert('Halo, terima kasih sudah mengunjungi portofolio saya!');
}

function generateRandomColor() {
  const colors = ['cornflowerblue', '#7BAAF7', '#89C2FF', '#A7C7FF'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function jalankanSistem() {
  document.body.style.backgroundColor = generateRandomColor();
  
  sapa();

  console.log('Selamat datang di website portofolio ' + profil.nama);
  
  if (profil.umur < 18) {
    console.log('Status: Masih remaja');
  } else {
    console.log('Status: Sudah dewasa');
  }

  console.log('--- Daftar Keahlian ---');
  listSkill.forEach(item => {
    item.tampilkan();
  });
}

window.onload = jalankanSistem;
