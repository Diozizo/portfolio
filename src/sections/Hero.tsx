import React from 'react';
import './Hero.css';
import heroImage from '../assets/unnamed.png';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Diozizo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dhiaeddine-merad-9126b4320/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
  { name: 'Email', url: 'mailto:meraddiaeddine08@gmail.com', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className='hero-title'>Hi, I'm Dhiaeddine</h1>
        <h2 className="hero-h2">A Computer Science Student</h2>
        <p className="hero-subtitle">
          Welcome to my portfolio showcasing my projects and skills. I love building creative solutions and exploring new technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button">View Projects</a>
        </div>

        <div className="hero-socials">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.name} title={link.name} />
            </a>
          ))}
        </div>
      </div>

      <div className='image-container'>
        <img src={heroImage} alt="hero" className="hero-img" />
      </div>
    </section>
  )
}
