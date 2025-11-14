import React, { useState, useEffect } from "react";
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <section>
      <div className={`nav-overlay ${isMenuOpen ? 'show' : ''}`}></div>

      <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
        <button className="hamburger-menu" onClick={handleMenuToggle}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <ul className={`nav-ul ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-li"><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li className="nav-li"><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li className="nav-li"><a href="#about" onClick={handleLinkClick}>About</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
