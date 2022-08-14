import React, { useEffect } from 'react';

import Home from './components/Home/Home';
import Navbar from './components/Nav/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import './App.css';

function App() {
  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }

  useEffect(() => {
    appHeight();
  });

  return (
    <div>
      <Home />
      <Navbar />
      <div className="section">
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
