'use client';

import React from 'react';
import './ShinyText.css';

export default function ShinyText({
  text,
  speed = 3,
  color = '#1E3A5F',
  shineColor = '#C59B27',
  spread = 120,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) {
  const animName = direction === 'left' ? 'shiny-sweep-left' : 'shiny-sweep-right';
  
  // Calculate percentage stops based on spread
  const halfSpread = Math.min(Math.max(spread / 4, 15), 45);
  const start = 50 - halfSpread;
  const end = 50 + halfSpread;

  const backgroundImage = `linear-gradient(110deg, ${color} 0%, ${color} ${start}%, ${shineColor} 50%, ${color} ${end}%, ${color} 100%)`;

  const style = {
    backgroundImage,
    backgroundSize: '250% 100%',
    animation: `${animName} ${speed}s linear infinite`,
  };

  return (
    <span
      className={`shiny-text ${pauseOnHover ? 'pause-hover' : ''} ${className}`}
      style={style}
    >
      {text}
    </span>
  );
}
