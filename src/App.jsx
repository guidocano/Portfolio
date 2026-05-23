import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState, useEffect} from "react";
import "./App.css";
// import { Images } from "./assets/images";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
      setShowScrollBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      {/* Botón Scroll-Up */}
      <button
        className={`scroll-up-btn ${showScrollBtn ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      >
        <i className="fas fa-angle-up"></i>
      </button>

      {/* Navbar */}
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="max-width">
          <div className="logo">
            <a href="#">
              <span className="logo-color">guidodev</span>.com.ar
              <span className="version"> | v0.22.0</span>
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

      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />


      {/* Footer */}
      <footer>
        <span>
          <span className="lio2">guidodev</span>
          <span>.com.ar</span> | <a target="_blank" href="https://www.linkedin.com/in/guidocalciano/">Guido Calciano</a> |{" "}
          <span className="far fa-copyright"></span> 2026
          <span className="hide"> All rights reserved</span>.
        </span>
      </footer>
    </div>
  );
}

export default App;
