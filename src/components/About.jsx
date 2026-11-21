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
              I'm a software developer based in Buenos Aires, Argentina (GMT-3). Since 2023 I've been
              building business applications and process automations for global teams at{" "}
              <strong>Boehringer Ingelheim</strong>, working in English every day with stakeholders
              across the US and Europe.
              <br/><br/>
              My main focus now is web development with <strong>React</strong>, <strong>Next.js</strong>{" "}
              and <strong>TypeScript</strong>. My most recent project is{" "}
              <a href="https://sellando.com.ar" target="_blank" rel="noreferrer">Stampit</a>, a travel
              social network where users collect illustrated stamps for the places they visit,
              starting with Argentina. I built it end to end, from product and design to deployment, using AI-assisted
              development, and it's live in production.
              <br/><br/>
              I hold a degree in <strong>Psychology</strong> from the University of Buenos Aires, which
              shapes how I approach products: I think about the people using them as much as the code
              behind them.
            </p>
          </div>
          <div className="buttonContainer cvs">
                      <br/>
            <a
              href="./assets/Guido_Calciano_Software_Developer_CV.pdf"
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
