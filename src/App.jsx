import Navbar from "./components/Navbar";
import ScrollUpBtn from "./components/ScrollUpBtn";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <ScrollUpBtn />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
