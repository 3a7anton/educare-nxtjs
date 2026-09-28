'use client';

import React, { useState } from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import InvestmentForm from './InvestmentForm';
import { FiPieChart, FiLayers, FiTrendingUp, FiCheck, FiArrowDown } from 'react-icons/fi';

const investmentStructures = [
  {
    type: 'General Shareholders',
    badge: 'Equity Ownership',
    icon: <FiPieChart />,
    description: 'Direct capital participation in the parent group with equity rights and governance eligibility.',
    features: [
      'Acquire equity ownership in the company.',
      'Entitled to dividends as per shareholding and company policy.',
      'Eligible to serve on the Board of Directors.',
      'May transfer ownership in accordance with company guidelines.',
    ],
  },
  {
    type: 'Project Shareholders',
    badge: 'Targeted Ventures',
    icon: <FiLayers />,
    description: 'Direct investment focused on specific institutional projects and infrastructure assets.',
    features: [
      'Individuals or institutions may invest in specific projects.',
      'Returns are based on project-specific profit and loss.',
      'Opportunity to participate in project management.',
      'May transfer ownership in accordance with company guidelines.',
    ],
  },
  {
    type: 'Short & Long-Term Business Investors',
    badge: 'Contractual Capital',
    icon: <FiTrendingUp />,
    description: 'Shariah-compliant capital funding models structured for time-bound partnership growth.',
    features: [
      'In the event of capital requirements, the company may raise funds through Shariah-compliant contracts.',
      'Investments are non-interest-based and time-bound.',
      'Investors receive profit-based returns only.',
      'No involvement in management or operational decisions.',
    ],
  },
];

export default function Investment() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="investment" className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Capital & Shariah Partnership</span>
        <h2 className="section-title">
          <ShinyText
            text="Apply for Investment"
            speed={3}
            color="#1E3A5F"
            shineColor="#C59B27"
            spread={120}
            direction="left"
          />
        </h2>
        <div className="gold-divider" />

        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'left' }}>
          <div
            className="luxury-card"
            style={{
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              borderLeft: '4px solid var(--color-gold-border)',
              background: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-main)', fontSize: '1.02rem', lineHeight: '1.75' }}>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={4}
              >
                Spectrum EduCare Limited recognizes shareholders as key stakeholders who contribute to the company&apos;s mission through capital investment.
              </ScrollReveal>
              <p>
                While shareholders retain ownership rights, they do not directly participate in business operations. Instead, management is carried out through a structured governance model led by elected representatives, ensuring a clear distinction between ownership and operational control.
              </p>
              <p>
                The company promotes transparency through regular financial reporting and audits, and distributes dividends equitably, in line with its commitment to fair and ethical business practices.
              </p>
              <p style={{ fontWeight: 600, color: 'var(--color-primary-blue)', borderTop: '1px solid rgba(197, 155, 39, 0.2)', paddingTop: '0.85rem' }}>
                In adherence to Islamic principles—where interest (Riba) is prohibited and trade is permitted—Spectrum EduCare Limited accepts only Shariah-compliant investments based on partnership models.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Distinct Investment Structures */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--color-primary-blue)' }}>
            Investment Structures
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
            Three structured tiers designed to accommodate ethical institutional and individual investors
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2rem',
          }}
        >
          {investmentStructures.map((struct) => (
            <div
              key={struct.type}
              className="luxury-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '4px solid var(--color-gold-border)',
                background: '#FFFFFF',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
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
                    fontSize: '1.45rem',
                    border: '1px solid rgba(197, 155, 39, 0.25)',
                  }}
                >
                  {struct.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-gold-border)',
                    background: 'rgba(197, 155, 39, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                  }}
                >
                  {struct.badge}
                </span>
              </div>

              <h4 style={{ fontSize: '1.3rem', color: 'var(--color-primary-blue)', marginBottom: '0.5rem' }}>
                {struct.type}
              </h4>

              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {struct.description}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', marginTop: 'auto' }}>
                {struct.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
                    <FiCheck style={{ color: 'var(--color-gold-border)', marginTop: '0.25rem', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setShowForm(true);
                  const formEl = document.getElementById('investment-form-container');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
                style={{ width: '100%' }}
              >
                Apply for this Tier
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Section */}
      <div id="investment-form-container" style={{ maxWidth: '880px', margin: '0 auto' }}>
        <InvestmentForm />
      </div>
    </section>
  );
}
