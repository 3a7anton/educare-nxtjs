'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import { FiCalendar, FiBell, FiMail, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

export default function UpcomingEvents() {
  return (
    <section id="events" className="section-container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="section-tag">Institutional Schedule</span>
        <h2 className="section-title">
          <ShinyText
            text="Upcoming Events"
            speed={3}
            color="#1E3A5F"
            shineColor="#C59B27"
            spread={120}
            direction="left"
          />
        </h2>
        <div className="gold-divider" />

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={4}
            textClassName="section-subtitle"
          >
            Academic symposiums, annual shareholder forums, and campus developmental announcements organized by Spectrum EduCare Limited.
          </ScrollReveal>
        </div>
      </div>

      {/* Clean Timeline / Notice State Architecture */}
      <div
        className="luxury-card"
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: 'clamp(2.5rem, 5vw, 3.5rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F5 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(197, 155, 39, 0.3)',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(30, 58, 95, 0.06)',
            color: 'var(--color-primary-blue)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(197, 155, 39, 0.3)',
          }}
        >
          <FiCalendar />
        </div>

        <h3
          style={{
            fontSize: '1.45rem',
            color: 'var(--color-primary-blue)',
            marginBottom: '1rem',
          }}
        >
          Upcoming events will be announced here.
        </h3>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-muted)',
            lineHeight: '1.7',
            maxWidth: '560px',
            margin: '0 auto 2rem',
          }}
        >
          Official schedule announcements regarding our academic conferences, SIT educational symposiums, and the forthcoming Savar Residential Campus milestones will be published through official institutional channels.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Link href="/#contact" className="btn-primary">
            <FiMail />
            <span>Inquire for Announcements</span>
          </Link>
          <a
            href="tel:01726-208154"
            className="btn-outline"
          >
            <span>Call Secretariat (01726-208154)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
