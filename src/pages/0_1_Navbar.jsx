import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="https://your-logo-image-url.com" alt="Your Company Logo" />
          <style>
            margin-left: 0%;
            Margin-top : 1px;
          </style>
        </a>
        <div className="social-links">
          <a href="https://www.facebook.com/SAIC.Thapar/">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://www.youtube.com/@saictv7529">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
          <a href="https://www.instagram.com/saic_tiet/">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/company/student-alumni-interaction-cell/mycompany/">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;