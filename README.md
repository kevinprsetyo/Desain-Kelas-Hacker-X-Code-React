# Hacker X Code Class Design - React

## Deskripsi

Proyek ini merupakan **landing page Hacker X Code Class** yang dibangun menggunakan **React** dan **Vite**.

Website ini dirancang untuk menampilkan informasi mengenai program kelas, materi pembelajaran, mentor, partner, testimoni, hingga ajakan pendaftaran (Call to Action) dengan tampilan yang modern, responsif, dan mudah digunakan.

---

## Fitur Utama

- **Layout Responsif** (Desktop & Mobile)
- **Hero Section (Home)** dengan Call to Action (CTA)
- **Halaman Harga (Pricing)**
- **Halaman Mentor & Pengalaman Mentor**
- **Halaman Client / Partner**
- **Halaman Testimoni** (Teks & Video)
- **Halaman Lokasi Kantor**
- **Halaman Tentang Kami (About Us)**
- **Navigation Bar (Navbar)**
- **Footer** yang berisi informasi kontak
- **Pengembangan cepat** menggunakan **Vite**

---

## Teknologi yang Digunakan

- React
- Vite
- HTML
- CSS
- Tailwind CSS
- Asset gambar statis (JPG, PNG, WEBP)

---

## Struktur Proyek

```bash
HackerXCode-React/
├─ mitra/                  # Logo client/partner
├─ node_modules/           # Dependencies
├─ public/                 # File publik (vite.svg, dll.)
├─ Render/                 # Entry utama React
│  ├─ App.jsx              # Root component
│  ├─ index.css            # Global styles
│  └─ main.jsx             # React DOM entry point
├─ src/
│  ├─ assets/img/          # Asset gambar (mentor, network, office, dll.)
│  ├─ komponen/            # Komponen utama
│  │  ├─ AboutUs.jsx
│  │  ├─ Biaya.jsx
│  │  ├─ Client.jsx
│  │  ├─ ExperienceMentor.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Home.jsx
│  │  ├─ Mentors.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ OfficeLocation.jsx
│  │  ├─ Service.jsx
│  │  ├─ TestimoniText.jsx
│  │  └─ TestimoniVideo.jsx
│  ├─ script/
│  │  └─ script.js         # Fungsi utilitas/helper
├─ .gitignore
├─ coba.html
├─ eslint.config.js
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## Persyaratan

Pastikan perangkat Anda telah memiliki:

- Node.js versi 16 atau lebih baru (disarankan versi LTS)
- npm atau Yarn

---

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/Kevin-Glory-Prasetyo/Desain-Kelas-Hacker-X-Code-React.git
cd Desain-Kelas-Hacker-X-Code-React
```

### 2. Install Dependencies

```bash
npm install

# atau

yarn install
```

### 3. Jalankan Development Server

```bash
npm run dev

# atau

yarn dev
```

Aplikasi dapat diakses melalui:

```
http://localhost:5173/
```

---

## Script yang Tersedia

| Script | Deskripsi |
|---------|-----------|
| `npm run dev` | Menjalankan server development menggunakan Vite |
| `npm run build` | Melakukan build untuk produksi |
| `npm run preview` | Menjalankan hasil build secara lokal |

Contoh penggunaan:

```bash
npm run build
npm run preview
```

---

## Build & Deployment

Lakukan build aplikasi menggunakan:

```bash
npm run build
```

Hasil build akan tersimpan pada folder:

```
dist/
```

Folder tersebut dapat langsung digunakan untuk deployment ke:

- Vercel
- Netlify
- GitHub Pages

### Deploy ke Vercel

1. Hubungkan repository ke Vercel.
2. Build Command:

```bash
npm run build
```

3. Output Directory:

```
dist
```

---

## Kontribusi

Kontribusi sangat terbuka.

Langkah-langkah kontribusi:

1. Fork repository.
2. Buat branch baru.

```bash
git checkout -b feature/nama-fitur
```

3. Commit perubahan.

```bash
git commit -m "feat: menambahkan fitur baru"
```

4. Push ke repository.

```bash
git push origin feature/nama-fitur
```

5. Buat Pull Request.

---

## Checklist Sebelum Merge

- Responsif pada desktop dan mobile
- Tidak terdapat error pada browser console
- Menggunakan HTML semantik dan memiliki alt text pada gambar

---

## Dokumentasi

### Tampilan Desktop

### 1. Header & Home

<img width="1880" height="675" alt="image" src="https://github.com/user-attachments/assets/ee64d8e5-e7f1-4fc2-9c7d-6ba82d0f66e4" />

### 2. About Us

<img width="1891" height="493" alt="image" src="https://github.com/user-attachments/assets/cb1a68ea-e14d-4227-a673-5908420c859a" />

### 3. Service

<img width="1879" height="831" alt="image" src="https://github.com/user-attachments/assets/976d38e9-ac9b-411a-8430-476f43220a85" />

### 4. Introduction Mentor

<img width="1890" height="673" alt="image" src="https://github.com/user-attachments/assets/c198a43a-3979-42b3-a2a4-e7f5e425794d" />

### 5. Profile Mentor

<img width="1899" height="619" alt="image" src="https://github.com/user-attachments/assets/8ad14706-cb7a-4386-9f46-7cafd0445121" />

### 6. Office Location

<img width="1879" height="538" alt="image" src="https://github.com/user-attachments/assets/a8595fd5-4402-45d2-bc8e-1b8b937187c9" />

### 7. Client Partner

<img width="1865" height="753" alt="image" src="https://github.com/user-attachments/assets/9f650bfc-5264-4b48-b0ee-e6cd2a446308" />

### 8. Pricing

<img width="1898" height="766" alt="image" src="https://github.com/user-attachments/assets/ab17371b-8ab2-48ed-8f7b-64826aae8b5a" />

### 9. Video Testimonial

<img width="1902" height="665" alt="image" src="https://github.com/user-attachments/assets/b60a0e7f-c2e9-405e-835d-8161d035093b" />

### 10. Text Testimonial

<img width="1892" height="789" alt="image" src="https://github.com/user-attachments/assets/e2e0a919-ccaf-4503-9c32-ba9a02634d45" />

### 11. Footer

<img width="1896" height="419" alt="image" src="https://github.com/user-attachments/assets/4cca1892-27e9-45d8-8a2c-d427b6a89310" />

---

## Tampilan Mobile

### 1. Header + Home + Hamburger Menu

![Header Mobile](https://github.com/user-attachments/assets/a2c3d34a-5dbe-4aa2-b75c-96ac8589d51b)

### 2. About Us

![About Us Mobile](https://github.com/user-attachments/assets/67751c9f-d542-46ac-90b5-c4ed069b63b7)

### 3. Service

![Service Mobile](https://github.com/user-attachments/assets/b97106dc-5dfe-48f7-83f4-2ca99b8d00cf)

### 4. Introduction Mentor

![Intro Mentor Mobile](https://github.com/user-attachments/assets/193bf45f-84fc-41f9-812f-13cdf6dd5d0a)

### 5. Profile Mentor

![Profile Mentor Mobile](https://github.com/user-attachments/assets/a84b467e-02d2-4dde-b85c-20ef2f3abf4b)

### 6. Office Location

![Office Mobile](https://github.com/user-attachments/assets/8ea2ed64-e8e1-4575-a10a-251efa61af29)

### 7. Client Partner

![Client Mobile](https://github.com/user-attachments/assets/a8b8b3e4-c056-4e68-98a3-c184134eab9e)

### 8. Pricing

![Pricing Mobile](https://github.com/user-attachments/assets/875d2029-d455-45c4-890c-fa9e85af024d)

### 9. Video Testimonial

![Video Testimonial Mobile](https://github.com/user-attachments/assets/ffbc294f-4fa7-4b49-80eb-b69cb70dadc4)

### 10. Text Testimonial

![Text Testimonial Mobile](https://github.com/user-attachments/assets/c1e64392-3dce-4d14-ad2a-933c012ee971)

### 11. Footer

![Footer Mobile](https://github.com/user-attachments/assets/23b0530a-47c8-4110-98df-ff2e24ff3c50)

### 12. Hamburger Menu

![Hamburger Menu](https://github.com/user-attachments/assets/7190e964-e6e8-441d-bf64-362c6668f344)

---
