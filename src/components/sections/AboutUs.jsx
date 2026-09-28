'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import InfiniteSpiral from '../carousel/InfiniteSpiral';
import { FiCheckCircle, FiAward, FiCalendar, FiCompass } from 'react-icons/fi';

const aboutImages = [
  { id: 1, image: '/images/spectrum_school_campus.jpg', title: 'Spectrum School' },
  { id: 2, image: '/images/sit_think_tank.jpg', title: 'SIT Think Tank' },
  { id: 3, image: '/upcoming events and projects/WhatsApp Image 2026-09-28 at 1.07.50 PM.jpeg', title: 'Savar Campus' },
  { id: 4, image: '/images/golden_years_sanctuary.jpg', title: 'Golden Years' },
  { id: 5, image: '/images/study_abroad_global.jpg', title: 'Study Abroad' },
  { id: 6, image: '/images/spectrum_food_cafe.jpg', title: 'Cafeteria Services' },
  { id: 7, image: '/logo main.png', title: 'Spectrum EduCare' },
];

export default function AboutUs() {
  return (
    <section id="about" className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Story & Leadership Content */}
        <div>
          <span className="section-tag">Institutional Profile</span>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            <ShinyText
              text="Our Story & Leadership"
              speed={3}
              color="#1E3A5F"
              shineColor="#C59B27"
              spread={120}
              direction="left"
            />
          </h2>
          <div className="gold-divider-left" />

          {/* Key Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={4}
            >
              Spectrum EduCare Limited is a purpose-driven educational institution committed to delivering transformative, values-based learning by seamlessly integrating globally recognized academic standards with timeless Islamic ethical values.
            </ScrollReveal>

            <p style={{ color: 'var(--color-text-main)', fontSize: '1.02rem', lineHeight: '1.8' }}>
              With a strategic objective to nurture intellectually enriched, morally steadfast, and socially responsible individuals, the organization commenced its journey in 2020 through the establishment of <strong>Spectrum International School</strong>—laying the foundation for a progressive, values-centric educational paradigm.
            </p>

            <div
              className="luxury-card"
              style={{
                padding: '1.5rem',
                borderLeft: '4px solid var(--color-gold-border)',
                background: 'rgba(244, 239, 234, 0.55)',
                margin: '0.5rem 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <FiCompass style={{ color: 'var(--color-gold-border)', fontSize: '1.35rem' }} />
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-blue)', margin: 0 }}>
                  Visionary Leadership & Educational Reform
                </h4>
              </div>
              <p style={{ fontSize: '0.96rem', color: 'var(--color-text-main)', lineHeight: '1.7', margin: 0 }}>
                Under the visionary leadership of <strong>Nur Ahammed Khokan</strong>, the Founder and Chief Strategist and a reformist in the field of education, Spectrum International School emerged as a pioneering initiative redefining the essence of modern Islamic education. He introduced a holistic educational model where contemporary pedagogy is aligned with moral integrity and spiritual purpose. Under his leadership, a team of experienced and principled professionals was brought together to implement this mission with precision and impact.
              </p>
            </div>

            <p style={{ color: 'var(--color-text-main)', fontSize: '1.02rem', lineHeight: '1.8' }}>
              To institutionalize its value-driven educational and social initiatives, Spectrum EduCare Limited was officially incorporated as a limited company in <strong>2024</strong>.
            </p>

            <p style={{ color: 'var(--color-text-main)', fontSize: '1.02rem', lineHeight: '1.8' }}>
              In order to ensure academic innovation and establish consistent standards across Islamic, modern, English-medium, and national curriculum-based educational institutions, Spectrum EduCare launched the <strong>School of Integrated Thoughts (SIT)</strong> in 2023. SIT serves as the organization&apos;s academic think tank and curriculum authority, responsible for designing future-oriented, value-based curricula grounded in Islamic philosophical principles.
            </p>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', lineHeight: '1.7' }}>
              In addition, SIT fosters strategic partnerships, professional development initiatives, joint research, and academic collaboration among like-minded institutions—strengthening Spectrum&apos;s role in advancing Islamic education within an increasingly competitive global educational landscape.
            </p>
          </div>

          {/* Timeline Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(197, 155, 39, 0.2)',
            }}
          >
            <div style={{ textAlign: 'center', padding: '0.75rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(197, 155, 39, 0.2)' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary-blue)', fontFamily: 'var(--font-serif)', display: 'block' }}>2020</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Spectrum School Founded</span>
            </div>
            <div style={{ textAlign: 'center', padding: '0.75rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(197, 155, 39, 0.2)' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary-blue)', fontFamily: 'var(--font-serif)', display: 'block' }}>2023</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>SIT Think Tank Launch</span>
            </div>
            <div style={{ textAlign: 'center', padding: '0.75rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(197, 155, 39, 0.2)' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-gold-border)', fontFamily: 'var(--font-serif)', display: 'block' }}>2024</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>EduCare Ltd Incorporation</span>
            </div>
          </div>
        </div>

        {/* Right Column: InfiniteSpiral Interactive Cylinder */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              padding: '1rem',
              background: 'radial-gradient(circle at center, rgba(197, 155, 39, 0.08) 0%, transparent 70%)',
              borderRadius: '24px',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-gold-border)', textTransform: 'uppercase' }}>
                Interactive Institution Gallery
              </span>
            </div>

            <InfiniteSpiral
              items={aboutImages}
              animationMode="all"
              speed={0.45}
              radius={170}
              cardWidth={110}
              cardHeight={110}
              verticalSpacing={65}
              perspective={1000}
              cardRadius={12}
              centerScale={1.2}
              edgeBlur={5}
              cardsPerTurn={7}
              pauseOnHover={true}
            />

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
              Hover over or drag cards to pause and inspect our facilities & concerns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
