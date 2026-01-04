// src/components/TextTestimonialSlider.jsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import left from "../../assets/images/ui/left2.svg"
import right from "../../assets/images/ui/right2.svg"
// IMPOR GAMBAR PROFIL LOKAL DENGAN NAMA FILE YANG TEPAT
import imamImg from "../../assets/images/people/testimoni 01_Imam.png"
import adiImg from "../../assets/images/people/testimoni 02_Adi.png"
import efendiImg from "../../assets/images/people/testimoni 03_efendi.png"
import taufikImg from "../../assets/images/people/testimoni 04_taufik.png"
import rizalImg from "../../assets/images/people/testimoni 05_rizal.png"
import larasImg from "../../assets/images/people/testimoni 06_laras.png"

// Data testimoni (pakai gambar lokal)
const textTestimonials = [
    {
        id: 11,
        name: "Imam", // Nama disesuaikan
        img: imamImg, // Menggunakan variabel yang diimpor
        text: "Mantap ilmunya, menunjang sekali dalam pekerjaan. Kebetulan saya bekerja disalah satu perusahaan IT.",
    },
    {
        id: 12,
        name: "Adi", // Nama disesuaikan
        img: adiImg, // Menggunakan variabel yang diimpor
        text: "Xcode adalah tempat training yg sangat bagus dalam memberikan pengalaman untuk dunia keamanan sistem.",
    },
    {
        id: 13,
        name: "Efendi", // Nama disesuaikan
        img: efendiImg, // Menggunakan variabel yang diimpor
        text: "Rekomendasi banget bagi yang ingin mendalami security network, kita diajarkan bagaimana cara attack dan defense. Banyak studi kasus real yang dipelajari, Mantap josss mas..",
    },
    {
        id: 14,
        name: "Taufik", // Nama disesuaikan
        img: taufikImg, // Menggunakan variabel yang diimpor
        text: "Saya buta dalam Dunia Hacking.. setelah mengikuti saya jadi tau bagaimana melindungi diri dari peretas.. wajib hukumnya bagi profesional IT utk tau dunia hacking.",
    },
    {
        id: 15,
        name: "Rizal", // Nama disesuaikan
        img: rizalImg, // Menggunakan variabel yang diimpor
        text: "Senang bisa belajar di Xcode. Cara penyampaian materi yg mudah dimengerti, pelayanan yg sangat bagus terutama peserta dari luar kota, bisa nambah teman yg berminat bidang IT Security, cocok buat pemula hingga expert.",
    },
    {
        id: 16,
        name: "Laras", // Nama disesuaikan
        img: larasImg, // Menggunakan variabel yang diimpor
        text: "Ingin mendalami cyber security & ethical hacking? Ikutan kursus di Xcode aja... Saya ikut kursus online 16x pertemuan. Materinya lengkap, disediakan fasilitas program pendukung, video training dll & pengajarnya langsung dibawakan oleh ahlinya Master Kurniawan... supaya hasil kursusnya maksimal, setidaknya mesti punya basic ilmu jaringan komputer dasar, TCP/IP & jgn lupa PRAKTEK...",
    },
];

const TestimoniText = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [offset, setOffset] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const sliderRef = useRef(null);
    const wrapperRef = useRef(null);

    const goToSlide = useCallback((index) => {
        const newIndex = (index + textTestimonials.length) % textTestimonials.length;
        setCurrentSlide(newIndex);
    }, []);

    const handlePrev = () => {
        goToSlide(currentSlide - 1);
    };

    const handleNext = useCallback(() => {
        goToSlide(currentSlide + 1);
    }, [currentSlide, goToSlide]);

    // Touch handlers for swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrev();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, [isPaused, handleNext]);

    useEffect(() => {
        if (
            sliderRef.current &&
            wrapperRef.current &&
            sliderRef.current.children.length > 0
        ) {
            const wrapperWidth = wrapperRef.current.offsetWidth;
            const cardElement = sliderRef.current.children[currentSlide];

            if (cardElement) {
                const cardWidth = cardElement.offsetWidth;
                const cardLeft = cardElement.offsetLeft;
                const newOffset =
                    wrapperWidth / 2 - (cardLeft + cardWidth / 2);
                setOffset(newOffset);
            }
        }
    }, [currentSlide]);

    return (
        <div className="testimonial-container">
            <h1 className="testimonial-title">Testimoni Training di X-CODE</h1>

            <div
                className="slider-wrapper"
                ref={wrapperRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <button className="nav-button prev" onClick={handlePrev}>
                    <div className="nav-arrow">
                        <img src={right} alt="Prev" />
                    </div>
                </button>

                <div
                    className="testimonial-slider"
                    ref={sliderRef}
                    style={{ transform: `translateX(${offset}px)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {textTestimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card text ${index === currentSlide ? "center-card" : ""
                                }`}
                            onClick={() => goToSlide(index)}
                        >
                            <div className="card-header">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <div className="star" key={i}></div>
                                    ))}
                                </div>
                                <div className="profile-image">
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                    />
                                </div>
                            </div>

                            <div className="card-content">
                                <p className="testimonial-text">{testimonial.text}</p>
                                <h3 className="author-name">{testimonial.name}</h3>
                                <div className="author-title"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="nav-button next" onClick={handleNext}>
                    <div className="nav-arrow">
                        <img src={left} alt="Next" />
                    </div>
                </button>
            </div>

            <div className="pagination-dots">
                {textTestimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TestimoniText;