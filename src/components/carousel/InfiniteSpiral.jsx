'use client';

import React, { useEffect, useRef, useState } from 'react';
import './InfiniteSpiral.css';

export default function InfiniteSpiral({
  items = [],
  animationMode = 'all',
  speed = 0.45,
  radius = 170,
  cardWidth = 110,
  cardHeight = 110,
  verticalSpacing = 65,
  perspective = 1000,
  cardRadius = 12,
  centerScale = 1.2,
  edgeBlur = 5,
  cardsPerTurn = 7,
  pauseOnHover = true,
  className = '',
}) {
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const isHoveredRef = useRef(false);
  const animFrameRef = useRef(null);
  const [responsiveRadius, setResponsiveRadius] = useState(radius);
  const [responsiveCardSize, setResponsiveCardSize] = useState({ w: cardWidth, h: cardHeight });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setResponsiveRadius(Math.min(radius, 135));
        setResponsiveCardSize({ w: Math.max(cardWidth, 115), h: Math.max(cardHeight, 115) });
      } else if (w < 768) {
        setResponsiveRadius(Math.min(radius, 150));
        setResponsiveCardSize({ w: Math.max(cardWidth, 120), h: Math.max(cardHeight, 120) });
      } else {
        setResponsiveRadius(radius);
        setResponsiveCardSize({ w: cardWidth, h: cardHeight });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [radius, cardWidth, cardHeight]);

  useEffect(() => {
    let lastTime = performance.now();
    let currentAngle = 0;
    let currentY = 0;
    const totalItems = items.length;
    if (totalItems === 0) return;

    const totalHeight = totalItems * verticalSpacing;

    const tick = (time) => {
      animFrameRef.current = requestAnimationFrame(tick);
      if (pauseOnHover && isHoveredRef.current) {
        lastTime = time;
        return;
      }
      const dt = (time - lastTime) * 0.001;
      lastTime = time;

      // Update angle
      currentAngle += dt * speed;
      // Update vertical progression
      currentY = (currentY + dt * speed * 25) % totalHeight;

      setRotationAngle(currentAngle);
      setOffsetY(currentY);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [items.length, speed, pauseOnHover, verticalSpacing]);

  if (!items || items.length === 0) return null;

  const totalItems = items.length;
  const totalHeight = totalItems * verticalSpacing;

  return (
    <div
      ref={containerRef}
      className={`infinite-spiral-viewport ${className}`}
      style={{ perspective: `${perspective}px` }}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <div className="infinite-spiral-scene">
        {items.map((item, index) => {
          // Calculate angle for this item
          const baseAngle = (index / cardsPerTurn) * 2 * Math.PI;
          const theta = baseAngle + rotationAngle;

          // X and Z coordinates in the cylindrical coordinate system
          const x = responsiveRadius * Math.sin(theta);
          const z = responsiveRadius * Math.cos(theta);

          // Calculate wrapped Y position
          let rawY = (index * verticalSpacing - offsetY);
          // Wrap around so cards loop infinitely
          while (rawY > totalHeight / 2) rawY -= totalHeight;
          while (rawY < -totalHeight / 2) rawY += totalHeight;

          // Depth calculations
          const normalizedZ = (z + responsiveRadius) / (2 * responsiveRadius); // 0 (far) to 1 (near)
          const scale = 0.8 + normalizedZ * (centerScale - 0.8);
          const blur = (1 - normalizedZ) * edgeBlur;
          const opacity = 0.45 + normalizedZ * 0.55;
          const zIndex = Math.round(normalizedZ * 100);

          return (
            <div
              key={item.id || index}
              className="spiral-card"
              style={{
                width: `${responsiveCardSize.w}px`,
                height: `${responsiveCardSize.h}px`,
                borderRadius: `${cardRadius}px`,
                transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${rawY}px), ${z}px) rotateY(${(-theta * 180) / Math.PI}deg) scale(${scale})`,
                filter: `blur(${blur}px)`,
                opacity,
                zIndex,
              }}
            >
              <img
                src={item.image}
                alt={item.title || `Gallery item ${index + 1}`}
                className="spiral-card-img"
                loading="lazy"
              />
              {item.title && (
                <div className="spiral-card-label">{item.title}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
