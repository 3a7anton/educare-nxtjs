'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 3,
  blurStrength = 5,
  containerClassName = '',
  textClassName = '',
  rotationAxis = 'x',
}) {
  const containerRef = useRef(null);

  const textContent = useMemo(() => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children.map(c => (typeof c === 'string' ? c : '')).join(' ');
    }
    return '';
  }, [children]);

  const words = useMemo(() => {
    if (!textContent) return [];
    return textContent.split(' ');
  }, [textContent]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || words.length === 0) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const wordEls = el.querySelectorAll('.scroll-reveal-word');
      if (!wordEls.length) return;

      gsap.fromTo(
        wordEls,
        {
          opacity: baseOpacity,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
          rotationX: rotationAxis === 'x' ? baseRotation : 0,
          rotationY: rotationAxis === 'y' ? baseRotation : 0,
          y: 8,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          rotationX: 0,
          rotationY: 0,
          y: 0,
          stagger: 0.025,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: false,
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [baseOpacity, enableBlur, baseRotation, blurStrength, rotationAxis, words]);

  if (!textContent) {
    return <div className={containerClassName}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
      <span className={textClassName}>
        {words.map((word, i) => (
          <span key={i} className="scroll-reveal-word">
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </div>
  );
}
