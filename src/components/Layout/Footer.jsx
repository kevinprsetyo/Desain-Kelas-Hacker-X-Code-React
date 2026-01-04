import React from 'react';
import xcodeLogo from '../../assets/images/Xcode.png';

const Footer = () => {
    return (
        <footer id='Contact'>
            <div className="footer-container">
                <div className="footer-about">
                    <img src={xcodeLogo} alt="X-Code Logo" className="footer-logo" />
                    <p>X-code Training layanan dari perusahaan PT. Teknologi Server Indonesia, perseroan terbatas berbadan hukum yang bergerak di bidang Cyber Security.</p>
                    <p className="social-header">Terhubung Bersama Kami</p>
                    <div className="social-icon">
                        <a href="https://www.facebook.com/teknologiserverindonesia/"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/xcode.office"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/xcodetraining2/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>TRAINING LINK</h3>
                    <ul>
                        <li><a href="#">Website X-Code</a></li>
                        <li><a href="#">X-Code Professional</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>CONTACT US</h3>
                    <div className="contact-item">
                        <i className="fab fa-whatsapp"></i>
                        <a href="https://wa.me/6285728917933" target="_blank" rel="noopener noreferrer">+62 857 2891 7933</a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:admin@xcodetraining.com">admin@xcodetraining.com</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright By X-Code. All Right Reserved</p>
                <a href="#">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;