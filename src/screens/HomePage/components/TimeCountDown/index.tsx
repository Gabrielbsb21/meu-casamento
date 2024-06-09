import React, { useState, useEffect } from 'react';
import './style.css';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeCountDown: React.FC = () => {
  const countdownDate = new Date('08/25/2024').getTime();
  const [state, setState] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const setNewTime = () => {
    const currentTime = new Date().getTime();
    const distanceToDate = countdownDate - currentTime;

    if (distanceToDate > 0) {
      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      setState({ days, hours, minutes, seconds });
    } else {
      setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const formatNumber = (num: number): string => num < 10 ? `0${num}` : num.toString();

  return (
    <div className="react-countdown">
      <div className="time-section">
        <div className="time">{formatNumber(state.days)}</div>
        <small className="time-text">Dias</small>
      </div>
      <div className="time-section">
        <div className="time">{formatNumber(state.hours)}</div>
        <small className="time-text">Horas</small>
      </div>
      <div className="time-section">
        <div className="time">{formatNumber(state.minutes)}</div>
        <small className="time-text">Min</small>
      </div>
      <div className="time-section">
        <div className="time">{formatNumber(state.seconds)}</div>
        <small className="time-text">Sec</small>
      </div>
    </div>
  );
};

export default TimeCountDown;


