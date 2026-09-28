'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import { FiShield, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

export default function FinancialOverview() {
  return (
    <section id="financial-overview" className="section-container" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Fiscal Integrity & Stewardship</span>
        <h2 className="section-title">
          <ShinyText
            text="Financial Overview"
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
              fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary-blue)',
              fontWeight: 600,
              lineHeight: '1.6',
            }}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={4}
            >
              Spectrum EduCare Limited stands as a key player in the education sector, distinguished by its commitment to quality learning and financial integrity.
            </ScrollReveal>
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '2.5rem',
        }}
      >
        {/* Financial Transparency */}
        <div
          className="luxury-card"
          style={{
            padding: '2.5rem 2.25rem',
            background: '#FFFFFF',
            borderTop: '4px solid var(--color-gold-border)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'rgba(30, 58, 95, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary-blue)',
                fontSize: '1.5rem',
                border: '1px solid rgba(197, 155, 39, 0.25)',
              }}
            >
              <FiShield />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold-border)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Governance Pillar
              </span>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-blue)', margin: 0 }}>
                Financial Transparency
              </h3>
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: '1.8', margin: 0 }}>
            The company ensures complete transparency in its financial operations. Spectrum EduCare follows rigorous <strong>International Financial Reporting Standards (IFRS)</strong>, facilitating clear, accurate, and honest reporting of its financial activities. This level of openness is maintained through regular independent audits, reinforcing trust among stakeholders.
          </p>
        </div>

        {/* Dividend Policy */}
        <div
          className="luxury-card"
          style={{
            padding: '2.5rem 2.25rem',
            background: '#FFFFFF',
            borderTop: '4px solid var(--color-gold-border)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'rgba(30, 58, 95, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary-blue)',
                fontSize: '1.5rem',
                border: '1px solid rgba(197, 155, 39, 0.25)',
              }}
            >
              <FiTrendingUp />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold-border)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Sustainable Growth
              </span>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-blue)', margin: 0 }}>
                Dividend Policy
              </h3>
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: '1.8', margin: 0 }}>
            The company has a balanced dividend policy that reflects its financial performance and long-term growth goals. Dividends are paid out in a manner that rewards shareholders while simultaneously ensuring that adequate funds are reinvested into the business for future development. This approach allows the company to maintain financial flexibility and sustainability over time.
          </p>
        </div>
      </div>
    </section>
  );
}
