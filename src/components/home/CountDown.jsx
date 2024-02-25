import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      // La cuenta regresiva ha terminado
      return <span>La cuenta regresiva ha terminado!</span>;
    } else {
      // Renderizar la cuenta regresiva
      return (
        <span>
          {days} días | {hours} horas | {minutes} minutos
        </span>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
