'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import './style.css';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIfLoaded = setInterval(() => {
      if (/loaded|complete/.test(document.readyState)) {
        clearInterval(checkIfLoaded);
        setIsLoaded(true);
      }
    }, 1000);

    return () => clearInterval(checkIfLoaded);
  }, []);

  return (
    <div className={`preloader ${isLoaded ? 'hidden' : ''}`}>
      <div className="loading-heart">
        <svg viewBox="0 0 512 512" width="100">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>
        <div className="preloader-title">
          Gabriel
          <br />
          <small>&</small>
          <br />
          Gabriela
        </div>
      </div>
    </div>
  );
};

export default Preloader;
