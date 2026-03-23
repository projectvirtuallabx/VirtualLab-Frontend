
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DemoSection from '@/components/sections/DemoSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Lab </title>
        <meta name="description" content="Book real embedded hardware kits from your browser. Access STM32, Arduino, ESP32, and Raspberry Pi remotely for testing, debugging, and validation." />
      </Helmet>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
