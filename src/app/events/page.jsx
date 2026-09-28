'use client';

import React from 'react';
import HeaderNav from '../../components/navigation/HeaderNav';
import UpcomingEvents from '../../components/sections/UpcomingEvents';
import Footer from '../../components/footer/Footer';

export default function EventsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <HeaderNav forceVisible={true} />
      <UpcomingEvents />
      <Footer />
    </main>
  );
}
