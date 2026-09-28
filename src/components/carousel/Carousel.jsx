'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import './Carousel.css';

export default function Carousel({ items = [], className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!items || items.length === 0) return null;

  return (
    <div className={`rb-carousel-container ${className}`}>
      <div className="rb-carousel-stage">
        {items.map((item, index) => {
          let offset = index - currentIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const isAdjacent = Math.abs(offset) === 1;
          const isVisible = Math.abs(offset) <= (isMobile ? 1 : 2);

          if (!isVisible) return null;

          const xDistance = isMobile ? offset * 240 : offset * 340;
          const scale = isCenter ? 1 : isAdjacent ? (isMobile ? 0.88 : 0.85) : 0.72;
          const opacity = isCenter ? 1 : isAdjacent ? (isMobile ? 0.6 : 0.7) : 0.35;
          const zIndex = 10 - Math.abs(offset);
          const rotateY = isMobile ? offset * -8 : offset * -12;

          return (
            <motion.div
              key={item.id || index}
              className={`rb-carousel-card ${isCenter ? 'active' : ''}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) nextSlide();
                else if (info.offset.x > 40) prevSlide();
              }}
              onClick={() => {
                if (!isCenter) setCurrentIndex(index);
              }}
              initial={false}
              animate={{
                x: xDistance,
                scale,
                opacity,
                zIndex,
                rotateY,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 26,
              }}
            >
              <div className="rb-card-media">
                {item.badge && <span className="rb-card-badge">{item.badge}</span>}
                <img
                  src={item.image}
                  alt={item.title}
                  loading={isCenter ? 'eager' : 'lazy'}
                />
              </div>

              <div className="rb-card-body">
                <div>
                  <h3 className="rb-card-title">{item.title}</h3>
                  <p className="rb-card-desc">{item.description}</p>
                </div>

                {item.link ? (
                  <Link href={item.link} className="rb-card-action">
                    <span>{item.actionText || 'Explore Concern'}</span>
                    <FiArrowRight />
                  </Link>
                ) : (
                  <div className="rb-card-action" style={{ cursor: 'default' }}>
                    <span>{item.actionText || 'Key Initiative'}</span>
                    <FiArrowRight />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="rb-carousel-controls">
        <button
          onClick={prevSlide}
          className="rb-nav-btn"
          aria-label="Previous Sister Concern"
        >
          <FiChevronLeft />
        </button>

        <div className="rb-indicators">
          {items.map((_, i) => (
            <button
              key={i}
              className={`rb-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="rb-nav-btn"
          aria-label="Next Sister Concern"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
