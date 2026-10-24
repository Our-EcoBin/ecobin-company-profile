/*
 * Data contoh Company Profile EcoBin.
 * Semua isi halaman yang bisa berubah ada di sini. Ubah nilainya,
 * simpan, lalu muat ulang halaman.
 */
window.ECOBIN_DATA = {
  stats: [
    { value: 12480, suffix: " kg", label: "sampah terpilah terkumpul", highlight: true },
    { value: 3250, suffix: "", label: "pengguna terdaftar" },
    { value: 13, suffix: "", label: "titik Smart Waste Station di Pontianak dan Kubu Raya (9 sudah aktif)" },
    { value: 1120, suffix: "", label: "voucher ditukarkan" }
  ],

  sdgs: [
    { number: 11, title: "Kota dan Permukiman yang Berkelanjutan", text: "Titik setor sampah hadir di tempat yang sudah sering dikunjungi warga." },
    { number: 12, title: "Konsumsi dan Produksi yang Bertanggung Jawab", text: "Kemasan bekas belanja kembali ke rantai daur ulang, bukan ke TPA." },
    { number: 13, title: "Penanganan Perubahan Iklim", text: "Sampah terpilah lebih mudah diolah sehingga mengurangi timbunan dan emisi." }
  ],

  benefits: {
    pengguna: [
      { title: "Setor sambil belanja", text: "Stasiun ada di gerai Indomaret. Bawa sampahmu sekalian waktu belanja, tanpa perlu ke tempat khusus." },
      { title: "Dicek otomatis", text: "Kamera dan sensor langsung memeriksa sampahmu. Tidak perlu menunggu petugas atau jam buka tertentu." },
      { title: "Dapat Eco Point", text: "Setiap setoran yang diterima menambah Eco Point. Kumpulkan, lalu tukarkan dengan voucher belanja." },
      { title: "Riwayat tercatat", text: "Jenis, berat, dan poin dari setiap setoran tersimpan di akunmu dan bisa dilihat kapan saja." }
    ],
    mitra: [
      { title: "Mitra Ritel", text: "Pelanggan punya alasan baru untuk datang ke gerai Anda, dan gerai Anda dikenal peduli lingkungan." },
      { title: "Mitra Pengolah", text: "Anda menerima sampah yang sudah terpilah per kategori, lengkap dengan data jumlah dan jenisnya." },
      { title: "Brand dan Sponsor", text: "Program CSR Anda punya hasil yang terukur: berapa kilogram sampah terkumpul dan berapa warga yang terlibat." }
    ]
  },

  steps: [
    { title: "Pilah", text: "Pisahkan sampahmu menjadi organik, anorganik, dan residu dari rumah." },
    { title: "Scan QR", text: "Pindai QR membership EcoBin di layar stasiun." },
    { title: "Masukkan", text: "Masukkan sampah ke lubang sesuai kategorinya." },
    { title: "Dicek dan ditimbang", text: "Kamera AI mengenali jenisnya, load cell mengukur beratnya." },
    { title: "Dapat Eco Point", text: "Poin masuk ke akunmu sesuai jenis dan berat sampah." },
    { title: "Tukar voucher", text: "Tukarkan Eco Point dengan voucher belanja Indomaret." }
  ],

  behindTheScenes: [
    { title: "Kapasitas dipantau", text: "Sensor mengirim tingkat isi tiap unit ke dashboard pengelola." },
    { title: "Diangkut", text: "Unit yang hampir penuh masuk jadwal angkut armada EcoBin." },
    { title: "Diolah mitra", text: "Sampah diserahkan ke mitra pengolah sesuai kategorinya." }
  ],

  wasteTypes: [
    {
      id: "organik",
      name: "Organik",
      examples: ["Sisa buah dan sayur", "Daun kering", "Ampas kopi dan teh"],
      tip: "Tiriskan airnya dulu dan pisahkan dari kantong plastik."
    },
    {
      id: "anorganik",
      name: "Anorganik",
      examples: ["Botol plastik", "Kardus dan kertas", "Kaleng minuman"],
      tip: "Kosongkan dan bilas singkat. Kardus dilipat supaya muat."
    },
    {
      id: "residu",
      name: "Residu",
      examples: ["Tisu bekas", "Bungkus mi instan", "Sachet kopi"],
      tip: "Kumpulkan dalam satu wadah. Jangan dicampur dengan anorganik."
    }
  ],

  locations: [
    // Kota Pontianak
    { retailer: "Indomaret", name: "Indomaret Ahmad Yani", address: "Jl. Ahmad Yani, Pontianak Selatan", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Reformasi", address: "Jl. Reformasi, Pontianak Tenggara", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Prof. M. Yamin", address: "Jl. Prof. M. Yamin, Pontianak Kota", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Gajah Mada", address: "Jl. Gajah Mada, Pontianak Selatan", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Imam Bonjol", address: "Jl. Imam Bonjol, Pontianak Selatan", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Kom. Yos Sudarso", address: "Jl. Kom. Yos Sudarso, Pontianak Barat", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Khatulistiwa", address: "Jl. Khatulistiwa, Pontianak Utara", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Tanjung Raya 2", address: "Jl. Tanjung Raya 2, Pontianak Timur", status: "segera" },
    { retailer: "Indomaret", name: "Indomaret Parit Haji Husin 2", address: "Jl. Parit Haji Husin 2, Pontianak Tenggara", status: "segera" },
    // Kabupaten Kubu Raya
    { retailer: "Indomaret", name: "Indomaret Sungai Raya Dalam", address: "Jl. Sungai Raya Dalam, Sungai Raya, Kubu Raya", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Adisucipto", address: "Jl. Adisucipto, Sungai Raya, Kubu Raya", status: "aktif" },
    { retailer: "Indomaret", name: "Indomaret Trans Kalimantan", address: "Jl. Trans Kalimantan, Sungai Ambawang, Kubu Raya", status: "segera" },
    { retailer: "Indomaret", name: "Indomaret Sungai Kakap", address: "Jl. Raya Sungai Kakap, Sungai Kakap, Kubu Raya", status: "segera" }
  ],

  services: [
    { id: "station", title: "Smart Waste Station", text: "Unit setor sampah dengan kamera AI, sensor, dan load cell. Dirakit dan dirawat langsung oleh tim EcoBin." },
    { id: "app", title: "Aplikasi Member dan Eco Point", text: "QR membership, saldo Eco Point, riwayat setoran, dan penukaran voucher dalam satu aplikasi.", link: { label: "Buka aplikasi", href: "https://ecobin-app-self.vercel.app" } },
    { id: "dashboard", title: "Dashboard Pengelola", text: "Pantau isi tiap unit, volume per jenis sampah, dan jadwal angkut dari satu layar.", link: { label: "Masuk sebagai pengelola", href: "https://ecobin-app-self.vercel.app/masuk" } },
    { id: "csr", title: "Kemitraan CSR dan Sponsorship", text: "Program lingkungan bersama brand Anda, dengan laporan dampak dari data setoran nyata.", link: { label: "Ajukan kemitraan", href: "#jadi-mitra" } }
  ],

  partners: [
    { name: "Indomaret", role: "Lokasi dan reward" },
    { name: "Bank Sampah Mitra", role: "Pengolah sampah" },
    { name: "Mitra Daur Ulang", role: "Pengolah sampah" }
  ],

  testimonials: [
    { name: "Rina A.", role: "Mahasiswa", quote: "Botol bekas minum di kos sekarang aku kumpulkan. Seminggu sekali setor di Indomaret dekat kampus, poinnya lumayan buat beli jajan." },
    { name: "Bu Sari", role: "Ibu rumah tangga", quote: "Awalnya sampah saya sering ditolak karena masih campur. Sekarang anak-anak ikut memilah di rumah, jadi kebiasaan." },
    { name: "Pak Hendra", role: "Pengelola bank sampah", quote: "Sampah yang datang dari EcoBin sudah terpilah dan ada catatan beratnya. Kami tidak perlu memilah ulang dari awal." }
  ],

  faqs: [
    { q: "Bagaimana cara menjadi member EcoBin?", a: "Daftar lewat aplikasi EcoBin, lalu kamu langsung mendapat QR membership. QR inilah yang kamu pindai di stasiun sebelum setor sampah." },
    { q: "Sampah apa saja yang diterima?", a: "Saat ini stasiun menerima sampah organik, anorganik, dan residu yang sudah dipilah. Daftar kategori bisa bertambah sesuai kemampuan stasiun dan kebutuhan mitra pengolah." },
    { q: "Kenapa sampah saya ditolak?", a: "Stasiun menolak sampah yang tercampur atau tidak sesuai dengan lubang kategorinya, lalu mengeluarkannya kembali. Pisahkan ulang sampahmu dan masukkan ke lubang yang sesuai." },
    { q: "Bagaimana Eco Point dihitung?", a: "Eco Point dihitung dari jenis dan berat sampah yang diterima. Nilai poin per kategori ditetapkan oleh pengelola EcoBin bersama mitra dan bisa berubah. Setoran yang ditolak tidak menghasilkan poin." },
    { q: "Bagaimana cara menukar Eco Point?", a: "Buka menu Reward di aplikasi, pilih voucher Indomaret yang poinnya cukup, lalu tunjukkan kode voucher di kasir." },
    { q: "Bagaimana cara menjadi mitra EcoBin?", a: "Isi formulir kemitraan di bagian bawah halaman ini. Tim kami akan menghubungi Anda untuk membahas bentuk kerja sama." }
  ],

  partnershipTypes: [
    "Lokasi penempatan stasiun",
    "Penyedia reward",
    "Pengolah sampah",
    "CSR atau sponsorship",
    "Lainnya"
  ],

  contact: {
    email: "halo@ecobin.example",
    whatsapp: "0812-0000-0000",
    address: "Jl. Ahmad Yani, Pontianak, Kalimantan Barat"
  },

  socials: [
    { id: "instagram", label: "Instagram", href: "#" },
    { id: "tiktok", label: "TikTok", href: "#" },
    { id: "facebook", label: "Facebook", href: "#" }
  ]
};
