'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowUp, FiArrowRight, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#0D1A2A',
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 10,
        borderTop: '2px solid rgba(197, 155, 39, 0.4)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="section-container" style={{ padding: '0 1.5rem', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand & Mission Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ background: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: '12px', width: 'fit-content' }}>
              <img
                src="/logo main.png"
                alt="Spectrum EduCare Limited"
                style={{ height: '42px', width: 'auto' }}
              />
            </div>
            <p style={{ fontSize: '0.92rem', color: '#B0BAC9', lineHeight: '1.75' }}>
              Spectrum EduCare Limited is a purpose-driven educational parent institution delivering transformative, values-based learning by seamlessly integrating globally recognized academic standards with timeless Islamic ethical values.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <Link href="/#investment" className="header-cta-btn" style={{ padding: '0.65rem 1.35rem' }}>
                <span>Apply for Investment</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#E5C365',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em',
              }}
            >
              Institution Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/#about" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  About Us & Our Story
                </Link>
              </li>
              <li>
                <Link href="/#vision" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Your Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#management" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Management Structure
                </Link>
              </li>
              <li>
                <Link href="/#projects" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Upcoming Projects
                </Link>
              </li>
              <li>
                <Link href="/#events" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/#investment" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Investment Structures
                </Link>
              </li>
              <li>
                <Link href="/#financial-overview" style={{ fontSize: '0.92rem', color: '#CCD6E0', transition: 'color 0.2s' }}>
                  Financial Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Sister Concerns */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#E5C365',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em',
              }}
            >
              Sister Concerns & Initiatives
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ fontSize: '0.92rem', color: '#CCD6E0' }}>
                Spectrum International School
              </li>
              <li style={{ fontSize: '0.92rem', color: '#CCD6E0' }}>
                School of Integrated Thoughts (SIT)
              </li>
              <li style={{ fontSize: '0.92rem', color: '#CCD6E0' }}>
                Golden Years of Wisdom
              </li>
              <li style={{ fontSize: '0.92rem', color: '#CCD6E0' }}>
                Study Abroad Program
              </li>
              <li style={{ fontSize: '0.92rem', color: '#CCD6E0' }}>
                Food & Cafeteria Services
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                color: '#E5C365',
                marginBottom: '1.25rem',
                letterSpacing: '0.05em',
              }}
            >
              Corporate Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <FiMapPin style={{ color: '#E5C365', marginTop: '0.25rem', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: '#CCD6E0', lineHeight: '1.5' }}>
                  137, Novel House, Shantinagar, Dhaka-1217
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FiPhone style={{ color: '#E5C365', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href="tel:01726-208154" style={{ fontSize: '0.92rem', color: '#CCD6E0' }}>
                    01726-208154
                  </a>
                  <a href="tel:01882-449024" style={{ fontSize: '0.92rem', color: '#CCD6E0' }}>
                    01882-449024
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FiMail style={{ color: '#E5C365', flexShrink: 0 }} />
                <a href="mailto:spectrumeducareltd@gmail.com" style={{ fontSize: '0.92rem', color: '#CCD6E0', wordBreak: 'break-all' }}>
                  spectrumeducareltd@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.85rem', color: '#8E98A8', margin: 0 }}>
            &copy; {new Date().getFullYear()} Spectrum EduCare Limited. All rights reserved. Operating under Shariah-compliant corporate governance.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              color: '#E5C365',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            <span>Back to Top</span>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
