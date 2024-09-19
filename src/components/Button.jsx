import React, { useState } from 'react';

const Button = ({ children, classes, onClick, popup }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (event) => {
    setIsAnimating(true);

    // Call the onClick prop function if provided
    if (onClick) {
      onClick(event);
    }

    // Remove the animation class after the animation duration (e.g., 0.4s)
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // The timeout should match the length of the animation
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${classes ? classes : "px-4 py-2 min-w-[200px] bg-green-500 text-center hover:bg-vitalUi-greenSat hover:font-bold border-green-900 border transition-all text-white rounded-lg shadow-sm"} ${isAnimating ? 'click-animation-active' : ''} relative click-animation`}
        onClick={handleClick}
      >
        {children}
      </div>

      {isHovered && popup && (
        <div className="bg-white dark:bg-gray-900 absolute w-[100px] font-medium flex items-center justify-center text-[10px] bottom-14 -right-7 h-[20px] rounded-lg shadow-sm">
          {popup} 
        </div>
      )}
    </div>
  );
};


export default Button;
