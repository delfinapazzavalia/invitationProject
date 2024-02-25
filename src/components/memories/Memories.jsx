import React from "react";
import '../memories/memories.css'
import camera from '../memories/camera-png.webp'

const handleClick = () => {
  const seccionElement = document.getElementById('Contact');
  if (seccionElement) {
    seccionElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Memories = () => {
  return (
    <>
    
      <div id="AboutMe" className="about-me-container">
       <img src={camera} alt="Imagen" className="card-image" /> 
       <h2 className="title">Recuerdos</h2>
        <p className="text">
        En este link podes compartirnos y ver fotos del evento
        </p>
        <button onClick={handleClick} class="my-button">Galeria</button>


      </div>
    </>
  );
};

export default Memories;