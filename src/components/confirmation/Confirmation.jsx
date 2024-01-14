import React from 'react';
import './confirmation.css';

const Confirmation = () => {
  return (
    <>
    <div className='general-confirmation'>
    <h2>
        Esperamos tu confirmacion
    </h2>
    <p className='parrafo-confirmation'>
    Nuestro festejo no sería lo mismo sin vos. Confirmanos tu presencia a traves del enlace a continuación, y anota cualquier restricción dietética o petición especial.
    </p>
    <button className='button-confirmation'>
      Confirmar presencia
    </button>
    </div>
    </>
  )
}

export default Confirmation