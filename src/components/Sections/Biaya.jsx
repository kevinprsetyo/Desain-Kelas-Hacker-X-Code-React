import React, { useState, useEffect, useRef, useCallback } from "react";
import left from "../../assets/images/ui/left2.svg"
import right from "../../assets/images/ui/right2.svg"

// 1. Definisikan nomor WhatsApp dan data mentah
const nomor = "6285728917933"; // Ganti dengan nomor Anda jika perlu

const coursesData = [
  {
    title: "Ethical Elite Hacker v10 - 2025",
    desc: "Program private eksklusif untuk menguasai teknik ethical hacking tingkat lanjut.",
    price: "Rp.32.200.000/Peserta",
    features: ["Private", "Live di Zoom", "26x Sesi Pertemuan", "Silabus Online X-code Training"],
    silabusLink: "https://kelashacker.com/elitehackerv10_online.pdf?data",
  },
  {
    title: "Ethical Elite Hacker v10 - 2025 (Semi Private)",
    desc: "Versi semi-private dengan peserta terbatas untuk pembelajaran ethical hacking modern.",
    price: "Rp.18.200.000/Peserta",
    features: ["Semi Private", "Live di Zoom", "Maksimal 10 Peserta", "26x Sesi Pertemuan", "Silabus Online X-code Training", "Video Ethical Elite Hacker v10 Training", "Terbuka Untuk Umum"],
    silabusLink: "https://kelashacker.com/elitehackerv10_online.pdf?data",
  },
  {
    title: "Elite Penetration testing v2 - 2025",
    desc: "Kelas private intensif untuk mendalami praktik penetration testing profesional.",
    price: "Rp.12.100.000/Peserta",
    features: ["Kelas Private", "Live di Zoom", "7x Sesi Pertemuan", "Silabus Online X-code Training", "Terbuka Untuk Umum"],
    silabusLink: "https://kelashacker.com/elitepenetrationtestingtrainingv2_2025.pdf",
  },
  {
    title: "Advanced Cyber Security v3",
    desc: "Belajar cyber security tingkat lanjut melalui 20 sesi video dan konsultasi WA.",
    price: "Rp.2.350.000/Peserta",
    features: ["Terbuka Untuk Umum", "Waktu Fleksibel", "Pembelajaran dengan Video", "20 Sesi Video", "Konsultasi WA", "Silabus Online X-code Training", "Video Ethical Elite Hacker v9 Training"],
    silabusLink: "https://kelashacker.com/elitehackerv9_online.pdf?download",
  },
  {
    title: "Advanced Cyber Security v2",
    desc: "Program video 17 sesi untuk memahami keamanan siber menengah hingga lanjut.",
    price: "Rp.1.350.000/Peserta",
    features: ["Terbuka Untuk Umum", "Waktu Fleksibel", "Pembelajaran dengan Video", "17 Sesi Video", "Konsultasi WA", "Silabus Online X-code Training"],
    silabusLink: "https://kelashacker.com/elitehackerv5.pdf?data",
  },
  {
    title: "Advanced Cyber Security v1",
    desc: "Kelas video 16 sesi tentang dasar-dasar keamanan siber dengan bimbingan via WA.",
    price: "Rp.800.000/Peserta",
    features: ["Terbuka Untuk Umum", "Waktu Fleksibel", "Pembelajaran dengan Video", "16 Sesi Video", "Konsultasi WA", "Silabus Online X-code Training"],
    silabusLink: "https://kelashacker.com/elitehackerv3_online.pdf?data",
  },
  {
    title: "Advanced web hacking & security v2",
    desc: "Pelatihan private 7 sesi untuk menguasai eksploitasi dan keamanan aplikasi web.",
    price: "Rp.8.900.000/Peserta",
    features: ["Private", "Live di Zoom", "7x Pertemuan", "Silabus Online X-code Training"],
    silabusLink: "https://xcode.co.id/professional/ethicalwebhackingsecurity.pdf?data",
  },
  {
    title: "Advanced network hacking & security v2",
    desc: "Kursus private 7 sesi untuk mendalami teknik hacking dan keamanan jaringan modern.",
    price: "Rp.8.900.000/Peserta",
    features: ["Private", "Live di Zoom", "7x Pertemuan", "Silabus Online X-code Training"],
    silabusLink: "https://xcode.co.id/professional/ethicalnetworkhackingsecurity.pdf?data",
  },
  {
    title: "Linux sysadmin & security",
    desc: "Belajar administrasi sistem Linux dan dasar keamanan melalui 4 sesi video.",
    price: "Rp.350.000/Peserta",
    features: ["Terbuka Untuk Umum", "Waktu Fleksibel", "Pembelajaran dengan Video", "4 Sesi Video", "Konsultasi WA", "Silabus Online X-code Training"],
    silabusLink: "https://kelashacker.com/linuxsystemadministratorandsecurity.pdf",
  }
];

// 2. Proses data untuk menambahkan buyLink secara dinamis
const courses = coursesData.map(course => ({
  ...course,
  buyLink: `https://wa.me/${nomor}?text=${encodeURIComponent(`Halo, saya tertarik dengan kelas "${course.title}".`)}`
}));


export default function Biaya() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  }, []);

  const calculateOffset = useCallback(() => {
    if (containerRef.current && sliderRef.current && sliderRef.current.children[currentIndex]) {
      const containerWidth = containerRef.current.offsetWidth;
      const activeCard = sliderRef.current.children[currentIndex];
      const cardWidth = activeCard.offsetWidth;
      const cardLeft = activeCard.offsetLeft;

      const newOffset = (containerWidth / 2) - (cardLeft + cardWidth / 2);
      setOffset(newOffset);
    }
  }, [currentIndex]);

  useEffect(() => {
    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => {
      window.removeEventListener('resize', calculateOffset);
    };
  }, [calculateOffset]);

  return (
    <section className="biaya-section" id="Silabus">
      <header>
        <h1>
          <span>X-code</span> Training Course
        </h1>
      </header>

      <div className="slider-container" ref={containerRef}>
        <button className="nav-btn prev" onClick={handlePrev}><img src={right} alt="Previous" /></button>

        <div className="slider" ref={sliderRef} style={{ transform: `translateX(${offset}px)` }}>
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`card ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <h3>{course.title}</h3>
              <p>{course.desc}</p>

              <div className="price">
                {course.price}
              </div>

              <ul>
                {course.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <div className="btn-group">
                <a
                  // Diperbaiki: href dari course.sil menjadi course.silabusLink
                  href={course.silabusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-silabus"
                >
                  Download Silabus
                </a>
                <a
                  href={course.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-beli"
                >
                  Beli
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={handleNext}><img src={left} alt="Next" /></button>
      </div>
    </section>
  );
}