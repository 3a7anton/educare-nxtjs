import './globals.css';
import SideRays from '../components/effects/SideRays';

export const metadata = {
  title: 'Spectrum EduCare Limited | Values-Based Educational Parent Group',
  description:
    'Spectrum EduCare Limited is the parent group bringing together educational institutions, academic research, student development, international education, and supporting services grounded in Islamic ethical values.',
  keywords: [
    'Spectrum EduCare Limited',
    'Spectrum International School',
    'School of Integrated Thoughts',
    'SIT',
    'Islamic Education',
    'Values-based Learning',
    'Educational Investment',
    'Nur Ahammed Khokan',
  ],
  authors: [{ name: 'Spectrum EduCare Limited' }],
  icons: {
    icon: '/logo main.png',
  },
  openGraph: {
    title: 'Spectrum EduCare Limited | Values-Based Educational Parent Group',
    description:
      'Pioneering values-centric modern education by seamlessly integrating world-class academic standards with timeless Islamic ethics.',
    images: ['/logo main.png'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* React Bits SideRays background with recommended config */}
        <SideRays
          speed={2.5}
          rayColor1="#C59B27"
          rayColor2="#4A90E2"
          intensity={1.3}
          spread={2.9}
          origin="bottom-right"
          tilt={0}
          saturation={1.2}
          blend={0.75}
          falloff={1.6}
          opacity={0.28}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
