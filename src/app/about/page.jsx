'use client';

import React from 'react';
import HeaderNav from '../../components/navigation/HeaderNav';
import AboutUs from '../../components/sections/AboutUs';
import Vision from '../../components/sections/Vision';
import Mission from '../../components/sections/Mission';
import Philosophy from '../../components/sections/Philosophy';
import ManagementStructure from '../../components/sections/ManagementStructure';
import Footer from '../../components/footer/Footer';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <HeaderNav forceVisible={true} />
      <AboutUs />
      <Vision />
      <Mission />
      <Philosophy />
      <ManagementStructure />
      <Footer />
    </main>
  );
}
