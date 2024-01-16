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
        <div className="brand">Nombre & Nombre</div>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <a href="#seccion1">Eventos</a>
          <a href="#seccion2">Confirmacion</a>
          <a href="#seccion3">Regalos</a>
          <a href="#seccion4">Mas</a>

        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          &#9776; {/* Icono de hamburguesa */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
