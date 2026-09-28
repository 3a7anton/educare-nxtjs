'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import { FiUsers, FiAward, FiBriefcase, FiBookOpen } from 'react-icons/fi';

const governanceBodies = [
  {
    title: 'Advisory Board',
    role: 'Strategic Direction & Oversight',
    icon: <FiAward />,
    description:
      'Provides high-level strategic counsel, institutional governance guidelines, and long-term expansion oversight to safeguard the institution’s core vision.',
    badge: 'Strategic Counsel',
  },
  {
    title: 'Scholars Forum',
    role: 'Islamic Ethics & Shariah Compliance',
    icon: <FiBookOpen />,
    description:
      'Guarantees moral grounding, validates pedagogical alignment with Quranic principles, and ensures strict Shariah compliance across all financial and institutional practices.',
    badge: 'Ethical Authority',
  },
  {
    title: 'Management Board',
    role: 'Executive Execution & Operations',
    icon: <FiBriefcase />,
    description:
      'Governs day-to-day administrative affairs, financial transparency, compliance with IFRS standards, and equitable operational execution across sister concerns.',
    badge: 'Executive Stewardship',
  },
  {
    title: 'Academic Professionals',
    role: 'Pedagogy & Curriculum Innovation',
    icon: <FiUsers />,
    description:
      'Comprises experienced educators, researchers, and subject experts dedicated to classroom excellence, teacher mentoring, and continuous academic enrichment.',
    badge: 'Curriculum Excellence',
  },
];

export default function ManagementStructure() {
  return (
    <section id="management" className="section-container" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Governance & Corporate Integrity</span>
        <h2 className="section-title">
          <ShinyText
            text="Management Structure"
            speed={3}
            color="#1E3A5F"
            shineColor="#C59B27"
            spread={120}
            direction="left"
          />
        </h2>
        <div className="gold-divider" />

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={4}
            textClassName="section-subtitle"
          >
            In continuation of this vision, Spectrum EduCare was reformed in 2024 to institutionalize social business initiatives and create sustainable impact in the education sector. This restructured entity operates as a jointly owned (shareholder-based) company and is governed by the following administrative bodies:
          </ScrollReveal>
        </div>
      </div>

      {/* Organizational Structure Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          position: 'relative',
        }}
      >
        {governanceBodies.map((body, index) => (
          <div
            key={body.title}
            className="luxury-card"
            style={{
              padding: '2.25rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderTop: '4px solid var(--color-gold-border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(30, 58, 95, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary-blue)',
                  fontSize: '1.4rem',
                  border: '1px solid rgba(197, 155, 39, 0.25)',
                }}
              >
                {body.icon}
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-gold-border)',
                  background: 'rgba(197, 155, 39, 0.1)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                }}
              >
                {body.badge}
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-blue)', marginBottom: '0.4rem' }}>
              {body.title}
            </h3>

            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold-border)', marginBottom: '0.85rem' }}>
              {body.role}
            </p>

            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.65', margin: 0, marginTop: 'auto' }}>
              {body.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
