import React from 'react';

// Import gambar dari folder assets
import network1 from '../../assets/images/network (1).jpg';
import network2 from '../../assets/images/network (2).jpg';
import network3 from '../../assets/images/network (3).jpg';

// Data untuk service cards (lebih mudah dikelola)
const servicesData = [
    {
        img: network1,
        alt: "Layanan Ethical Hacking",
        title: "Ethical Hacking",
        description: "Belajar mengamankan dan pengawasan server dan web dari berbagai sisi hingga membuat penyerang ip-nya otomatis mengalami blacklist baik serangan seperti d-service ataupun website. Tidak hanya juga belajar secure coding dan belajar bagaimana melakukan konfigurasi server dengan keamanan maksimal baik dari berbagai sisi."
    },
    {
        img: network2,
        alt: "Layanan Safe Guard",
        title: "Safe Guard",
        description: "Belajar mengamankan dan pengawasan server dan web dari berbagai sisi hingga membuat penyerang ip-nya otomatis mengalami blacklist baik serangan seperti d-service ataupun website. Tidak hanya juga belajar secure coding dan belajar bagaimana melakukan konfigurasi server dengan keamanan maksimal baik dari berbagai sisi.",
        isFeatured: true
    },
    {
        img: network3,
        alt: "Layanan Defense",
        title: "Defense",
        description: "Belajar mengamankan dan pengawasan server dan web dari berbagai sisi hingga membuat penyerang ip-nya otomatis mengalami blacklist baik serangan seperti d-service ataupun website. Tidak hanya juga belajar secure coding dan belajar bagaimana melakukan konfigurasi server dengan keamanan maksimal baik dari berbagai sisi."
    }
];

const Services = () => {
    return (
        <section className="services-section" id='Fasilitas'>
            <div className="section-header">
                <h2>Why Choose Our Service</h2>
                <p>Materi lengkap dari dasar hingga advanced, dirancang khusus untuk memahami Ethical Hacking & Security Defense. Kami membantu Anda membangun pondasi keamanan IT yang kuat.</p>
            </div>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div key={index} className={`service-card ${service.isFeatured ? 'featured' : ''}`}>
                        <img src={service.img} alt={service.alt} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        {/* <a href="#" className="read-more-btn">Read More</a> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;