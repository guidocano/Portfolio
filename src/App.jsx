import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

import "./App.css";
import { Images } from "./assets/images";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const el1 = useRef(null);
  const el2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
      setShowScrollBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    const typed1 = new Typed(el1.current, {
      strings: ["a developer.", "creative.", "adaptable.", "a problem solver."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    const typed2 = new Typed(el2.current, {
      strings: ["a developer."],
      typeSpeed: 200,
      loop: false
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      
      {/* Botón Scroll-Up */}
      <button 
        className={`scroll-up-btn ${showScrollBtn ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
      >
        <i className="fas fa-angle-up"></i>
      </button>

      {/* Navbar */}
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="max-width">
          <div className="logo">
            <a href="#">
              <span className="logo-color">guidodev</span>.com.ar
            </a>
          </div>
          <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="menu-btn" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="menu-btn" onClick={() => setIsMenuOpen(false)}>About me</a></li>
            <li><a href="#services" className="menu-btn" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="menu-btn" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="menu-btn" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Guido Calciano </div>
            <div className="text-3">
              And I'm <span ref={el1}></span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column right">
              <div className="text">
                I'm Guido and I'm <span ref={el2}></span>
              </div>
              <p>
                Analytical Software Developer with over 3 years of experience in{" "}
                <strong>global corporate environments.</strong> Expert at
                bridging complex business requirements with scalable technical
                solutions, backed by a <strong>Psychology degree (UBA)</strong>{" "}
                and <strong>technical training (UTN)</strong>. Focused on
                delivering high-impact software and intuitive user experiences
                for global cross-functional teams.
              </p>
            </div>
            <div className="buttonContainer cvs">
              <a href="../public/assets/CV_Guido_Calciano_Software_Dev.pdf" target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Asegurados como bloques estáticos) */}
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          <div className="serv-content">
            
            <div className="card">
              <a href="https://guidocano.github.io/movies/" target="_blank" rel="noreferrer" className="hyper">
                <div className="box">
                  <i className="fa-solid fa-ticket"></i>
                  <div className="text">Cinema Website</div>
                  <p>Register and login, movie search, add to favs. React <i className="fa-brands fa-react icon-small"></i></p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://guidocano.github.io/google-clone/" target="_blank" rel="noreferrer" className="hyper">
                <div className="box">
                  <i className="fa-brands fa-google"></i>
                  <div className="text">Google Clone</div>
                  <p>Search engine layout with Google, Youtube and Img API. React <i className="fa-brands fa-react icon-small"></i></p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://guidocano.github.io/take-note/" target="_blank" rel="noreferrer" className="hyper">
                <div className="box">
                  <i className="take-note fa-solid fa-note-sticky"></i>
                  <div className="text">Take Note!</div>
                  <p>Write, edit and delete your notes. Filter and archive. React <i className="fa-brands fa-react icon-small"></i></p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://guidocano.github.io/travel-photo-album/" target="_blank" rel="noreferrer" className="hyper">
                <div className="box">
                  <i className="fa-solid fa-panorama"></i>
                  <div className="text">Travel Photo Album</div>
                  <p>Travel and Photography Website.</p>
                  <p>HTML5, CSS, JS and Bootstrap.</p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="rts.html" className="hyper">
                <div className="box">
                  <i className="fas fa-road"></i>
                  <div className="text">Road Trip Simulator</div>
                  <p>Text-based adventure game developed with Python. <b>Play it!</b></p>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://github.com/guidocano" target="_blank" rel="noreferrer" className="hyper">
                <div className="box">
                  <i className="fas fa-code"></i>
                  <div className="text">Other Projects!</div>
                  <p>Go to Github.</p>
                  <p>&ensp;</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column" id="tecno">
              <div className="text">Technologies:</div>
              <div className="info">
                <div>
                  <div className="info">
                    <i className="fa-brands fa-react"></i>
                    <span>React.js</span>
                  </div>
                </div>
                <div>
                  <div className="info">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                    <span>jQuery</span>
                  </div>
                </div>
                <div>
                  <div className="info">
                    <i className="fab fa-js-square"></i>
                    <span>Javascript</span>
                  </div>
                </div>
                <div>
                  <i className="fab fa-python"></i>
                  <span> Python</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="fab fa-bootstrap"></i>
                  <span>Bootstrap</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="fa-solid fa-repeat"></i>
                  <span>Ajax</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="fas fa-database"></i>
                  <span>SQL</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="fa-brands fa-git-alt"></i>
                  <span>Git</span>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="text">Soft Skills:</div>
              <div>
                <div className="info">
                  <i className="fas fa-toolbox"></i>
                  <span> Problem-Solving</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="far fa-lightbulb"></i>
                  <span>&ensp;Creativity</span>
                </div>
                <div className="info">
                  <i className="far fa-handshake"></i>
                  <span>Communication</span>
                </div>
                <div className="info">
                  <i className="fas fa-users"></i>
                  <span>Teamwork</span>
                </div>
                <div className="info">
                  <i className="fas fa-door-open"></i>
                  <span>Open-Mindedness</span>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="text">Languages:</div>
              <div>
                <div className="info">
                  <i className="fas fa-globe-europe"></i>
                  <span id="lang"> English: Bilingual</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="fas fa-globe-americas"></i>
                  <span id="lang"> Spanish:</span> <span> Native</span>
                </div>
                <br />
              </div>
              <div className="text">Others:</div>
              <div>
                <div className="info">
                  <i className="fas fa-images"></i>
                  <span> Adobe Photoshop</span>
                </div>
              </div>
              <div>
                <div className="info">
                  <i className="fa-solid fa-rocket"></i>
                  <span> Postman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="about courses" id="about">
        <div className="max-width">
          <h2 className="title2">Recent Courses</h2>
          <div className="about-content about-content2">
            <div className="column left2">
              <div className="coursesContainer">
                <div className="text2">Completed:</div>
                <div>
                  <div className="courseDiv">
                    <a href="https://www.udemy.com/course/react-redux/">
                      <img className="udemyImage" src={Images.ba} alt="logo codo a codo" />
                    </a>
                    <div className="cactext">
                      <div className="textStrong">Modern React with Redux&nbsp</div>
                      / Udemy, by Stephen Grider (2022)
                    </div>
                  </div>
                </div>
                <div>
                  <div className="courseDiv">
                    <a href="https://sabio.la/">
                      <img className="sabioImage" src={Images.sabio} alt="logo codo a codo" />
                    </a>
                    <div className="cactext">
                      <div className="textStrong">React Js&nbsp</div>/ Sabio School of Software Engineering (2022)
                    </div>
                  </div>
                </div>
                <div>
                  <div className="courseDiv">
                    <a href="https://sabio.la/">
                      <img className="sabioImage" src={Images.sabio} alt="logo codo a codo" />
                    </a>
                    <div className="cactext">
                      <div className="textStrong">jQuery and Js Fundamentals&nbsp</div>
                      / Sabio School of Software Engineering (2022)
                    </div>
                  </div>
                </div>
                <div>
                  <div className="courseDiv">
                    <a href="https://sabio.la/">
                      <img className="sabioImage" src={Images.sabio} alt="logo codo a codo" />
                    </a>
                    <div className="cactext">
                      <div className="textStrong">REST Client and Ajax&nbsp</div> / Sabio School of Software Engineering (2022)
                    </div>
                  </div>
                </div>
                <div>
                  <div className="courseDiv">
                    <a href="https://www.buenosaires.gob.ar/educacion/codo-codo">
                      <img className="cac" src={Images.ba} alt="logo codo a codo" />
                    </a>
                    <div className="cactext">
                      <div className="textStrong">Codo a Codo 4.0 FullStack Python&nbsp</div>
                      / Agencia de Aprendizaje a lo Largo de la Vida (2021)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column right2">
              <div className="coursesContainer">
                <div className="text2">In Progress:</div>
                <div>
                  <div className="courseDiv">
                    <a href="https://www.buenosaires.gob.ar/educacion/codo-codo">
                      <img className="cac" src={Images.ba} alt="logo codo a codo" />
                    </a>
                    <div className="cactext">
                      <div className="textStrong">Codo a Codo 4.0 React.js - GO &nbsp</div>
                      / Agencia de Aprendizaje a lo Largo de la Vida (2022-)
                    </div>
                  </div>
                </div>
                <div>
                  <div className="courseDiv">
                    <a href="https://www.ispc.edu.ar/tecnicatura-web/">
                      <img className="ispcImage" src={Images.ispc2} alt="logo codo a codo" />
                    </a>
                    <div className="cactext">
                      <div className="textStrong">Higher Technician in Web Development and Digital Apps&nbsp</div>
                      / ISPC (2022-)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact info</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>You can find me on any of the following networks. Contact me for any question!</p>
              <br />
              <div className="icons">
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">&ensp;CABA</div>
                    <div className="sub-title">&ensp;Buenos Aires, Argentina.</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <a className="head" href="mailto:guidocalciano@gmail.com">
                      guidocalciano@gmail.com
                    </a>
                    <div className="sub-title">E-mail.</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fab fa-github"></i>
                  <div className="info">
                    <div className="head"><a href="https://github.com/guidocano">/guidocano</a></div>
                    <div className="sub-title">Github.</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fab fa-linkedin"></i>
                  <div className="info">
                    <div className="head"><a href="https://www.linkedin.com/in/guidocalciano/">/guidocalciano</a></div>
                    <div className="sub-title">Linkedin.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span>
          <span className="lio2">guidodev</span>
          <span>.com.ar</span> | <a href="#about">Guido Calciano</a> |{" "}
          <span className="far fa-copyright"></span> 2026
          <span className="hide"> All rights reserved</span>.
        </span>
      </footer>

    </div>
  );
}

export default App;