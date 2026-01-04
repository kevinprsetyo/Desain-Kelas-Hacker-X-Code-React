
import React from 'react';

// Import gambar mentor
import karyawan1 from '../../assets/images/people/karyawan(1).png';
import kurniawan1 from '../../assets/images/kurniawan1.jpg';
import karyawan2 from '../../assets/images/people/karyawan(2).png';
import karyawan3 from '../../assets/images/people/karyawan(3).png';

// Data mentor dengan ID unik dan nama yang lebih spesifik
const mentorData = [
    { id: 1, img: karyawan1, name: "Maria", role: "Chief Executive Officier" },
    { id: 2, img: kurniawan1, name: "Master Kurniawan", role: "CEO & Praktisi Cybersecurity" },
    { id: 3, img: karyawan2, name: "Cantika", role: "Chief Operating Officier" },
    { id: 4, img: karyawan3, name: "Helena", role: "HR" }
];

const Mentors = () => {
    return (
        <section className="mentor-section" id='TeamAndMentor'>
            <div className="section-header">
                <h2>Mentor dan Karyawan</h2>
                <p>Kami menghadirkan pengajar terbaik dari industri untuk memberikan Anda keterampilan praktis yang mutakhir</p>
            </div>
            <div className="mentor-container">
                {mentorData.map((mentor) => (
                    <div key={mentor.id} className="mentor-card">
                        <img src={mentor.img} alt={`Foto ${mentor.name}`} />
                        <div className="card-content">
                            <div className="mentor-info">
                                <h3>{mentor.name} <i className="fas fa-check-circle verified-icon"></i></h3>
                                <p className="experience">{mentor.role}</p>
                            </div>
                            <div className="card-footer">
                                {/* <span className="course-tag">Course</span> */}
                                {/* <span className="rating">★ 4.8</span> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Mentors;