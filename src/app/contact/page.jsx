'use client';

import React from 'react';
import HeaderNav from '../../components/navigation/HeaderNav';
import Contact from '../../components/sections/Contact';
import Footer from '../../components/footer/Footer';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <HeaderNav forceVisible={true} />
      <Contact />
      <Footer />
    </main>
  );
}
