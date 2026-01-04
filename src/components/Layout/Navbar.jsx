import { useState, useEffect } from "react";
import xcodeLogo from "../../assets/images/xcode.jpg";
import hamburger from "../../assets/images/bar.png";
import home from "../../assets/images/ui/home.svg";
import about from "../../assets/images/ui/about.svg";
import silabus from "../../assets/images/ui/silabus.svg";
import fasilitas from "../../assets/images/ui/fasilitas.svg";
import testimoni from "../../assets/images/ui/testimoni.svg";
import team from "../../assets/images/ui/team.svg";
import client from "../../assets/images/ui/client.svg";
import contact from "../../assets/images/ui/contact.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menus = [
    { label: "Home", id: "Home", icon: home },
    { label: "About Us", id: "AboutUs", icon: about },
    { label: "Silabus", id: "Silabus", icon: silabus },
    { label: "Fasilitas", id: "Fasilitas", icon: fasilitas },
    { label: "Testimonial", id: "Testimonial", icon: testimoni },
    { label: "Team And Mentor", id: "TeamAndMentor", icon: team },
    { label: "Our Client", id: "OurClient", icon: client },
    { label: "Contact", id: "Contact", icon: contact },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenu(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menus.forEach((menu) => {
      const element = document.getElementById(menu.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <nav>
        {/* Logo */}
        <img src={xcodeLogo} alt="Logo" className="logo-xcode" />

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="logo-hamburger-btn"
        >
          <img src={hamburger} alt="Menu" className="logo-hamburger" />
        </button>

        {/* Menu */}
        <ul className={`nav-laptop ${menuOpen ? "active" : ""}`}>
          {menus.map((item) => (
            <li
              key={item.id}
              className={activeMenu === item.id ? "active" : ""}
              onClick={() => {
                setActiveMenu(item.id);
                setMenuOpen(false);
              }}
            >
              <a href={`#${item.id}`}>
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
