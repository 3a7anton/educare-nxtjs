'use client';

import React from 'react';
import HeaderNav from '../../components/navigation/HeaderNav';
import Investment from '../../components/sections/Investment';
import FinancialOverview from '../../components/sections/FinancialOverview';
import Footer from '../../components/footer/Footer';

export default function InvestmentPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <HeaderNav forceVisible={true} />
      <Investment />
      <FinancialOverview />
      <Footer />
    </main>
  );
}
