'use client';

import React from 'react';
import ShinyText from '../effects/ShinyText';
import ScrollReveal from '../effects/ScrollReveal';
import Carousel from '../carousel/Carousel';

const sisterConcernsData = [
  {
    id: 'spectrum-school',
    title: 'Spectrum International School',
    badge: 'Flagship Institution',
    image: '/home page/Carousel (sister concerns)/Logo1.png',
    description:
      'Modern values-based education combining academic excellence with Islamic ethics, nurturing morally steadfast and intellectually enriched students.',
    link: '/#projects',
    actionText: 'Explore Campus',
  },
  {
    id: 'sit',
    title: 'School of Integrated Thoughts (SIT)',
    badge: 'Think Tank & Authority',
    image: '/home page/Carousel (sister concerns)/School of Integrated Thoughts-01.png',
    description:
      "Academic think tank and curriculum authority focused on future-oriented, values-based curricula grounded in Islamic philosophical principles.",
    link: '/#about',
    actionText: 'Academic Model',
  },
  {
    id: 'golden-years',
    title: 'Golden Years of Wisdom',
    badge: 'Elderly Care Sanctuary',
    image: '/home page/Carousel (sister concerns)/Golden Years of Wisdom.png',
    description:
      'Dignified, compassionate senior citizen care home providing comprehensive wellness, spiritual peace, and holistic community living.',
    link: '/#projects',
    actionText: 'Care Philosophy',
  },
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    badge: 'Global Pathways',
    image: '/home page/Carousel (sister concerns)/Study Abroad Logo PNG-06.png',
    description:
      'International education consultancy and overseas study opportunities connecting ambitious scholars to top global universities with moral grounding.',
    link: '/#contact',
    actionText: 'Global Programs',
  },
  {
    id: 'food-cafeteria',
    title: 'Food & Cafeteria',
    badge: 'Campus Services',
    image: '/home page/Carousel (sister concerns)/Food & Cafetaria.png',
    description:
      'Wholesome, healthy, and hygienic culinary and cafeteria services supporting students, educators, and community well-being with good food and great vibes.',
    link: '/#contact',
    actionText: 'Culinary Services',
  },
];

export default function SisterConcerns() {
  return (
    <section id="sister-concerns" className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="section-tag">Parent Group Ecosystem</span>
        <h2 className="section-title">
          <ShinyText
            text="Our Sister Concerns"
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
            Spectrum EduCare Limited serves as the visionary mother group, uniting specialized educational, academic research, healthcare, and community services into one unified values-driven ecosystem.
          </ScrollReveal>
        </div>
      </div>

      <Carousel items={sisterConcernsData} />
    </section>
  );
}
