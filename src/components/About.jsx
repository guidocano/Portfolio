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
              Analytical Software Developer with over 3 years of experience delivering high-impact solutions within{" "}
              <strong>global corporate environments.</strong> I specialize in bridging
              complex business requirements with scalable technical solutions, combining my
              background in <strong>Psychology (UBA)</strong> with{" "}
              <strong>technical training (UTN)</strong> to build intuitive, user-centric software.
              <br/><br/>
              My core expertise spans <strong>frontend development</strong> and <strong>enterprise cloud solutions</strong>, engineering robust applications using <strong>JavaScript, React.js, Next.js, and SQL.</strong> Experienced in working within agile cross-functional teams under <strong>Scrum</strong> methodologies, I manage modern software lifecycles and technical documentation fluently in both native Spanish and C2-certified English.
            </p>
          </div>
          <div className="buttonContainer cvs">
                      <br/>
            <a
              href="./assets/CV_Guido_Calciano_Software_Developer.pdf"
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
