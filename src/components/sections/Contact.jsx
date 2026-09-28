'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiClock } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section-container" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span className="section-tag">Direct Institutional Engagement</span>
        <h2 className="section-title">
          <ShinyText
            text="Contact Us"
            speed={3}
            color="#1E3A5F"
            shineColor="#C59B27"
            spread={120}
            direction="left"
          />
        </h2>
        <div className="gold-divider" />

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p className="section-subtitle">
            Reach out to our corporate headquarters for admissions, institutional collaborations, and investment inquiries.
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Corporate Office */}
        <div
          className="luxury-card"
          style={{
            padding: '2.5rem 2rem',
            background: '#FFFFFF',
            borderTop: '4px solid var(--color-gold-border)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
              fontSize: '1.4rem',
              marginBottom: '1.25rem',
              border: '1px solid rgba(197, 155, 39, 0.25)',
            }}
          >
            <FiMapPin />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-blue)', marginBottom: '0.6rem' }}>
            Corporate Office
          </h3>
          <p style={{ fontSize: '0.96rem', color: 'var(--color-text-main)', lineHeight: '1.65', marginBottom: '0.5rem' }}>
            <strong>Spectrum EduCare Limited</strong>
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
            137, Novel House, Shantinagar, Dhaka-1217
          </p>
        </div>

        {/* Telephones */}
        <div
          className="luxury-card"
          style={{
            padding: '2.5rem 2rem',
            background: '#FFFFFF',
            borderTop: '4px solid var(--color-gold-border)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
              fontSize: '1.4rem',
              marginBottom: '1.25rem',
              border: '1px solid rgba(197, 155, 39, 0.25)',
            }}
          >
            <FiPhone />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-blue)', marginBottom: '0.6rem' }}>
            Phone Inquiries
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
            Secretariat & Operations Desk:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a
              href="tel:01726-208154"
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--color-primary-blue)',
                transition: 'color 0.2s ease',
              }}
            >
              01726-208154
            </a>
            <a
              href="tel:01882-449024"
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--color-primary-blue)',
                transition: 'color 0.2s ease',
              }}
            >
              01882-449024
            </a>
          </div>
        </div>

        {/* Email & Web */}
        <div
          className="luxury-card"
          style={{
            padding: '2.5rem 2rem',
            background: '#FFFFFF',
            borderTop: '4px solid var(--color-gold-border)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
              fontSize: '1.4rem',
              marginBottom: '1.25rem',
              border: '1px solid rgba(197, 155, 39, 0.25)',
            }}
          >
            <FiMail />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-blue)', marginBottom: '0.6rem' }}>
            Digital Channels
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
            Official Correspondence:
          </p>
          <a
            href="mailto:spectrumeducareltd@gmail.com"
            style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: 'var(--color-primary-blue)',
              marginBottom: '0.75rem',
              wordBreak: 'break-all',
              transition: 'color 0.2s ease',
            }}
          >
            spectrumeducareltd@gmail.com
          </a>
          <a
            href="http://www.spectrumeducareltd.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--color-gold-border)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <FiGlobe />
            <span>www.spectrumeducareltd.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
