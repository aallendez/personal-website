import { useState, useEffect } from 'react';
import './App.css';

import Title from './components/Title';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

// lib/utils.js
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


const MovingCircle = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="circle"></div>
    </div>
  );
};

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const iconColor = theme === 'dark' ? '#ffffff' : '#000000';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className={`w-full xs:px-6 sm:px-2 px-32 lg:px-[20%] h-screen ${theme} cursor-default`}>
        <div className='px-20'>
          <Header theme={theme} toggleTheme={toggleTheme} iconColor={iconColor} />
          <Title theme={theme} iconColor={iconColor} />
          <AboutMe iconColor={iconColor} />
          <Projects iconColor={iconColor} />
          <MouseGlow />
        </div>
      </div>
    </>
  );
}

export default App;

