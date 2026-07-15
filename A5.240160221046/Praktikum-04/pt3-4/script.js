const courseData = [
    {
        meeting: "Pertemuan 3",
        topics: [
            {
                id: "p3-1",
                title: "1. Konsep OOP",
                desc: "Paradigma Object-Oriented Programming di JS.",
                explanation: "Object-Oriented Programming (OOP) adalah paradigma pemrograman yang berfokus pada pembuatan 'objek' yang memiliki data (properties) dan perilaku (methods). Di JavaScript, OOP bisa diterapkan menggunakan function constructors atau sintaks class modern (ES6).",
                illustration: "<div class='diagram-box'><b>Mobil (Object)</b><br>Warna: Merah (Property)<br>Maju() (Method)</div>",
                syntax: "class NamaClass { \n  constructor() {} \n}",
                code: "class Mobil {\n  constructor(merk) {\n    this.merk = merk;\n  }\n}\nconst mobilku = new Mobil('Toyota');\nconsole.log(mobilku.merk);",
                output: "Toyota",
                outputExplanation: "Kita membuat blueprint 'Mobil' dan mencetak objek 'mobilku' dari blueprint tersebut.",
                tips: "Pahami bahwa di balik layar, 'class' di JS hanyalah syntactic sugar dari Prototype-based inheritance.",
                mistakes: "Lupa menggunakan keyword 'new' saat membuat instance dari class.",
                quiz: [
                    { q: "Apa itu OOP?", options: ["Object-Oriented Programming", "Only Object Programming", "Oriented Object Process", "Over Object Pattern"], ans: 0, explanation: "Singkatan dari Object-Oriented Programming." },
                    { q: "Blueprint untuk membuat objek disebut?", options: ["Method", "Class", "Property", "Variable"], ans: 1, explanation: "Class adalah cetak biru (blueprint)." },
                    { q: "Keyword untuk membuat instance dari class?", options: ["create", "make", "new", "init"], ans: 2, explanation: "Keyword 'new' digunakan untuk membuat instance." }
                ],
                challenges: {
                    beginner: "Buat class Hewan dengan constructor yang menerima nama.",
                    intermediate: "Buat 2 instance berbeda dari class Hewan.",
                    advanced: "Buktikan dengan typeof bahwa class di JS sebenarnya adalah function."
                }
            },
            {
                id: "p3-2",
                title: "2. Object Properties",
                desc: "Variabel di dalam objek.",
                explanation: "Properties adalah variabel yang melekat pada sebuah objek. Mereka mendefinisikan karakteristik atau state dari objek tersebut.",
                illustration: "<div class='diagram-box'><b>Person</b><br>nama = 'Andi'<br>umur = 20</div>",
                syntax: "this.namaProperty = nilai;",
                code: "class User {\n  constructor(username, email) {\n    this.username = username;\n    this.email = email;\n  }\n}\nconst u1 = new User('johndoe', 'john@mail.com');\nconsole.log(u1.username);",
                output: "johndoe",
                outputExplanation: "Properti username dan email disimpan dalam objek u1 yang dibuat dari class User.",
                tips: "Inisialisasi semua properti utama di dalam constructor agar struktur objek jelas.",
                mistakes: "Mendeklarasikan properti dengan let/const di dalam constructor (harus menggunakan this.nama = ...).",
                quiz: [
                    { q: "Bagaimana cara mendefinisikan property di constructor?", options: ["let prop = val", "const prop = val", "this.prop = val", "prop: val"], ans: 2, explanation: "Gunakan this.namaProperty = nilai." },
                    { q: "Apakah nilai property bisa diubah?", options: ["Bisa", "Tidak", "Hanya string", "Hanya angka"], ans: 0, explanation: "Bisa (kecuali disetting immutable/private readonly)." },
                    { q: "Keyword yang mereferensikan objek itu sendiri?", options: ["self", "this", "object", "me"], ans: 1, explanation: "'this' mereferensikan instance saat ini." }
                ],
                challenges: {
                    beginner: "Tambah property 'hobi' pada class User.",
                    intermediate: "Akses dan ubah property 'email' dari objek u1.",
                    advanced: "Buat property dinamis berdasarkan parameter."
                }
            },
            {
                id: "p3-3",
                title: "3. Object Methods",
                desc: "Fungsi di dalam objek.",
                explanation: "Methods adalah fungsi yang menjadi milik sebuah objek. Mereka mendefinisikan apa yang bisa dilakukan oleh objek tersebut (behavior).",
                illustration: "<div class='diagram-box'><b>Kucing</b><br>meong() { console.log('Meong!') }</div>",
                syntax: "class A {\n  namaMethod() { }\n}",
                code: "class Kucing {\n  constructor(nama) {\n    this.nama = nama;\n  }\n  bersuara() {\n    console.log(this.nama + ' berkata: Meong!');\n  }\n}\nconst k = new Kucing('Oyen');\nk.bersuara();",
                output: "Oyen berkata: Meong!",
                outputExplanation: "Method bersuara() dipanggil, mengakses properti 'nama' menggunakan keyword 'this'.",
                tips: "Method bisa menerima parameter dan mereturn nilai sama seperti fungsi biasa.",
                mistakes: "Lupa menambahkan 'this.' saat mengakses properti lain di dalam method class.",
                quiz: [
                    { q: "Apa sebutan untuk fungsi di dalam class?", options: ["Action", "Method", "Procedure", "Task"], ans: 1, explanation: "Fungsi yang terikat pada objek disebut Method." },
                    { q: "Bagaimana cara method memanggil method lain di class yang sama?", options: ["this.method()", "method()", "class.method()", "self.method()"], ans: 0, explanation: "Gunakan this.namaMethod()." },
                    { q: "Apakah method perlu keyword 'function' di dalam class ES6?", options: ["Ya", "Tidak"], ans: 1, explanation: "Di class ES6, langsung tulis namaMethod() { }." }
                ],
                challenges: {
                    beginner: "Buat method makan() yang mencetak teks.",
                    intermediate: "Buat method yang menerima argumen porsi makanan.",
                    advanced: "Panggil method lain dari dalam method makan()."
                }
            },
            {
                id: "p3-4",
                title: "4. Constructor Function",
                desc: "Fungsi pembentuk objek.",
                explanation: "Sebelum ada class (ES6), JS membuat objek menggunakan function khusus yang disebut Constructor Function, yang dipanggil menggunakan keyword new.",
                illustration: "<div class='diagram-box'>function Person(name) { this.name = name }<br>new Person('Budi')</div>",
                syntax: "function NamaClass(param) { this.param = param; }",
                code: "function Mahasiswa(nama, nim) {\n  this.nama = nama;\n  this.nim = nim;\n  this.belajar = function() {\n    console.log(this.nama + ' sedang belajar');\n  }\n}\nconst m1 = new Mahasiswa('Siti', '12345');\nm1.belajar();",
                output: "Siti sedang belajar",
                outputExplanation: "Function Mahasiswa bertindak sebagai blueprint. Keyword 'new' membuat empty object dan mengikat 'this' ke objek tersebut.",
                tips: "Gunakan huruf kapital di awal nama function untuk menandakan bahwa itu adalah Constructor.",
                mistakes: "Memanggil constructor tanpa 'new' (akan mengotori global scope window!).",
                quiz: [
                    { q: "Apa efek jika lupa 'new' saat memanggil constructor?", options: ["Error syntax", "'this' menunjuk ke objek global (window)", "Tidak ada efek", "Return null"], ans: 1, explanation: "Tanpa new, this merujuk ke global object." },
                    { q: "Konvensi penamaan constructor function?", options: ["camelCase", "PascalCase", "snake_case", "kebab-case"], ans: 1, explanation: "PascalCase (Huruf besar di awal kata)." },
                    { q: "Class ES6 sebenarnya adalah?", options: ["Object baru", "Syntactic sugar dari constructor function", "Tipe data primitif", "Library eksternal"], ans: 1, explanation: "Class hanya cara penulisan baru untuk fungsi dan prototype." }
                ],
                challenges: {
                    beginner: "Buat constructor function Buku(judul, pengarang).",
                    intermediate: "Instansiasi dua buku berbeda.",
                    advanced: "Coba panggil constructor Buku tanpa 'new' dan lihat isi object window."
                }
            },
            {
                id: "p3-5",
                title: "5. Public Property",
                desc: "Properti yang dapat diakses bebas.",
                explanation: "Secara default, semua properti di dalam class/objek JavaScript adalah public (bisa diakses dan diubah dari luar objek).",
                illustration: "<div class='diagram-box'>Terbuka untuk umum.<br>Bisa dibaca & ditulis oleh siapa saja.</div>",
                syntax: "class A { prop = 'value'; }",
                code: "class Kotak {\n  constructor(lebar, tinggi) {\n    this.lebar = lebar; // Public\n    this.tinggi = tinggi; // Public\n  }\n}\nconst k = new Kotak(10, 20);\nconsole.log(k.lebar);\nk.lebar = 50;\nconsole.log(k.lebar);",
                output: "10\n50",
                outputExplanation: "Properti lebar bisa diakses langsung (k.lebar) dan dimanipulasi dari luar class.",
                tips: "Gunakan public property untuk data yang memang aman untuk diubah oleh siapa saja.",
                mistakes: "Menaruh data sensitif (seperti password atau API key) di public property.",
                quiz: [
                    { q: "Default akses modifier di JS?", options: ["Public", "Private", "Protected", "Package"], ans: 0, explanation: "Secara default semuanya public." },
                    { q: "Bagaimana cara ubah nilai public property?", options: ["Harus via method", "obj.prop = newVal", "obj.setProp(newVal)", "Tidak bisa diubah"], ans: 1, explanation: "Bisa di-assign langsung via dot notation." },
                    { q: "Keuntungan public property?", options: ["Aman", "Mudah diakses dan ringkas", "Sulit di debug", "Wajib ada"], ans: 1, explanation: "Sangat mudah diakses tanpa boilerplate setter/getter." }
                ],
                challenges: {
                    beginner: "Buat class dengan public property 'nama'.",
                    intermediate: "Ubah property nama dari luar class menjadi nama baru.",
                    advanced: "Buat property langsung di level class (class fields) tanpa constructor."
                }
            },
            {
                id: "p3-6",
                title: "6. Private Property",
                desc: "Properti tersembunyi.",
                explanation: "Private property tidak bisa diakses langsung dari luar class. Di JS modern, kita gunakan simbol '#' di awal nama variabel.",
                illustration: "<div class='diagram-box'>🔒 Terkunci.<br>Hanya bisa diakses dari dalam class.</div>",
                syntax: "class A { #rahasia = 123; }",
                code: "class AkunBank {\n  #saldo;\n  constructor(saldoAwal) {\n    this.#saldo = saldoAwal;\n  }\n  cekSaldo() {\n    return this.#saldo;\n  }\n}\nconst akun = new AkunBank(1000);\nconsole.log(akun.cekSaldo());\n// console.log(akun.#saldo); // Akan menghasilkan Error Syntax!",
                output: "1000",
                outputExplanation: "#saldo tidak bisa diakses langsung, harus melalui method public cekSaldo().",
                tips: "Selalu deklarasikan private property di tingkat class (class fields) sebelum menggunakannya di constructor.",
                mistakes: "Lupa mendeklarasikan #prop di dalam blok class sebelum menginisialisasinya di constructor.",
                quiz: [
                    { q: "Simbol untuk private property di JS modern?", options: ["_", "-", "$", "#"], ans: 3, explanation: "Gunakan awalan hashtag (#)." },
                    { q: "Konvensi LAMA untuk menandakan private (sebelum ES2022)?", options: ["Awalan hashtag (#)", "Awalan underscore (_)", "Akhiran priv", "Awalan private"], ans: 1, explanation: "Developer dulu pakai '_' sebagai kesepakatan (tapi aslinya tetap public)." },
                    { q: "Apa yang terjadi jika akses #prop dari luar class?", options: ["Undefined", "Null", "SyntaxError", "Sukses"], ans: 2, explanation: "Mesin JS langsung melemparkan SyntaxError." }
                ],
                challenges: {
                    beginner: "Buat class dengan private property #password.",
                    intermediate: "Buat public method untuk memvalidasi password.",
                    advanced: "Coba akses #password dari luar dan tangkap errornya."
                }
            },
            {
                id: "p3-7",
                title: "7. Public Method",
                desc: "Fungsi yang bisa dipanggil dari luar.",
                explanation: "Public method adalah fungsi dalam class yang bisa dieksekusi oleh siapa saja yang memiliki instance objek tersebut.",
                illustration: "<div class='diagram-box'>Tombol yang bisa ditekan oleh user.</div>",
                syntax: "namaMethod() { }",
                code: "class PemutarMusik {\n  play() {\n    console.log('Memutar lagu...');\n  }\n  stop() {\n    console.log('Berhenti.');\n  }\n}\nconst spotify = new PemutarMusik();\nspotify.play();",
                output: "Memutar lagu...",
                outputExplanation: "Method play() dapat dipanggil dengan mudah menggunakan dot notation.",
                tips: "Public methods berfungsi sebagai API dari objek Anda (cara dunia luar berinteraksi dengannya).",
                mistakes: "Membuat method terlalu panjang. Pecah menjadi fungsi-fungsi kecil.",
                quiz: [
                    { q: "Method public di JS ditulis menggunakan keyword?", options: ["public func", "function", "Tanpa keyword khusus", "public"], ans: 2, explanation: "Langsung tulis namaMethod()." },
                    { q: "Kapan sebaiknya method dibuat public?", options: ["Selalu", "Jika digunakan objek lain", "Tidak pernah", "Jika mengolah data rahasia"], ans: 1, explanation: "Ketika itu adalah aksi yang diperbolehkan untuk pihak luar." },
                    { q: "Akses method play dari objek x?", options: ["x->play()", "x::play()", "x.play()", "play(x)"], ans: 2, explanation: "Dot notation: x.play()." }
                ],
                challenges: {
                    beginner: "Buat method cetakPesan() di class.",
                    intermediate: "Buat method hitungLuas() pada class Persegi.",
                    advanced: "Panggil method cetakPesan() berulang menggunakan loop dari luar class."
                }
            },
            {
                id: "p3-8",
                title: "8. Private Method",
                desc: "Fungsi internal class.",
                explanation: "Sama seperti private property, private method hanya bisa dipanggil oleh method lain di dalam class yang sama, berguna untuk proses internal (helper). Awali dengan '#'.",
                illustration: "<div class='diagram-box'>Mesin internal di dalam pabrik yang tidak bisa disentuh pelanggan.</div>",
                syntax: "#namaMethod() { }",
                code: "class KalkulatorData {\n  #hitungKompleks(x) {\n    return x * Math.PI / 2;\n  }\n  proses(data) {\n    let hasil = this.#hitungKompleks(data);\n    console.log('Hasil proses: ' + hasil);\n  }\n}\nconst calc = new KalkulatorData();\ncalc.proses(10);\n// calc.#hitungKompleks(10); // Error!",
                output: "Hasil proses: 15.707963267948966",
                outputExplanation: "#hitungKompleks dipanggil dari dalam proses(), dan disembunyikan dari dunia luar.",
                tips: "Gunakan private method untuk logika rumit yang tidak perlu diketahui oleh pengguna class (Encapsulation).",
                mistakes: "Mencoba mem-passing private method sebagai callback ke fungsi di luar class tanpa binding yang tepat.",
                quiz: [
                    { q: "Awalan private method?", options: ["-", "_", "private", "#"], ans: 3, explanation: "# menandakan member tersebut private." },
                    { q: "Siapa yang bisa memanggil private method?", options: ["Siapa saja", "Class turunannya", "Hanya method di dalam class yang sama", "Global scope"], ans: 2, explanation: "Hanya method di class tersebut (Lexical scoping)." },
                    { q: "Tujuan utama private method?", options: ["Kecepatan", "Menyembunyikan detail implementasi (Encapsulation)", "Mencegah error", "Syntax lebih pendek"], ans: 1, explanation: "Encapsulation, menyembunyikan proses internal." }
                ],
                challenges: {
                    beginner: "Buat private method #formatTeks().",
                    intermediate: "Buat public method yang menggunakan #formatTeks().",
                    advanced: "Buktikan tidak bisa mengakses #formatTeks() dari luar."
                }
            },
            {
                id: "p3-9",
                title: "9. Inheritance",
                desc: "Pewarisan sifat ke class anak.",
                explanation: "Inheritance memungkinkan sebuah class (Child) mewarisi property dan method dari class lain (Parent). Gunakan keyword 'extends' dan 'super()'.",
                illustration: "<div class='diagram-box'>Hewan (Parent)<br>👇<br>Burung (Child) mewarisi fitur Hewan</div>",
                syntax: "class Anak extends Induk {\n  constructor() { super(); }\n}",
                code: "class Hewan {\n  makan() { console.log('Nyam..'); }\n}\nclass Kucing extends Hewan {\n  suara() { console.log('Meong'); }\n}\nconst oyen = new Kucing();\noyen.makan(); // Dari parent\noyen.suara(); // Dari child",
                output: "Nyam..\nMeong",
                outputExplanation: "Kucing mewarisi method makan() dari class Hewan.",
                tips: "Jika Anda membuat constructor di class Child, Anda WAJIB memanggil super() sebelum menggunakan 'this'.",
                mistakes: "Lupa memanggil super() saat ada constructor di class anak, yang menyebabkan ReferenceError.",
                quiz: [
                    { q: "Keyword untuk mewarisi class?", options: ["inherit", "extends", "implements", "super"], ans: 1, explanation: "'extends' digunakan untuk pewarisan." },
                    { q: "Fungsi untuk memanggil constructor dari class parent?", options: ["parent()", "base()", "super()", "init()"], ans: 2, explanation: "super() memanggil constructor parent." },
                    { q: "Apakah child mewarisi private property (#) dari parent?", options: ["Ya", "Tidak", "Kadang", "Hanya method"], ans: 1, explanation: "Private member benar-benar private untuk class yang mendefinisikannya, tidak diwariskan." }
                ],
                challenges: {
                    beginner: "Buat class Kendaraan dan class Mobil yang extends Kendaraan.",
                    intermediate: "Gunakan super(merek) di constructor Mobil.",
                    advanced: "Override (timpa) method parent di class child."
                }
            },
            {
                id: "p3-10",
                title: "10. Prototype",
                desc: "Mekanisme pewarisan asli JS.",
                explanation: "JS aslinya bukan class-based, melainkan prototype-based. Objek mewarisi sifat langsung dari objek lain (prototype). Class ES6 hanya menyembunyikan kompleksitas prototype.",
                illustration: "<div class='diagram-box'>Objek A <br>↑ (__proto__)<br>Objek B</div>",
                syntax: "NamaConstructor.prototype.method = function(){}",
                code: "function Robot(nama) {\n  this.nama = nama;\n}\nRobot.prototype.jalan = function() {\n  console.log(this.nama + ' berjalan');\n}\nconst r1 = new Robot('Bender');\nr1.jalan();",
                output: "Bender berjalan",
                outputExplanation: "Method jalan didefinisikan sekali di prototype, sehingga semua instance Robot berbagi method yang sama untuk menghemat memori.",
                tips: "Menambahkan method langsung ke 'this.method' di constructor membuat fungsi baru untuk setiap instance. Menggunakan prototype lebih hemat memori.",
                mistakes: "Memodifikasi Array.prototype atau Object.prototype bawaan JS secara langsung (sangat berbahaya).",
                quiz: [
                    { q: "Semua objek di JS turunan dari?", options: ["Array", "Object.prototype", "Class", "Function"], ans: 1, explanation: "Puncak rantai prototype adalah Object.prototype." },
                    { q: "Manfaat utama prototype vs this.method()?", options: ["Mudah dibaca", "Menghemat memori (1 copy untuk semua)", "Lebih aman", "Hanya bisa di ES5"], ans: 1, explanation: "Fungsi di prototype hanya dibuat 1 kali di memori." },
                    { q: "Properti tersembunyi yang menunjuk ke prototype adalah?", options: ["__proto__", "_prototype", "proto()", "super"], ans: 0, explanation: "Dikenal dengan dunder proto (__proto__)." }
                ],
                challenges: {
                    beginner: "Tambah method salam() ke Array.prototype (hanya untuk latihan lokal).",
                    intermediate: "Panggil method tersebut di array manapun.",
                    advanced: "Amati proto chain objek kosong {} di console."
                }
            }
        ]
    }
];

const caseStudyData = {
    title: "Portofolio Interaktif (Live Simulation)",
    desc: "Simulasi penerapan event, DOM, dan random UI dalam pembuatan portofolio.",
    content: `
        <h3>Materi Case Study (Pertemuan 4)</h3>
        <p>Dalam pertemuan ini, kita belajar implementasi nyata JavaScript di sebuah website portofolio interaktif.</p>
        <ul>
            <li><b>DOM Manipulation:</b> Mengambil elemen dan mengubah tampilannya (Warna Background).</li>
            <li><b>Math.random():</b> Menghasilkan kode hex warna acak.</li>
            <li><b>Event Handling:</b> Menambahkan event onclick, interaksi tombol, toggle Dark Mode.</li>
            <li><b>Interval & Date:</b> Membuat jam realtime, menghitung visitor.</li>
        </ul>
        <br>
        <div class="sim-container" id="portofolio-sim" style="background-color: #2c3e50;">
            <div class="sim-overlay">
                <div class="sim-time" id="sim-time">00:00:00</div>
                <div class="sim-greeting" id="sim-greeting">Selamat Datang!</div>
                <p>Website Portofolio Interaktif</p>
                
                <div class="sim-controls">
                    <button class="btn btn-secondary" style="background:#fff; color:#000;" onclick="randomBg()">Ganti Warna BG</button>
                    <button class="btn btn-secondary" style="background:#fff; color:#000;" onclick="toggleDarkSim()">Dark Mode</button>
                    <button class="btn btn-primary" onclick="alertWelcome()">Welcome Msg</button>
                </div>
            </div>
            <div class="sim-visitor">Visitor: <span id="visitor-count">142</span></div>
            <div class="sim-scroll-top" onclick="alert('Scrolling to top...')"><i data-lucide="arrow-up" style="color:white"></i></div>
        </div>
        <br>
        <h3>Kuis Portofolio</h3>
        <div id="cs-quiz-container"></div>
        <button class="btn btn-primary" id="btn-cs-quiz">Kirim Kuis Case Study</button>
        <div id="cs-quiz-score" style="margin-top:10px; font-weight:bold;"></div>
    `,
    quiz: [
        { q: "Untuk menghasilkan angka acak di JS, fungsi apa yang digunakan?", options: ["Math.rand()", "Math.random()", "Random()", "Math.floor()"], ans: 1, explanation: "Math.random() menghasilkan float 0-1." },
        { q: "Cara mengubah warna background body lewat JS?", options: ["document.body.style.backgroundColor", "document.bgColor", "window.background", "body.color"], ans: 0, explanation: "Akses objek style pada elemen body." },
        { q: "Event yang berjalan ketika halaman pertama kali selesai di-load?", options: ["onchange", "onclick", "window.onload", "body.start"], ans: 2, explanation: "window.onload menuggu semua resource selesai." },
        { q: "Membuat jam realtime menggunakan interval waktu?", options: ["setTimeout()", "setInterval()", "setTimer()", "Clock()"], ans: 1, explanation: "setInterval() mengeksekusi kode berulang secara periodik." },
        { q: "Cara menampilkan popup notifikasi Welcome Message bawaan browser?", options: ["console.log()", "confirm()", "prompt()", "alert()"], ans: 3, explanation: "alert() menampilkan kotak peringatan." },
        { q: "Bagaimana cara mendapatkan elemen ID 'judul'?", options: ["document.querySelector('#judul')", "document.getElementById('judul')", "Keduanya benar", "Keduanya salah"], ans: 2, explanation: "Keduanya bisa digunakan untuk memilih elemen ID." },
        { q: "Kode warna Hexadesimal maksimal berapa karakter (setelah #)?", options: ["4", "6", "8", "10"], ans: 1, explanation: "Umumnya 6 karakter (RRGGBB)." },
        { q: "Konversi angka ke string basis 16 (hex) menggunakan?", options: ["toString(16)", "toHex()", "String(16)", "parseHex()"], ans: 0, explanation: "toString(16) merubah integer jadi string hex." },
        { q: "Untuk menambah kelas 'dark' ke body, kita gunakan?", options: ["body.classList.add('dark')", "body.class = 'dark'", "body.addClass('dark')", "body.append('dark')"], ans: 0, explanation: "Gunakan classList.add()." },
        { q: "Fungsi untuk scroll instan ke atas?", options: ["window.scrollTo(0,0)", "scroll.top()", "document.top()", "page.up()"], ans: 0, explanation: "scrollTo menerima x dan y koordinat." }
    ]
};

// Application Logic
document.addEventListener('DOMContentLoaded', () => {
    const sidebarNav = document.getElementById('sidebar-nav');
    const contentArea = document.getElementById('content-area');
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const navTitle = document.getElementById('navbar-title');
    const overallProgress = document.getElementById('overall-progress-bar');
    const overallProgressText = document.getElementById('overall-progress-text');

    let userProgress = JSON.parse(localStorage.getItem('jsMasteryP34')) || {};

    function updateProgress() {
        let totalTopics = courseData[0].topics.length + 1; // OOP + 1 Case Study
        let completed = 0;
        courseData[0].topics.forEach(t => { if(userProgress[t.id]) completed++; });
        if(userProgress['case-study']) completed++;
        
        const percent = Math.round((completed / totalTopics) * 100);
        overallProgress.style.width = percent + '%';
        overallProgressText.innerText = percent + '%';
        localStorage.setItem('jsMasteryP34', JSON.stringify(userProgress));
    }

    function buildSidebar() {
        sidebarNav.innerHTML = '';
        courseData.forEach(meeting => {
            const groupTitle = document.createElement('div');
            groupTitle.className = 'nav-group-title';
            groupTitle.innerText = meeting.meeting;
            sidebarNav.appendChild(groupTitle);

            meeting.topics.forEach(topic => {
                const item = document.createElement('div');
                item.className = 'nav-item';
                item.dataset.id = topic.id;
                
                const icon = document.createElement('i');
                icon.setAttribute('data-lucide', userProgress[topic.id] ? 'check-circle' : 'circle');
                if(userProgress[topic.id]) icon.style.color = 'var(--success)';
                
                const span = document.createElement('span');
                span.innerText = topic.title;

                item.appendChild(icon);
                item.appendChild(span);
                
                item.addEventListener('click', () => {
                    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                    item.classList.add('active');
                    loadTopic(topic);
                    if(window.innerWidth <= 768) sidebar.classList.remove('open');
                });
                
                sidebarNav.appendChild(item);
            });
        });

        // Case Study Link
        const csTitle = document.createElement('div');
        csTitle.className = 'nav-group-title';
        csTitle.innerText = "Pertemuan 4";
        sidebarNav.appendChild(csTitle);

        const csItem = document.createElement('div');
        csItem.className = 'nav-item';
        csItem.dataset.id = 'case-study';
        
        const csIcon = document.createElement('i');
        csIcon.setAttribute('data-lucide', userProgress['case-study'] ? 'check-circle' : 'circle');
        if(userProgress['case-study']) csIcon.style.color = 'var(--success)';
        
        const csSpan = document.createElement('span');
        csSpan.innerText = "Portofolio Case Study";
        
        csItem.appendChild(csIcon);
        csItem.appendChild(csSpan);
        
        csItem.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            csItem.classList.add('active');
            loadCaseStudy();
            if(window.innerWidth <= 768) sidebar.classList.remove('open');
        });
        sidebarNav.appendChild(csItem);

        if (window.lucide) { lucide.createIcons(); }
    }

    function loadTopic(topic) {
        navTitle.innerText = "OOP : " + topic.title;
        const safeCode = topic.code.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$');
        
        contentArea.innerHTML = `
            <div class="content-container">
                <div class="topic-header">
                    <h1 class="topic-title">${topic.title}</h1>
                    <p class="topic-desc">${topic.desc}</p>
                </div>
                <div class="card">
                    <div class="card-title"><i data-lucide="book-open"></i> Konsep</div>
                    <p>${topic.explanation}</p>
                    ${topic.illustration}
                </div>
                <div class="card">
                    <div class="card-title"><i data-lucide="code"></i> Implementasi</div>
                    <p><b>Sintaks:</b></p>
                    <pre><code class="language-javascript">${topic.syntax}</code></pre>
                    <div class="code-header">
                        <span>contoh.js</span>
                        <button class="copy-btn" onclick="copyCode(this, \`${safeCode}\`)"><i data-lucide="copy"></i> Copy</button>
                    </div>
                    <pre><code class="language-javascript">${topic.code}</code></pre>
                    <div class="alert alert-tip">
                        <i data-lucide="info"></i>
                        <div><b>Output:</b><br><pre style="margin-bottom:0; background:transparent; border:none; padding:0;">${topic.output}</pre><small>${topic.outputExplanation}</small></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-title"><i data-lucide="alert-triangle"></i> Insight</div>
                    <div class="alert alert-tip"><i data-lucide="check-circle"></i> <span><b>Best Practice:</b> ${topic.tips}</span></div>
                    <div class="alert alert-mistake"><i data-lucide="x-circle"></i> <span><b>Kesalahan:</b> ${topic.mistakes}</span></div>
                </div>
                <div class="card playground-container">
                    <div class="card-title"><i data-lucide="play-circle"></i> Playground</div>
                    <div class="editor-wrapper">
                        <textarea id="pg-editor" class="playground-editor" spellcheck="false">${topic.code}</textarea>
                    </div>
                    <div class="playground-actions">
                        <button class="btn btn-primary" onclick="runPlayground()"><i data-lucide="play"></i> Run Code</button>
                        <button class="btn btn-secondary" onclick="document.getElementById('pg-editor').value = \`${safeCode}\`; document.getElementById('pg-console').innerText = 'Ready...';"><i data-lucide="rotate-ccw"></i> Reset</button>
                    </div>
                    <div id="pg-console" class="console-output">Ready...</div>
                </div>
                <div class="card">
                    <div class="card-title"><i data-lucide="target"></i> Tantangan</div>
                    <div class="challenge-tabs">
                        <button class="challenge-tab active" data-level="beginner">Beginner</button>
                        <button class="challenge-tab" data-level="intermediate">Intermediate</button>
                        <button class="challenge-tab" data-level="advanced">Advanced</button>
                    </div>
                    <div class="challenge-content active" id="chall-beginner"><p>${topic.challenges.beginner}</p></div>
                    <div class="challenge-content" id="chall-intermediate"><p>${topic.challenges.intermediate}</p></div>
                    <div class="challenge-content" id="chall-advanced"><p>${topic.challenges.advanced}</p></div>
                </div>
                <div class="card">
                    <div class="card-title"><i data-lucide="help-circle"></i> Quiz</div>
                    <div id="quiz-container"></div>
                    <button class="btn btn-primary" id="btn-submit-quiz" style="margin-top:16px">Cek Jawaban</button>
                    <div id="quiz-score" style="margin-top:10px; font-weight:bold;"></div>
                </div>
                <div style="text-align:right; margin-bottom:40px;">
                    <button class="btn btn-primary" id="btn-complete-topic"><i data-lucide="check"></i> Tandai Selesai</button>
                </div>
            </div>
        `;
        
        postRender(topic.id, topic.quiz, false);
    }

    function loadCaseStudy() {
        navTitle.innerText = "Case Study : Portofolio";
        contentArea.innerHTML = `
            <div class="content-container">
                <div class="topic-header">
                    <h1 class="topic-title">${caseStudyData.title}</h1>
                    <p class="topic-desc">${caseStudyData.desc}</p>
                </div>
                <div class="card">
                    ${caseStudyData.content}
                </div>
                <div style="text-align:right; margin-bottom:40px;">
                    <button class="btn btn-primary" id="btn-complete-topic"><i data-lucide="check"></i> Tandai Selesai</button>
                </div>
            </div>
        `;

        // Start Live Simulation Features
        initSimulation();
        postRender('case-study', caseStudyData.quiz, true);
    }

    function postRender(topicId, quizData, isCaseStudy) {
        if (window.hljs) {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        }
        if (window.lucide) { lucide.createIcons(); }

        // Challenges
        document.querySelectorAll('.challenge-tab').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.challenge-tab').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.challenge-content').forEach(c => c.classList.remove('active'));
                const level = e.target.getAttribute('data-level');
                e.target.classList.add('active');
                document.getElementById('chall-' + level).classList.add('active');
            });
        });

        // Quiz
        const qContainerId = isCaseStudy ? 'cs-quiz-container' : 'quiz-container';
        const qSubmitId = isCaseStudy ? 'btn-cs-quiz' : 'btn-submit-quiz';
        const qScoreId = isCaseStudy ? 'cs-quiz-score' : 'quiz-score';
        
        const container = document.getElementById(qContainerId);
        if(container) {
            let html = '';
            quizData.forEach((q, idx) => {
                html += `<div class="quiz-question" data-idx="${idx}">
                    <p>${idx + 1}. ${q.q}</p>
                    <div class="quiz-options">
                        ${q.options.map((opt, optIdx) => `<div class="quiz-option" data-opt="${optIdx}">${opt}</div>`).join('')}
                    </div>
                    <div class="quiz-feedback" id="feedback-${idx}"></div>
                </div>`;
            });
            container.innerHTML = html;

            container.querySelectorAll('.quiz-option').forEach(opt => {
                opt.addEventListener('click', (e) => {
                    const parent = e.target.closest('.quiz-options');
                    parent.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                    e.target.closest('.quiz-option').classList.add('selected');
                });
            });

            document.getElementById(qSubmitId).addEventListener('click', () => {
                let score = 0;
                quizData.forEach((q, idx) => {
                    const qBlock = container.querySelector(`.quiz-question[data-idx="${idx}"]`);
                    const selected = qBlock.querySelector('.quiz-option.selected');
                    const feedback = document.getElementById(`feedback-${idx}`);
                    
                    qBlock.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('correct', 'wrong'));
                    
                    if (selected) {
                        const selectedIdx = parseInt(selected.getAttribute('data-opt'));
                        if (selectedIdx === q.ans) {
                            score++;
                            selected.classList.add('correct');
                        } else {
                            selected.classList.add('wrong');
                            qBlock.querySelector(`.quiz-option[data-opt="${q.ans}"]`).classList.add('correct');
                        }
                    } else {
                        qBlock.querySelector(`.quiz-option[data-opt="${q.ans}"]`).classList.add('correct');
                    }
                    
                    feedback.innerHTML = `<b>Penjelasan:</b> ${q.explanation}`;
                    feedback.classList.add('show');
                    if(selected && parseInt(selected.getAttribute('data-opt')) === q.ans) {
                        feedback.style.color = 'var(--success)';
                    } else {
                        feedback.style.color = 'var(--danger)';
                    }
                });
                document.getElementById(qScoreId).innerHTML = `Skor Anda: ${score} / ${quizData.length}`;
                document.getElementById(qSubmitId).disabled = true;
            });
        }

        // Complete Topic
        const btnComplete = document.getElementById('btn-complete-topic');
        if(userProgress[topicId]) {
            btnComplete.innerHTML = '<i data-lucide="check-circle"></i> Selesai';
            btnComplete.disabled = true;
            btnComplete.style.backgroundColor = 'var(--success)';
        }
        btnComplete.addEventListener('click', () => {
            userProgress[topicId] = true;
            updateProgress();
            buildSidebar();
            btnComplete.innerHTML = '<i data-lucide="check-circle"></i> Selesai';
            btnComplete.disabled = true;
            btnComplete.style.backgroundColor = 'var(--success)';
            if (window.lucide) { lucide.createIcons(); }
        });
    }

    // --- Simulation Logic ---
    let simInterval;
    function initSimulation() {
        if(simInterval) clearInterval(simInterval);
        
        const timeEl = document.getElementById('sim-time');
        const greetingEl = document.getElementById('sim-greeting');
        const visitorEl = document.getElementById('visitor-count');
        
        let visitors = 142;
        
        simInterval = setInterval(() => {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            if(timeEl) timeEl.innerText = `${h}:${m}:${s}`;
            
            if(greetingEl) {
                if(now.getHours() < 12) greetingEl.innerText = "Selamat Pagi!";
                else if(now.getHours() < 18) greetingEl.innerText = "Selamat Siang!";
                else greetingEl.innerText = "Selamat Malam!";
            }
            
            if(Math.random() > 0.8 && visitorEl) {
                visitors++;
                visitorEl.innerText = visitors;
            }
        }, 1000);

        // Export for buttons
        window.randomBg = function() {
            const hex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            const sim = document.getElementById('portofolio-sim');
            if(sim) sim.style.backgroundColor = hex;
        };
        window.toggleDarkSim = function() {
            const sim = document.getElementById('portofolio-sim');
            if(sim) {
                if(sim.style.backgroundColor === 'rgb(255, 255, 255)' || sim.style.backgroundColor === 'white') {
                    sim.style.backgroundColor = '#121212';
                    sim.style.color = '#fff';
                } else {
                    sim.style.backgroundColor = '#ffffff';
                    sim.style.color = '#000';
                }
            }
        };
        window.alertWelcome = function() {
            alert("Halo! Ini adalah simulasi pop up welcome message dari Portofolio Anda.");
        };
    }

    // Global Functions
    window.runPlayground = function() {
        const code = document.getElementById('pg-editor').value;
        const consoleEl = document.getElementById('pg-console');
        consoleEl.innerText = '';
        
        const originalLog = console.log;
        const originalError = console.error;
        let logs = [];
        
        console.log = function(...args) {
            logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        };
        console.error = function(...args) {
            logs.push("ERROR: " + args.join(' '));
        };

        try {
            // eslint-disable-next-line no-new-func
            const func = new Function(code);
            func();
            if(logs.length === 0) {
                consoleEl.innerText = "// Eksekusi berhasil, tidak ada output.";
            } else {
                consoleEl.innerText = logs.join('\\n');
            }
        } catch (err) {
            consoleEl.innerText = "Error: " + err.message;
            consoleEl.style.color = "var(--danger)";
        } finally {
            console.log = originalLog;
            console.error = originalError;
            if(!consoleEl.innerText.startsWith("Error")) {
                consoleEl.style.color = "#0f0";
            }
        }
    };

    window.copyCode = function(btnEl, code) {
        navigator.clipboard.writeText(code).then(() => {
            const originalHTML = btnEl.innerHTML;
            btnEl.innerHTML = '<i data-lucide="check"></i> Copied!';
            if (window.lucide) { lucide.createIcons(); }
            setTimeout(() => {
                btnEl.innerHTML = originalHTML;
                if (window.lucide) { lucide.createIcons(); }
            }, 2000);
        });
    };

    // Theme Toggle (App wide)
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        if (isDark) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeToggle.innerHTML = '<i data-lucide="sun"></i>';
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i data-lucide="moon"></i>';
        }
        if (window.lucide) { lucide.createIcons(); }
    });

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    buildSidebar();
    updateProgress();
});
