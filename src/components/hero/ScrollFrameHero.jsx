'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import './ScrollFrameHero.css';

const TOTAL_FRAMES = 40;

function formatFrameNumber(num) {
  return String(num).padStart(3, '0');
}

export default function ScrollFrameHero({ onHeroPassed }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(1);
  const [revealProgress, setRevealProgress] = useState(0); // 0 to 1 at the end of scroll
  const animFrameId = useRef(null);
  const targetFrameRef = useRef(1);
  const activeFrameRef = useRef(1);

  // Preload frames
  useEffect(() => {
    let isCancelled = false;
    const imgs = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/home page/framer/ezgif-frame-${formatFrameNumber(i)}.jpg`;
      img.onload = () => {
        if (isCancelled) return;
        count++;
        setLoadedCount(count);
      };
      imgs.push(img);
    }

    imagesRef.current = imgs;

    return () => {
      isCancelled = true;
    };
  }, []);

  // Draw current frame to canvas with aspect ratio cover
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIdx - 1];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const w = canvas.width;
    const h = canvas.height;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    const canvasRatio = w / h;
    const imgRatio = imgW / imgH;

    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = w;
      drawH = w / imgRatio;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * imgRatio;
      drawY = 0;
      drawX = (w - drawW) / 2;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Resize canvas according to device pixel ratio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      renderFrame(activeFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  // Scroll listener using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) {
          ticking = false;
          return;
        }

        const rect = container.getBoundingClientRect();
        const totalScrollable = container.offsetHeight - window.innerHeight;
        const currentScrolled = -rect.top;

        if (totalScrollable > 0) {
          // Progress from 0 to 1
          const progress = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1);
          
          // Map to 1..TOTAL_FRAMES
          const frameNum = Math.min(
            TOTAL_FRAMES,
            Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
          );
          targetFrameRef.current = frameNum;

          // End reveal progress starts at 88% scroll progress
          if (progress > 0.88) {
            const rev = (progress - 0.88) / 0.12;
            setRevealProgress(Math.min(1, Math.max(0, rev)));
          } else {
            setRevealProgress(0);
          }

          // Callback to notify parent if hero is passed (progress > 0.95)
          if (onHeroPassed) {
            onHeroPassed(progress > 0.92);
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onHeroPassed]);

  // Animation loop to render canvas smoothly at 60fps
  useEffect(() => {
    const loop = () => {
      animFrameId.current = window.requestAnimationFrame(loop);
      if (activeFrameRef.current !== targetFrameRef.current) {
        activeFrameRef.current = targetFrameRef.current;
        setCurrentFrameIndex(activeFrameRef.current);
        renderFrame(activeFrameRef.current);
      }
    };

    animFrameId.current = window.requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [renderFrame]);

  // Initial draw once first frame loads
  useEffect(() => {
    if (loadedCount >= 1) {
      renderFrame(1);
    }
  }, [loadedCount, renderFrame]);

  const scrollToContent = () => {
    const container = containerRef.current;
    if (!container) return;
    const nextSection = container.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: container.offsetHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={containerRef} className="hero-scroll-container" id="hero">
      <div className="hero-sticky-viewport">
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Ambient Top & Bottom overlay cues during scroll */}
        <div
          className="hero-overlay"
          style={{
            opacity: revealProgress > 0.4 ? 0 : 1,
            pointerEvents: 'none',
          }}
        >
          <div className="hero-top-badge">
            <span>Spectrum EduCare Limited</span>
          </div>

          <div className="hero-scroll-prompt">
            <span>Scroll to Experience</span>
            <div className="hero-mouse-icon">
              <div className="hero-mouse-wheel" />
            </div>
          </div>
        </div>

        {/* End of Hero - Prominent Logo & Conclusion Reveal */}
        <div
          className="hero-reveal-overlay"
          style={{
            opacity: revealProgress,
            transform: `scale(${0.96 + revealProgress * 0.04})`,
            pointerEvents: revealProgress > 0.7 ? 'auto' : 'none',
          }}
        >
          <img
            src="/logo main.png"
            alt="Spectrum EduCare Limited"
            className="hero-reveal-logo"
          />
          <h1 className="hero-reveal-title">
            The Parent Group Pioneering Progressive Values-Centric Education
          </h1>
          <p className="hero-reveal-subtitle">
            Seamlessly integrating globally recognized academic standards with timeless Islamic ethical values across schools, research think tanks, and social initiatives.
          </p>

          <div className="hero-reveal-actions">
            <button onClick={scrollToContent} className="btn-primary">
              <span>Explore Spectrum EduCare</span>
              <FiArrowDown />
            </button>
            <a href="#about" className="btn-outline">
              Our Story & Leadership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
