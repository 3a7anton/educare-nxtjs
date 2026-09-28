'use client';

import React, { useState } from 'react';
import ScrollFrameHero from '../components/hero/ScrollFrameHero';
import HeaderNav from '../components/navigation/HeaderNav';
import SisterConcerns from '../components/sections/SisterConcerns';
import AboutUs from '../components/sections/AboutUs';
import Vision from '../components/sections/Vision';
import Mission from '../components/sections/Mission';
import Philosophy from '../components/sections/Philosophy';
import ManagementStructure from '../components/sections/ManagementStructure';
import UpcomingProjects from '../components/sections/UpcomingProjects';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import Investment from '../components/sections/Investment';
import FinancialOverview from '../components/sections/FinancialOverview';
import Contact from '../components/sections/Contact';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  const [isHeroPassed, setIsHeroPassed] = useState(false);

  return (
    <main>
      {/* Cinematic Frame-by-Frame Scroll Hero */}
      <ScrollFrameHero onHeroPassed={setIsHeroPassed} />

      {/* Corporate Header Navigation appears after hero sequence */}
      <HeaderNav isHeroPassed={isHeroPassed} />

      {/* Main Sections flow seamlessly after hero logo reveal */}
      <SisterConcerns />

      <AboutUs />

      <Vision />

      <Mission />

      <Philosophy />

      <ManagementStructure />

      <UpcomingProjects />

      <UpcomingEvents />

      <Investment />

      <FinancialOverview />

      <Contact />

      <Footer />
    </main>
  );
}
