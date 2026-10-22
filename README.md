# EcoBin Company Profile

Website company profile EcoBin: satu halaman statis (HTML, CSS, JavaScript murni) dengan data contoh.

> EcoBin adalah konsep startup untuk tugas mata kuliah E-Bisnis. Nama mitra dan data yang ditampilkan merupakan contoh.

## Menjalankan

Buka `index.html` langsung di browser, atau jalankan server lokal apa saja dari folder ini, misalnya:

```bash
npx serve .
```

## Mengubah isi

Semua data contoh ada di `assets/js/data.js`: angka dampak, SDG, manfaat, langkah cara kerja, jenis sampah, lokasi, layanan, mitra, testimoni, FAQ, jenis kerja sama, kontak, dan media sosial. Ubah nilainya, simpan, lalu muat ulang halaman.

## Struktur

```
index.html
assets/
  css/style.css        gaya dan token warna
  js/data.js           data contoh
  js/main.js           render data dan interaksi
  fonts/               Plus Jakarta Sans (SIL Open Font License, lihat OFL.txt)
  img/logo/            logo EcoBin
  img/illustrations/   ilustrasi peta Pontianak
  img/                 favicon, apple-touch-icon, og-image
```

## Catatan

- Form "Jadi Mitra" hanya simulasi: data divalidasi lalu muncul pesan sukses, tanpa dikirim ke mana pun.
- Tombol "Masuk Aplikasi" sengaja dinonaktifkan sampai website pengguna selesai.
- Animasi otomatis mati bila pengaturan perangkat "kurangi gerakan" aktif.
