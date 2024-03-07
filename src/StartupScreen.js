import React, { useState, useEffect } from 'react';
import './StartupScreen.css';
import videoSource from './2.mp4';

function StartupScreen() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 5000); // Set the delay to 5 seconds

    return () => clearTimeout(timer);
  }, []); // Runs once on component mount

  return (
    <div className="startup-container">
      <div className={`startup-video-text ${showHome ? 'show-home' : ''}`}>
        <div className="startup-video-container">
          <video autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
        <span className={`startup-text ${showHome ? 'red' : ''}`}>H</span>
        <span className={`startup-text ${showHome ? 'red' : ''} ${showHome ? 'zoom' : ''}`}>O</span>
        <span className={`startup-text ${showHome ? 'red' : ''}`}>P</span>
        <span className={`startup-text ${showHome ? 'red' : ''}`}>E</span>
        <span className={`startup-text ${showHome ? 'red' : ''}`}>S</span>
      </div>
    </div>
  );
}

export default StartupScreen;
