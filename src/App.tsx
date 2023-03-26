import React, { useEffect } from "react";

import Home from "./components/Home/Home";
import Navbar, { BurgerMenu } from "./components/Nav/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <BurgerMenu open={open} setOpen={setOpen} />
      <Home />
      <Navbar open={open} setOpen={setOpen} />
      <div className="section">
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
