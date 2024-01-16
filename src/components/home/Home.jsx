

import React from 'react';
import imgHome from '../home/imgNoDispo.webp';
import '../home/home.css'

const Home = () => {
  return (
    <div className="image-with-headings-container">
      <img src={imgHome} alt="Imagen" className="image" />
      <div className="headings-container">
        <h1>Nombre & Nombre</h1>
        <h2>Save the date</h2>
        <h3>11 de noviembre de 2024</h3>
        <h3>Cuenta regresiva</h3>
      </div>
    </div>
  );
};

export default Home;
