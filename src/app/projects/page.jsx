'use client';

import React from 'react';
import HeaderNav from '../../components/navigation/HeaderNav';
import UpcomingProjects from '../../components/sections/UpcomingProjects';
import SisterConcerns from '../../components/sections/SisterConcerns';
import Footer from '../../components/footer/Footer';

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <HeaderNav forceVisible={true} />
      <UpcomingProjects />
      <SisterConcerns />
      <Footer />
    </main>
  );
}
