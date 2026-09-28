'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';

export default function Vision() {
  return (
    <section id="vision" className="section-container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div
        className="luxury-card"
        style={{
          padding: 'clamp(2.5rem, 5vw, 4.5rem)',
          background: 'linear-gradient(135deg, #112338 0%, #1E3A5F 100%)',
          color: '#FFFFFF',
          borderRadius: '28px',
          border: '1.5px solid rgba(197, 155, 39, 0.45)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -10px rgba(17, 35, 56, 0.35)',
        }}
      >
        {/* Subtle decorative Islamic geometric watermark */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(197, 155, 39, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#E5C365',
              background: 'rgba(229, 195, 101, 0.12)',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(229, 195, 101, 0.3)',
              marginBottom: '1.5rem',
            }}
          >
            Spiritual & Ethical Foundation
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#FFFFFF', marginBottom: '1.5rem' }}>
            <ShinyText
              text="Your Vision"
              speed={3}
              color="#FFFFFF"
              shineColor="#E5C365"
              spread={120}
              direction="left"
            />
          </h2>

          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #E5C365, transparent)',
              margin: '0 auto 2rem',
            }}
          />

          <div style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)', lineHeight: '1.85', color: '#F0EAE1', fontStyle: 'italic', fontWeight: 300 }}>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={4}
            >
              &ldquo;Islam is a comprehensive religion that encompasses all aspects of life. According to the Prophet Muhammad (Peace be upon him), in order to build an Islamic personality, we must instil positive thoughts and behaviour as well as distinct and balanced features at a young age.&rdquo;
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
