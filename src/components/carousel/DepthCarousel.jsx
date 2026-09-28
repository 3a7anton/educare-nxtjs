'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import './DepthCarousel.css';

export default function DepthCarousel({
  items = [],
  depth = 220,
  spread = 90,
  tilt = 22,
  tiltDirection = 'right',
  perspective = 1400,
  visibleCards = 4,
  falloff = 0.2,
  blur = 6,
  autoplay = true,
  autoplayDelay = 3200,
  loop = true,
  showControls = true,
  showIndicators = true,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = items.length;

  const nextCard = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (loop ? (prev + 1) % total : Math.min(prev + 1, total - 1)));
  }, [total, loop]);

  const prevCard = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (loop ? (prev - 1 + total) % total : Math.max(prev - 1, 0)));
  }, [total, loop]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    const timer = setInterval(() => {
      nextCard();
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, nextCard, total]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -40) nextCard();
    else if (diff > 40) prevCard();
    touchStartX.current = null;
  };

  if (!items || items.length === 0) return null;

  const effectiveSpread = isMobile ? spread * 0.45 : spread;
  const effectiveDepth = isMobile ? depth * 0.75 : depth;
  const effectiveTilt = isMobile ? tilt * 0.6 : tilt;

  return (
    <div
      className={`depth-carousel-wrapper ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="depth-carousel-viewport"
        style={{ perspective: `${perspective}px` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => {
          let offset = index - activeIndex;
          if (loop) {
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;
          }

          const absOffset = Math.abs(offset);
          const isVisible = absOffset < visibleCards;
          if (!isVisible) return null;

          const isActive = offset === 0;
          const sign = offset >= 0 ? 1 : -1;

          const z = -absOffset * effectiveDepth;
          const x = offset * effectiveSpread;
          const rotY = tiltDirection === 'right' ? -offset * effectiveTilt : offset * effectiveTilt;
          const cardBlur = absOffset * blur;
          const opacity = Math.max(0.2, Math.pow(1 - falloff, absOffset));
          const scale = Math.pow(0.92, absOffset);
          const zIndex = 20 - absOffset;

          return (
            <div
              key={item.id || index}
              className={`depth-card ${isActive ? 'is-active' : ''}`}
              style={{
                transform: `translate3d(calc(-50% + ${x}px), -50%, ${z}px) rotateY(${rotY}deg) scale(${scale})`,
                opacity,
                filter: `blur(${cardBlur}px)`,
                zIndex,
              }}
              onClick={() => {
                if (!isActive) setActiveIndex(index);
              }}
            >
              <div className="depth-card-media">
                {item.status && <div className="depth-card-status">{item.status}</div>}
                <img
                  src={item.image}
                  alt={item.title}
                  className="depth-card-img"
                  loading={isActive ? 'eager' : 'lazy'}
                />
              </div>

              <div className="depth-card-content">
                <div>
                  <h3 className="depth-card-title">{item.title}</h3>
                  <p className="depth-card-desc">{item.description}</p>
                </div>

                <div className="depth-card-footer">
                  {item.link ? (
                    <Link href={item.link} className="depth-card-action">
                      <span>{item.actionText || 'Project Overview'}</span>
                      <FiArrowRight />
                    </Link>
                  ) : (
                    <span className="depth-card-action" style={{ cursor: 'default' }}>
                      <span>{item.actionText || 'Under Development'}</span>
                      <FiArrowRight />
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {(showControls || showIndicators) && (
        <div className="depth-controls">
          {showControls && (
            <button
              onClick={prevCard}
              className="depth-btn"
              aria-label="Previous project"
            >
              <FiChevronLeft />
            </button>
          )}

          {showIndicators && (
            <div className="depth-indicators">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`depth-dot ${i === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          )}

          {showControls && (
            <button
              onClick={nextCard}
              className="depth-btn"
              aria-label="Next project"
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
