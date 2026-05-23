import './../App.css';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home () {
      const el1 = useRef(null);

        useEffect(() => {
      
          const typed1 = new Typed(el1.current, {
            strings: [
              "a developer.",
              "a critical thinker.",
              "a technical problem solver.",
              "a business solution analyst.",
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
          });
      
      
          return () => {
            typed1.destroy();
          };
        }, []);

    return (
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
        
    )
}