'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';

const philosophyPillars = [
  { title: 'Islamic Values', desc: 'Moral integrity, spiritual devotion, and Quranic ethics as the core foundation.' },
  { title: 'Academic Rigor', desc: 'World-class curricula meeting global standards in science, arts, and technology.' },
  { title: 'Cultural Identity', desc: 'Grounded heritage fostering confident, respectful global citizens.' },
  { title: 'Psychological Well-being', desc: 'Emotional intelligence, mental resilience, and empathetic nurturing.' },
  { title: 'Social Responsibility', desc: 'Civic engagement, compassionate leadership, and positive community contribution.' },
  { title: 'Physical & Health Growth', desc: 'Active physical development, wholesome nutrition, and balanced lifestyles.' },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Guiding Principles</span>
          <h2 className="section-title">
            <ShinyText
              text="Our Philosophy"
              speed={3}
              color="#1E3A5F"
              shineColor="#C59B27"
              spread={120}
              direction="left"
            />
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Strong Typographic Editorial Statement */}
        <div
          style={{
            borderLeft: '4px solid var(--color-gold-border)',
            paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
            marginBottom: '4rem',
          }}
        >
          <blockquote
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary-blue)',
              lineHeight: '1.6',
              fontWeight: 600,
            }}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={4}
            >
              &ldquo;With a comprehensive blend of Islamic, academic, cultural, psychological, social, physical, and health requirements, Spectrum aims to promote and maintain the growth of positive, well-rounded Muslim children.&rdquo;
            </ScrollReveal>
          </blockquote>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {philosophyPillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="luxury-card"
              style={{
                padding: '2rem 1.75rem',
                borderTop: '3px solid var(--color-gold-border)',
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--color-gold-border)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Pillar 0{i + 1}
              </span>
              <h3
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--color-primary-blue)',
                  marginBottom: '0.6rem',
                }}
              >
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
