import React from 'react';

const expertData = [
    { title: "Profil Instruktur", description: "Lulusan S1 Teknik Informatika & S1 Fisika UGM. Praktisi IT Security dengan pengalaman 20+ tahun." },
    { title: "Karier & Jabatan", description: "CTO PT. Teknologi Server Indonesia, Lead Penetration Tester, Security Researcher, dan Programmer." },
    { title: "Pengalaman Belajar", description: "IT Security (SANS Institute, EC-Council), Kemenhan, KPK, Kominfo, Perbankan, Universitas, dan perusahaan." },
    { title: "Jejak Profesional", description: "Pembicara seminar & workshop di berbagai kampus. Peserta training dari Indonesia hingga luar negeri." },
    { title: "Kontribusi Komunitas", description: "Founder Komunitas Hacker Indonesia (Forum 128.000+ member sejak 2005)." },
    { title: "Aktivitas & Riset", description: "Aktif di proyek FOSS & open source. Github: github.com/kurniawanxda" }
];

const ExpertInstructor = () => {
    return (
        <section className="expert-section">
            <div className="section-header">
                <h2>Meet Your Expert Instructor</h2>
                <p>Belajar langsung dari praktisi dan peneliti IT Security dengan pengalaman lebih dari 20 tahun di dunia cyber security.</p>
            </div>
            <div className="expert-grid">
                {expertData.map((item, index) => (
                    <div key={index} className="expert-card">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpertInstructor;