import React, { useEffect } from "react";

import Home from "./components/Home/Home";
import Navbar, { BurgerMenu } from "./components/Nav/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { About } from "./components/About/About";

import "./App.css";

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--vho", window.innerHeight * 0.01 + "px");
  }

  window.addEventListener("resize", appHeight);
  appHeight();

  return (
    <>
      <BurgerMenu open={open} setOpen={setOpen} />
      <Home />
      <Navbar open={open} setOpen={setOpen} />
      <div className="section">
        <About />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default App;
