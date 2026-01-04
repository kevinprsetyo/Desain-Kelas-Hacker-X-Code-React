# 📋 CODE FIX CHEATSHEET - React Project Restructure

Setelah menjalankan `migrate-structure.ps1`, Anda perlu memperbaiki import paths di beberapa file.

## ⚠️ CRITICAL FILES TO FIX

### 🔧 1. index.html

**File:** `index.html` (di root project)

**Problem:** Script module path masih mengarah ke `Render/main.jsx`

**Fix:**
```html
<!-- BEFORE -->
<script type="module" src="Render/main.jsx"></script>

<!-- AFTER -->
<script type="module" src="src/main.jsx"></script>
```

---

### 🔧 2. src/main.jsx

**File:** `src/main.jsx`

**Problem:** Import path untuk App dan CSS masih relatif ke folder lama

**Fix:**
```javascript
// BEFORE
import App from './App';
import './index.css';

// AFTER (tidak perlu diubah, sudah benar karena sekarang berada di folder yang sama)
import App from './App';
import './index.css';
```

✅ **File ini tidak perlu diubah!** Import path sudah otomatis benar.

---

### 🔧 3. src/App.jsx

**File:** `src/App.jsx`

**Problem:** Import komponen masih menggunakan path lama (`../src/komponen/`)

**Fix - COPY PASTE CODE INI:**

```javascript
import React from 'react';

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Section Components
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Services from './components/Sections/Service';
import Mentors from './components/Sections/Mentors';
import ExpertInstructor from './components/Sections/ExperienceMentor';
import OfficeLocations from './components/Sections/OfficeLocation';
import Client from './components/Sections/Client';
import Biaya from './components/Sections/Biaya';
import TestimoniVideo from './components/Sections/TestimoniText';
import TestimoniText from './components/Sections/TestimoniVideo';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Mentors />
        <ExpertInstructor/>
        <OfficeLocations />
        <Client/>
        <Biaya />
        <TestimoniText/>
        <TestimoniVideo/>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

---

### 🔧 4. src/components/Sections/Client.jsx (TERPENTING!)

**File:** `src/components/Sections/Client.jsx`

**Problem:** Ratusan import gambar masih menggunakan path `../assets/img/`

**CARA TERCEPAT - FIND & REPLACE:**

#### Option A: Menggunakan VS Code (RECOMMENDED)

1. Buka `src/components/Sections/Client.jsx`
2. Tekan `Ctrl + H` (Find & Replace)
3. **Find:** `"../assets/img/`
4. **Replace With:** `"../../assets/images/clients/`
5. Klik **Replace All**

#### Option B: Manual Replace (jika perlu kategori berbeda)

**Untuk gambar di kategori CLIENTS (mayoritas):**
```javascript
// BEFORE
import pertahanan from "../assets/img/pertahanan.png";
import client_alumni01 from "../assets/img/client_alumni01.png";
import seminar1 from "../assets/img/seminar1.png";
import mediareport1 from "../assets/img/mediareport1.png";

// AFTER
import pertahanan from "../../assets/images/clients/pertahanan.png";
import client_alumni01 from "../../assets/images/clients/client_alumni01.png";
import seminar1 from "../../assets/images/clients/seminar1.png";
import mediareport1 from "../../assets/images/clients/mediareport1.png";
```

**Untuk gambar di kategori PEOPLE (jika ada di Client.jsx):**
```javascript
// BEFORE
import testimoni01 from "../assets/img/testimoni 01_Imam.png";

// AFTER
import testimoni01 from "../../assets/images/people/testimoni 01_Imam.png";
```

**Untuk gambar di kategori UI (jika ada di Client.jsx):**
```javascript
// BEFORE
import homeIcon from "../assets/img/home.svg";

// AFTER
import homeIcon from "../../assets/images/ui/home.svg";
```

---

### 🔧 5. Komponen Lain yang Mungkin Perlu Diperbaiki

Komponen di `src/components/Sections/` atau `src/components/Layout/` yang mengimport gambar juga perlu diperbaiki.

**Pattern Umum:**

Karena sekarang komponen berada di subfolder, path relatif berubah:

```javascript
// SEBELUM (ketika di src/komponen/)
import gambar from "../assets/img/gambar.png";

// SESUDAH (sekarang di src/components/Layout/ atau src/components/Sections/)
import gambar from "../../assets/images/{category}/gambar.png";
```

**Path relatif penjelasan:**
- `../../` = naik 2 level (dari `src/components/Sections/` ke `src/`)
- `assets/images/{category}/` = masuk ke folder assets/images dan kategori

---

## 🧪 TESTING

Setelah semua perubahan:

### 1. Jalankan Dev Server
```powershell
npm run dev
```

### 2. Cek Console Browser
- Buka browser (biasanya `http://localhost:5173`)
- Tekan `F12` untuk buka DevTools
- Periksa tab **Console** untuk error import
- Periksa tab **Network** untuk file 404

### 3. Visual Check
- Pastikan semua gambar muncul (tidak ada broken images)
- Pastikan semua komponen ter-render dengan benar

---

## 🚨 TROUBLESHOOTING

### Error: "Cannot find module './components/..."

**Penyebab:** Path import salah

**Solusi:** 
- Pastikan folder `src/components/Layout/` dan `src/components/Sections/` sudah ada
- Pastikan nama file komponen sesuai (case-sensitive!)

### Error: "Failed to load image"

**Penyebab:** Path gambar salah atau gambar tidak dipindahkan dengan benar

**Solusi:**
1. Periksa apakah gambar ada di folder yang benar (`src/assets/images/{category}/`)
2. Periksa path relatif: komponen di `Sections/` butuh `../../` untuk naik ke `src/`

### Error: "Module not found: Can't resolve '../../assets/images/clients/...'"

**Penyebab:** File gambar masih di folder lama atau nama file typo

**Solusi:**
1. Cek apakah file gambar benar-benar ada di `src/assets/images/clients/`
2. Pastikan nama file sama persis (case-sensitive!)

---

## 📁 STRUKTUR AKHIR (REFERENCE)

```
project-root/
├── index.html                   ← Update script src
├── public/
├── src/
│   ├── main.jsx                 ← ✅ No change needed
│   ├── App.jsx                  ← ✅ Fix imports
│   ├── index.css
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx       ← Update import paths if using images
│   │   │   └── Footer.jsx       ← Update import paths if using images
│   │   └── Sections/
│   │       ├── Home.jsx         ← Update import paths if using images
│   │       ├── About.jsx        ← Update import paths if using images
│   │       ├── Client.jsx       ← ✅ CRITICAL: Fix all image imports!
│   │       ├── Service.jsx
│   │       ├── Mentors.jsx
│   │       ├── ExperienceMentor.jsx
│   │       ├── OfficeLocation.jsx
│   │       ├── Biaya.jsx
│   │       ├── TestimoniText.jsx
│   │       └── TestimoniVideo.jsx
│   ├── assets/
│   │   └── images/
│   │       ├── clients/         ← client_*, seminar*, mediareport*, univ*, company logos
│   │       ├── people/          ← testimoni*, karyawan*, man*.jpg
│   │       └── ui/              ← *.svg icons
│   └── script/
│       └── script.js
├── package.json
└── vite.config.js
```

---

## ✅ CHECKLIST

Setelah selesai fix semua file:

- [ ] `index.html` - Updated script src ke `src/main.jsx`
- [ ] `src/App.jsx` - Updated all component imports
- [ ] `src/components/Sections/Client.jsx` - Updated ratusan image imports
- [ ] Komponen lain yang menggunakan gambar (jika ada)
- [ ] `npm run dev` berjalan tanpa error
- [ ] Semua gambar muncul di browser
- [ ] No console errors

---

## 🎯 QUICK REFERENCE - IMPORT PATTERNS

| Komponen Location | Import Pattern untuk Assets |
|-------------------|------------------------------|
| `src/components/Layout/` | `import img from "../../assets/images/{category}/file.png"` |
| `src/components/Sections/` | `import img from "../../assets/images/{category}/file.png"` |
| `src/` (root src folder) | `import img from "./assets/images/{category}/file.png"` |

---

Good luck! 🚀

Jika masih ada error setelah mengikuti panduan ini, silakan tanyakan dengan menyertakan:
1. Error message lengkap
2. File yang error
3. Screenshot jika perlu
