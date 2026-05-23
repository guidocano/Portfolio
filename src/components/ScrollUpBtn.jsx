import './../App.css'
import { useEffect, useState } from 'react';

export default function ScrollUpBtn() {

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
      <button
        className={`scroll-up-btn ${showScrollBtn ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      >
        <i className="fas fa-angle-up"></i>
      </button>
    )
}