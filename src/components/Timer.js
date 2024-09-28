import React, { useState, useEffect } from 'react';

const SemiCircleTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [chak, setChak] = useState(false);
  const [audio, setAudio] = useState(null); // Keep track of the audio element

  const startTimer = () => {
    setIsActive(true);
  };

  useEffect(() => {
    // Create the audio element when the timer starts
    if (!audio) {
      const audioElement = new Audio('/chak.mp3');
      setAudio(audioElement);
    }

    if (isActive && timeLeft > 0) {
      if (!chak && audio) {
        audio.play(); // Play the audio
        setChak(true);
      }
      
      const timerId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1 && audio) {
            audio.pause(); // Pause the audio when time is about to end
            audio.currentTime = 0; // Reset the audio
          }
          return prev - 1; // Update the timer countdown
        });
      }, 1000);
      
      return () => {
        clearInterval(timerId);
      };
    }

    // If time reaches 0, pause and remove the audio
    if (timeLeft === 0 && audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.src = ''; // Remove the audio source to clean it up
      setAudio(null); // Clear the audio element reference
      setIsActive(false);
      setChak(false);
    }

    startTimer(); // Ensure the timer starts
  }, [isActive, timeLeft, chak, audio]); // Add 'audio' to the dependency array

  const percentage = (timeLeft / 10) * 100;

  const timerStyle = {
    position: 'relative',
    width: '100px',
    height: '50px',
    background: `conic-gradient(
      #3498db ${percentage * 1.8}deg, 
      #e0e0e0 0deg
    )`,
    borderRadius: '100px 100px 0 0',
    overflow: 'hidden',
  };

  const circleContainer = {
    position: 'relative',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const timeText = {
    position: 'absolute',
    bottom: '25%',
    width: '100%',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    zIndex: "100",
    color: "red",
  };

  return (
    <div className="mb-5">
      <div style={{
        position: "absolute",
        bottom: "32.4vh",
        left: "37.5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        opacity: "0.9",
      }}>
        <div style={circleContainer}>
          <div style={timerStyle}></div>
          <div style={timeText}>{timeLeft}s</div>
        </div>
      </div>
    </div>
  );
};

export default SemiCircleTimer;
