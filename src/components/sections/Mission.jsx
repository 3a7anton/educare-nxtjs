'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import { FiTarget, FiCheck } from 'react-icons/fi';

export default function Mission() {
  return (
    <section id="mission" className="section-container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div
        className="luxury-card"
        style={{
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(197, 155, 39, 0.3)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(30, 58, 95, 0.08)', color: 'var(--color-primary-blue)', fontSize: '1.5rem', marginBottom: '1.25rem', border: '1px solid rgba(197, 155, 39, 0.25)' }}>
          <FiTarget />
        </div>

        <span className="section-tag">Institutional Purpose</span>
        
        <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
          <ShinyText
            text="Mission Statement"
            speed={3}
            color="#1E3A5F"
            shineColor="#C59B27"
            spread={120}
            direction="left"
          />
        </h2>

        <div className="gold-divider" />

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary-blue)',
              fontWeight: 700,
              lineHeight: '1.35',
            }}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={4}
            >
              Committed to fostering ethical and educational excellence.
            </ScrollReveal>
          </p>
        </div>
      </div>
    </section>
  );
}
