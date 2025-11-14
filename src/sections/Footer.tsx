import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Dhiaeddine Merad. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/Diozizo" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/dhiaeddine-merad-9126b4320/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:meraddiaeddine08@gmail.com">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}
