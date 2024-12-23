import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import StartMenu from './StartMenu';

export default function Taskbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <StartMenu 
        isOpen={isStartMenuOpen} 
        onClose={() => setIsStartMenuOpen(false)} 
      />
      <div className="taskbar">
        <button 
          className="start-button"
          onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        >
          <img src="/windows-logo.png" alt="Windows" className="w-4 h-4" />
          Start
        </button>
        <div className="flex-1" />
        <div className="time-display">
          {format(currentTime, 'h:mm a')}
        </div>
      </div>
    </>
  );
}