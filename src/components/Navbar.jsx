import "./../App.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#">
            <span className="logo-color">guidodev</span>.com.ar
            <span className="version"> | v0.23.3</span>
          </a>
        </div>
        <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              className="menu-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="menu-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="menu-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="menu-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="menu-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
}
