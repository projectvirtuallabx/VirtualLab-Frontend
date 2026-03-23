
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import LabAccessPage from '@/pages/LabAccessPage';
import PricingPage from '@/pages/PricingPage';
import DocsPage from '@/pages/DocsPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import BookSlotPage from '@/pages/BookSlotPage';
import DemoPage from '@/pages/DemoPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import ContactPage from '@/pages/ContactPage';
import RequestHardwarePage from '@/pages/RequestHardwarePage';
import DocsLayout from '@/pages/docs/DocsLayout';
import GettingStartedPage from '@/pages/docs/GettingStartedPage';
import HardwareGuidesPage from '@/pages/docs/HardwareGuidesPage';
import ConnectionMethodsPage from '@/pages/docs/ConnectionMethodsPage';
import AccountBillingPage from '@/pages/docs/AccountBillingPage';
import FaqPage from '@/pages/docs/FaqPage';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/features/ScrollToTop';

import ESP32LabAccessPage from '@/pages/ESP32LabAccessPage';
import ESP32CAMPage from '@/pages/ESP32CAMPage';
import ESP32ControlsPage from '@/pages/ESP32ControlsPage';

import FrostLabPage from '@/pages/FrostLabPage'; 




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/lab-access" element={<LabAccessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-hardware" element={<RequestHardwarePage />} />
          <Route path="/access-esp32-lab" element={<ESP32LabAccessPage />} />

          <Route path="/esp32-cam" element={<ESP32CAMPage />} />
          <Route path="/controls" element={<ESP32ControlsPage />} />
          <Route path="/frostlab" element={<FrostLabPage />} />

          <Route path="/book-slot" element={
            <ProtectedRoute>
              <BookSlotPage />
            </ProtectedRoute>
          } />

          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<DocsPage />} />
            <Route path="getting-started" element={<GettingStartedPage />} />
            <Route path="hardware-guides" element={<HardwareGuidesPage />} />
            <Route path="connection-methods" element={<ConnectionMethodsPage />} />
            <Route path="account-billing" element={<AccountBillingPage />} />
            <Route path="faq" element={<FaqPage />} />
          </Route>
          
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
