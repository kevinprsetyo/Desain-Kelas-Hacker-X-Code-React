import React from 'react';

import office1 from '../../assets/images/Main Office.png';
import office2 from '../../assets/images/Production Office.png';
import office3 from '../../assets/images/Representative office.png';

const officeData = [
    { img: office1, alt: "Head Office", title: "Head Office", address: "Jl. Kebun Raya Gg. Terate No. 29 Timur Gembira Loka Zoo, Kota Yogyakarta" },
    { img: office2, alt: "Satellite Office", title: "Satellite Office", address: "Minggiran MJ.2 RT 58, RW 16 Matrijeron, Kota Yogyakarta" },
    { img: office3, alt: "Representative Office", title: "Representative Office", address: "Bellezza BSA 1st Floor Unit 106, Jl. Letjen Soepeno, Kebayoran Lama, Jakarta Selatan 12210." }
];

const OfficeLocations = () => {
    return (
        <section className="office-section">
            <h2>Office Location</h2>
            <div className="office-container">
                {officeData.map((office, index) => (
                    <div key={index} className="office-card">
                        <img src={office.img} alt={office.alt} />
                        <h3>{office.title}</h3>
                        <p>{office.address}</p>
                        <a href="#">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OfficeLocations;