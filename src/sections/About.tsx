import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpeg';
import { techIcons } from '../components/TechStrip'; 

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I’m Dhiaeddine, a passionate computer science student who loves solving problems 
          and building creative projects. I enjoy exploring new technologies, learning fast, 
          and constantly challenging myself to improve.
        </p>
        <p>
          Some of my favorite tech stacks include HTML, CSS, JavaScript, React, Next.js, 
          Python, Java, and C. Outside coding, I like drawing, manga, and powerlifting.
        </p>

        <div className="about-skills">
          {techIcons.slice(0, 8).map((icon) => (
            <img key={icon.name} src={icon.src} alt={icon.name} title={icon.name} />
          ))}
        </div>
        <div className="about-buttons">
            <a href="mailto:meraddiaeddine08@gmail.com" className="about-button">Contact Me</a>
            <a href="/Dhiaeddine_Merad_CV.pdf" download className="about-button">Download CV</a>
        </div>
      </div>

      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}
