# Website Portofolio — Muhammad Rafid Ammanullah

Situs portofolio pribadi: profil, skill, riwayat pendidikan & kerja, contoh karya, dan kontak.

**Live:** https://rafid090.github.io/website-portofolio/

Dibuat dengan HTML, CSS, dan JavaScript biasa (tanpa framework/build step), ikon [Unicons](https://iconscout.com/unicons), slider [Swiper](https://swiperjs.com/), font Poppins. Di-hosting gratis lewat GitHub Pages dari branch `main`.

## Menjalankan di komputer sendiri

Cukup buka `index.html` di browser, atau jalankan server kecil supaya perilakunya sama dengan GitHub Pages:

```bash
python -m http.server 8000
```

lalu buka http://localhost:8000.

## Struktur

```
index.html              semua isi halaman
assets/css/style.css    tampilan (mobile-first; breakpoint 568px, 768px, 1024px di bagian akhir)
assets/js/main.js       menu HP, accordion skill, tab kualifikasi, slider, form kontak
assets/img/             foto & gambar proyek (WebP), favicon, og-image.jpg (preview saat link dibagikan)
assets/pdf/             CV yang bisa diunduh dari tombol "Curriculum Vitae"
```

## Mengubah isi

| Yang diubah | Di mana |
|---|---|
| Deskripsi diri | `index.html`, bagian `#home` dan `#about` |
| Skill & persentase | `index.html`, bagian `#skills`. Ubah angka **dan** `style="width: ..%"` di baris bawahnya |
| Pendidikan / pengalaman kerja | `index.html`, bagian `#qualification` (setiap item berselang-seling kiri–kanan) |
| Proyek | `index.html`, bagian `#projects`. Satu `swiper-slide` = satu proyek |
| Nomor WhatsApp / email form kontak | atribut `data-whatsapp` dan `data-email` pada `<form id="contact-form">` |
| CV | ganti file di `assets/pdf/` dengan nama yang sama |

### Menambah gambar

Gambar yang ditampilkan kecil sebaiknya tidak lebih lebar dari ±1000px. Konversi ke WebP supaya ringan, misalnya dengan [Squoosh](https://squoosh.app/) atau Pillow:

```bash
python -c "from PIL import Image; im=Image.open('foto.jpg'); im.thumbnail((960,960)); im.save('foto.webp', quality=80)"
```

## Form kontak

GitHub Pages hanya menyajikan file statis, tidak ada server untuk mengirim email. Karena itu tombol **Send via WhatsApp** membuka WhatsApp, dan **Send via Email** membuka aplikasi email pengunjung. Keduanya sudah terisi nama dan pesan dari form.
