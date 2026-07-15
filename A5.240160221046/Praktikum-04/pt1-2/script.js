const courseData = [
    {
        meeting: "Pertemuan 1",
        topics: [
            {
                id: "p1-1",
                title: "1. Sintaks JavaScript",
                desc: "Aturan dasar penulisan kode JavaScript.",
                explanation: "JavaScript memiliki sintaks atau aturan penulisan yang perlu diikuti agar program dapat berjalan dengan benar. Setiap pernyataan (statement) sebaiknya diakhiri dengan titik koma (;), meskipun tidak selalu wajib. JavaScript juga bersifat case-sensitive, artinya huruf besar dan kecil dianggap berbeda.",
                illustration: "<div style='background:#282c34;padding:20px;border-radius:8px;color:#abb2bf;font-family:monospace;'><span>console.log</span>(<span>'Halo'</span>); <span style='color:#5c6370'>// Titik koma</span><br><span>let</span> nama = <span>'Budi'</span>; <span style='color:#5c6370'>// 'nama' berbeda dengan 'Nama'</span></div>",
                syntax: "statement;\nstatement;",
                code: "console.log('Hello World!');\nlet angka = 10;\nconsole.log(angka);",
                output: "Hello World!\n10",
                outputExplanation: "Fungsi console.log() akan mencetak nilai yang diberikan ke dalam console browser.",
                tips: "Selalu biasakan menggunakan titik koma (;) di akhir statement untuk menghindari bug yang sulit dilacak akibat Automatic Semicolon Insertion (ASI).",
                mistakes: "Lupa bahwa JavaScript case-sensitive, misal mendeklarasikan `let Nilai = 5;` tapi memanggil `console.log(nilai);`.",
                quiz: [
                    { q: "Apakah JavaScript bersifat case-sensitive?", options: ["Ya", "Tidak", "Hanya untuk variabel", "Hanya untuk fungsi"], ans: 0, explanation: "JavaScript adalah bahasa yang case-sensitive di semua aspek penamaannya." },
                    { q: "Karakter apa yang umumnya digunakan untuk mengakhiri statement di JS?", options: [".", ",", ";", ":"], ans: 2, explanation: "Titik koma (;) digunakan untuk mengakhiri statement." },
                    { q: "Manakah penulisan komentar satu baris yang benar?", options: ["<!-- komentar -->", "// komentar", "/* komentar */", "# komentar"], ans: 1, explanation: "// digunakan untuk komentar satu baris." },
                    { q: "Fungsi bawaan untuk mencetak ke konsol adalah?", options: ["print()", "echo()", "console.log()", "write()"], ans: 2, explanation: "console.log() adalah fungsi standar untuk output konsol." },
                    { q: "Bagaimana JS memperlakukan var `nama` dan `Nama`?", options: ["Sama saja", "Berbeda", "Error", "Akan di-merge"], ans: 1, explanation: "Karena case-sensitive, keduanya dianggap sebagai variabel yang berbeda." }
                ],
                challenges: {
                    beginner: "Cetak 'Belajar JavaScript' ke dalam console.",
                    intermediate: "Buat tiga statement cetak dengan nilai angka yang berbeda dalam satu baris, dipisahkan titik koma.",
                    advanced: "Tulis statement console.log yang diakhiri tanpa titik koma, dan satu dengan titik koma, lihat apakah keduanya berjalan."
                }
            },
            {
                id: "p1-2",
                title: "2. Variable",
                desc: "Tempat menyimpan data atau nilai.",
                explanation: "Variabel digunakan untuk menyimpan informasi yang akan digunakan dalam program. Di JavaScript modern, kita menggunakan let dan const (dan var di masa lalu). const digunakan untuk nilai yang tidak akan berubah, sedangkan let untuk nilai yang bisa diubah (reassigned).",
                illustration: "<div style='text-align:center;font-size:3rem'>📦</div><p style='text-align:center;margin-top:10px'>Variabel seperti kotak (box) dengan label (nama) yang menyimpan barang (nilai).</p>",
                syntax: "let namaVariabel = nilai;\nconst NAMA_KONSTANTA = nilai;",
                code: "let umur = 20;\numur = 21; // Bisa diubah\n\nconst pi = 3.14;\n// pi = 3.15; // Akan menghasilkan error!\n\nconsole.log(umur);\nconsole.log(pi);",
                output: "21\n3.14",
                outputExplanation: "Variabel 'umur' berhasil diubah nilainya menjadi 21 karena dideklarasikan dengan 'let'.",
                tips: "Gunakan 'const' secara default. Hanya gunakan 'let' jika Anda yakin nilai variabel tersebut akan berubah di kemudian hari.",
                mistakes: "Mencoba mengubah (reassign) nilai dari variabel yang dideklarasikan menggunakan 'const'.",
                quiz: [
                    { q: "Kata kunci mana yang digunakan untuk variabel yang tidak bisa diubah nilainya?", options: ["let", "var", "const", "static"], ans: 2, explanation: "const digunakan untuk konstanta." },
                    { q: "Apa output jika Anda merubah nilai const?", options: ["Berhasil berubah", "Warning", "Error (TypeError)", "Undefined"], ans: 2, explanation: "Reassignment pada const menyebabkan TypeError." },
                    { q: "Manakah penamaan variabel yang valid?", options: ["1nama", "nama-depan", "nama_depan", "let"], ans: 2, explanation: "Variabel tidak boleh diawali angka, tidak boleh ada spasi/dash, dan tidak boleh keyword bawaan." },
                    { q: "Gaya penulisan variabel standar di JS adalah?", options: ["snake_case", "PascalCase", "camelCase", "kebab-case"], ans: 2, explanation: "camelCase sangat disarankan dalam komunitas JS." },
                    { q: "Apa nilai awal variabel `let x;` yang belum diinisialisasi?", options: ["null", "0", "undefined", "'' (string kosong)"], ans: 2, explanation: "Variabel tanpa nilai otomatis berisi undefined." }
                ],
                challenges: {
                    beginner: "Buat variabel `nama` menggunakan `let` dan isi dengan namamu, lalu cetak.",
                    intermediate: "Buat variabel `const tahunLahir` dan `let tahunSekarang`, hitung umur dan cetak.",
                    advanced: "Coba deklarasikan ulang variabel let dengan nama yang sama di scope yang sama. Tangkap pesan errornya di console."
                }
            }
        ]
    }
];

// Kita akan menambah P1 materi 3-14 dan P2 materi 1-8 setelah dasar selesai
