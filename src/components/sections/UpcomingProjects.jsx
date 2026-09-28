'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import DepthCarousel from '../carousel/DepthCarousel';

const projectItems = [
  {
    id: 'savar-campus',
    title: 'Spectrum International School Residential Campus',
    status: 'Master Planned Campus',
    image: '/upcoming events and projects/WhatsApp Image 2026-09-28 at 1.07.50 PM.jpeg',
    description:
      'Vakurta, Savar — A landmark green residential campus featuring Academic Bhaban, Spectrum Tower, central community mosque, and international athletic grounds.',
    actionText: 'Campus Details',
    link: '#investment',
  },
  {
    id: 'sit-research-hub',
    title: 'SIT Curriculum Innovation & Think Tank Hub',
    status: 'Academic Initiative',
    image: '/images/sit_think_tank.jpg',
    description:
      'Designing future-oriented, value-based curricula grounded in Islamic philosophical principles with academic partnerships across institutions.',
    actionText: 'Curriculum Vision',
    link: '#about',
  },
  {
    id: 'golden-years-facility',
    title: 'Golden Years of Wisdom Senior Living',
    status: 'Community Care',
    image: '/images/golden_years_sanctuary.jpg',
    description:
      'Compassionate, dignified senior citizen care home delivering holistic wellness, spiritual serenity, and dedicated residential facilities.',
    actionText: 'Care Overview',
    link: '#investment',
  },
  {
    id: 'study-abroad-hub',
    title: 'Global University Study Abroad Pathways',
    status: 'International Outreach',
    image: '/images/study_abroad_global.jpg',
    description:
      'Guiding qualified scholars into accredited international higher education institutions with comprehensive admissions support and ethical grounding.',
    actionText: 'Program Details',
    link: '#contact',
  },
  {
    id: 'cafeteria-services',
    title: 'Spectrum Culinary & Cafeteria Infrastructure',
    status: 'Hospitality & Wellness',
    image: '/images/spectrum_food_cafe.jpg',
    description:
      'Modern hygienic dining spaces providing nourishing halal meals and community cafes across educational campuses.',
    actionText: 'Facility Standards',
    link: '#contact',
  },
];

export default function UpcomingProjects() {
  return (
    <section id="projects" className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="section-tag">Institutional Developments</span>
        <h2 className="section-title">
          <ShinyText
            text="Upcoming Projects"
            speed={3}
            color="#1E3A5F"
            shineColor="#C59B27"
            spread={120}
            direction="left"
          />
        </h2>
        <div className="gold-divider" />

        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={4}
            textClassName="section-subtitle"
          >
            Explore our visionary institutional developments, flagship residential campuses, and specialized community projects underway across Spectrum EduCare Limited.
          </ScrollReveal>
        </div>
      </div>

      <DepthCarousel
        items={projectItems}
        depth={220}
        spread={90}
        tilt={22}
        tiltDirection="right"
        perspective={1400}
        visibleCards={4}
        falloff={0.2}
        blur={6}
        autoplay={true}
        autoplayDelay={3600}
        loop={true}
        showControls={true}
        showIndicators={true}
      />
    </section>
  );
}
