import React from 'react';
import logo from './logo.svg';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero'
import Projects from './sections/Projects';
import TechStrip from './components/TechStrip';
import About from './sections/About';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStrip />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
