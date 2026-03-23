import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, HardDrive, Radio, Settings, HelpCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DocsPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "Getting Started",
      icon: BookOpen,
      description: "New to VirtualLab? Find out how to sign up, navigate your dashboard, and make your first booking.",
      link: "/docs/getting-started",
      color: "text-blue-400"
    },
    {
      title: "Hardware Guides",
      icon: HardDrive,
      description: "Detailed specifications, pin mappings, and usage examples for all available hardware boards like STM32, Raspberry Pi, and ESP32.",
      link: "/docs/hardware-guides",
      color: "text-green-400"
    },
    {
      title: "Connection Methods",
      icon: Radio,
      description: "Learn how to connect to your booked hardware via our web IDE, VNC, or SSH. Troubleshooting tips included.",
      link: "/docs/connection-methods",
      color: "text-purple-400"
    },
    {
      title: "Account & Billing",
      icon: Settings,
      description: "Manage your account settings, subscription plans, view billing history, and update payment methods.",
      link: "/docs/account-billing",
      color: "text-yellow-400"
    },
    {
      title: "Troubleshooting & FAQs",
      icon: HelpCircle,
      description: "Find answers to common questions and solutions to potential issues you might encounter.",
      link: "/docs/faq",
      color: "text-pink-400"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - VirtualLab</title>
        <meta name="description" content="Find comprehensive documentation for VirtualLab. Guides on getting started, hardware specifications, connection methods, account management, and FAQs." />
      </Helmet>
      <div className="pt-8 pb-16">
        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">VirtualLab Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your comprehensive guide to using VirtualLab. Find everything you need to get started, understand our hardware, and troubleshoot any issues.
          </p>
          <div className="relative max-w-xl mx-auto mb-12">
            <input
              type="search"
              placeholder="Search documentation..."
              className="w-full p-4 pl-12 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </motion.section>

        <motion.section 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8"
          variants={{ animate: { transition: { staggerChildren: 0.1 }}}}
          initial="initial"
          animate="animate"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="feature-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(96, 165, 250, 0.15)"}}
            >
              <Link to={section.link} className="block">
                <div className="flex items-center mb-3">
                  <section.icon className={`w-8 h-8 mr-3 ${section.color}`} />
                  <h2 className="text-2xl font-semibold text-gray-100">{section.title}</h2>
                </div>
                <p className="text-gray-400">{section.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-lg text-gray-300 mb-8">
            If you can't find what you're looking for in our documentation, feel free to reach out to our support team.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold px-8 py-3 text-lg">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </motion.section>
      </div>
    </>
  );
};

export default DocsPage;