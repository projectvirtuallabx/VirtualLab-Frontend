
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldEllipsis, Info, Users, Database, Mail } from 'lucide-react';

const PrivacyPage = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - VirtualLab</title>
        <meta name="description" content="Read the Privacy Policy for VirtualLab. Understand how we collect, use, and protect your personal information on our remote hardware access platform." />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900/10 to-gray-800/30 min-h-screen">
        <motion.header
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShieldEllipsis className="mx-auto h-16 w-16 text-green-400 mb-4" />
          <h1 className="text-5xl font-bold gradient-text">Privacy Policy</h1>
          <p className="text-lg text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </motion.header>

        <motion.div 
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-300"
          variants={{ animate: { transition: { staggerChildren: 0.15 }}}}
          initial="initial"
          animate="animate"
        >
          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center">
              <Info className="w-6 h-6 mr-2 text-blue-400" /> 1. Introduction
            </h2>
            <p>
              VirtualLab ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services (collectively, the "Service"). Please read this policy carefully.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center">
              <Users className="w-6 h-6 mr-2 text-purple-400" /> 2. Information We Collect
            </h2>
            <p>
              We may collect personal information that you provide directly to us, such as when you create an account, use the Service, or communicate with us. This information may include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-gray-400">
              <li>Personal Identifiers: Name, email address, username, password.</li>
              <li>Usage Data: Information about how you use the Service, IP address, browser type, device information, session logs.</li>
              <li>Payment Information: If you subscribe to paid services, we (or our payment processors) collect payment details.</li>
            </ul>
          </motion.section>
          
          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center">
              <Database className="w-6 h-6 mr-2 text-yellow-400" /> 3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to:
            </p>
             <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-gray-400">
              <li>Provide, operate, and maintain our Service.</li>
              <li>Process your transactions and manage your account.</li>
              <li>Improve, personalize, and expand our Service.</li>
              <li>Communicate with you, including for customer service and support.</li>
              <li>Monitor and analyze usage and trends to improve your experience.</li>
              <li>Prevent fraudulent activity and ensure security.</li>
            </ul>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share information with third-party service providers to help us operate our Service (e.g., payment processors, hosting providers), or if required by law or to protect our rights.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, no electronic transmission or storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </motion.section>
          
          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Your Choices</h2>
            <p>
             You can review and update your account information through your dashboard. You may also opt-out of certain communications. Depending on your location, you may have additional rights regarding your personal data.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Children's Privacy</h2>
            <p>
             Our Service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </motion.section>
          
          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
            <p>
             We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-400" /> 9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@virtuallab.dev" className="text-blue-400 hover:underline">privacy@virtuallab.dev</a>.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPage;
