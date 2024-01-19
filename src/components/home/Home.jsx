

import React from 'react';
import imgHome from '../home/imgNoDispo.webp';
import '../home/home.css'
import CountdownTimer from '../home/CountDown';

const Home = () => {
  const targetDate = new Date('2024-01-31T00:00:00');
  return (
    <div id="Home" className="home">

    <div className="home-left">
      <h1 className="home-welcome"><strong> Nombre & Nombre </strong></h1>
      <h2>Save the date</h2>
      <span>11 de Noviembre de 2024</span>
      <br />
      <br />
      <CountdownTimer targetDate={targetDate} />
      <br />
      <br />
    </div>
    <div className="home-right">
      <img src={imgHome} alt="Profile" />
    </div>
  </div>
  );
};

export default Home;
