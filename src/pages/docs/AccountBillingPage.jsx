import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, CreditCard, FileText, Repeat } from 'lucide-react';

const AccountBillingPage = () => {
  const sections = [
    {
      icon: User,
      title: "Managing Your Profile",
      content: "You can update your personal information, such as your name and email address, from the 'Profile' section of your account dashboard. It's important to keep your email address up to date to receive booking confirmations and important notifications."
    },
    {
      icon: Repeat,
      title: "Changing Your Plan",
      content: "Need more lab hours? You can easily upgrade or downgrade your subscription plan at any time. Go to the 'Subscription' tab in your dashboard, choose a new plan, and the changes will take effect at the start of your next billing cycle."
    },
    {
      icon: CreditCard,
      title: "Updating Payment Method",
      content: "To update your credit card information, navigate to the 'Billing' section of your dashboard. We use a secure third-party payment processor (like Stripe), so your payment details are always safe."
    },
    {
      icon: FileText,
      title: "Viewing Invoices",
      content: "All your past invoices are available for download in the 'Billing History' tab. You can view and download PDF copies for your records at any time."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Account & Billing - VirtualLab Docs</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none prose-h1:gradient-text prose-p:text-gray-300"
      >
        <h1>Account & Billing</h1>
        <p>This section provides information on how to manage your VirtualLab account, subscription, and billing details.</p>
        
        <div className="mt-12 space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center mb-2">
                <section.icon className="w-6 h-6 mr-3 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white mt-0 mb-0">{section.title}</h2>
              </div>
              <p className="text-gray-300 ml-9">{section.content}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AccountBillingPage;