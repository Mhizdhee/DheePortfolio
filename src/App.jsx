import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';

const App = ()=> {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
