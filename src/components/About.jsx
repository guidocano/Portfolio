import "./../App.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function About() {
  const el2 = useRef(null);

  useEffect(() => {
    const typed2 = new Typed(el2.current, {
      strings: ["a developer."],
      typeSpeed: 200,
      loop: false,
    });

    return () => {
      typed2.destroy();
    };
  }, []);

  return (
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
              <strong>global corporate environments.</strong> Expert at bridging
              complex business requirements with scalable technical solutions,
              backed by a <strong>Psychology degree (UBA)</strong> and{" "}
              <strong>technical training (UTN)</strong>. Focused on delivering
              high-impact software and intuitive user experiences for global
              cross-functional teams.
            </p>
          </div>
          <div className="buttonContainer cvs">
            <a
              href="./assets/CV_Guido_Calciano_Software_Dev.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
