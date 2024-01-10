// Navbar.js
import React, { useState } from 'react';
import './navbar.css'; // Agrega estilos según sea necesario

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">Nombre del Sitio</div>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <a href="#seccion1">Sección 1</a>
          <a href="#seccion2">Sección 2</a>
          <a href="#seccion3">Sección 3</a>
          <a href="#seccion4">Sección 4</a>
          <a href="#seccion5">Sección 5</a>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          &#9776; {/* Icono de hamburguesa */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
