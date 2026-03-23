import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserPlus, LogIn, CalendarPlus, Radio } from 'lucide-react';

const GettingStartedPage = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Create Your Account",
      description: "Start by signing up for a free VirtualLab account. All you need is an email address. Once registered, you'll have access to your personal dashboard.",
      link: "/register",
      linkText: "Register Now"
    },
    {
      icon: LogIn,
      title: "2. Explore the Dashboard",
      description: "After logging in, you'll land on your dashboard. Here you can see your current bookings, usage history, and manage your account settings.",
      link: "/login",
      linkText: "Login to Dashboard"
    },
    {
      icon: CalendarPlus,
      title: "3. Book Your First Lab",
      description: "Navigate to the 'Lab Access' page to see all available hardware. Choose a board, find an open time slot on the calendar, and book your session.",
      link: "/lab-access",
      linkText: "Browse Labs"
    },
    {
      icon: Radio,
      title: "4. Connect and Code",
      description: "When your booked time arrives, a 'Connect' button will appear on your dashboard. Click it to launch the remote environment and start working with the hardware.",
      link: "/docs/connection-methods",
      linkText: "Learn about Connection Methods"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Getting Started - VirtualLab Docs</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none prose-h1:gradient-text prose-h1:mb-4 prose-p:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300"
      >
        <h1>Getting Started with VirtualLab</h1>
        <p>Welcome to VirtualLab! This guide will walk you through the essential steps to get you up and running. Follow these simple steps to start your remote hardware development journey.</p>
        
        <div className="mt-12 space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center">
                <step.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mt-0 mb-2">{step.title}</h2>
                <p className="text-gray-300 mt-0">{step.description}</p>
                <Link to={step.link} className="inline-block mt-2 font-semibold text-blue-400 hover:text-blue-300">
                  {step.linkText} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default GettingStartedPage;