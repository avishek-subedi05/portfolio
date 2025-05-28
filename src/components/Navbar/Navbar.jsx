import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/Logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar container">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
