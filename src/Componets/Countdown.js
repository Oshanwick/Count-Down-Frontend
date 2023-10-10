import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';

function Countdown({ title, date, onRemove, index }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date(date) - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    };
  }

  return (
    <div className="CountdownBox" style={{ padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px', background: '#FFF' }}>
    <h2>{title}</h2>
    <p>{timeLeft.days} Days, {timeLeft.hours} Hours</p>
    <button onClick={() => onRemove(index)}>Remove</button>
  </div>
  );
}

export default Countdown;



