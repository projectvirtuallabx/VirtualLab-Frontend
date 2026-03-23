
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, UserCheck, ShieldCheck, AlertTriangle, Mail } from 'lucide-react';

const TermsPage = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service - VirtualLab</title>
        <meta name="description" content="Read the Terms of Service for VirtualLab. Understand your rights and responsibilities when using our remote hardware access platform." />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900/10 to-gray-800/30 min-h-screen">
        <motion.header
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FileText className="mx-auto h-16 w-16 text-blue-400 mb-4" />
          <h1 className="text-5xl font-bold gradient-text">Terms of Service</h1>
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
              <UserCheck className="w-6 h-6 mr-2 text-green-400" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using VirtualLab (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use the Service. We may modify these Terms at any time, and such modifications will be effective immediately upon posting.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-2 text-purple-400" /> 2. Use of the Service
            </h2>
            <p>
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for all activity that occurs under your account. You may not use the Service in any manner that could damage, disable, overburden, or impair any VirtualLab server or network.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-gray-400">
              <li>You must be 13 years or older to use this Service.</li>
              <li>You are responsible for maintaining the security of your account and password.</li>
              <li>You may not use the Service for any illegal or unauthorized purpose.</li>
            </ul>
          </motion.section>
          
          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" /> 3. Prohibited Conduct
            </h2>
            <p>
              You agree not to engage in any of the following prohibited activities: (i) attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service; (ii) taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure; (iii. uploading invalid data, viruses, worms, or other software agents through the Service.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of VirtualLab and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </motion.section>
          
          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Disclaimer of Warranties</h2>
            <p>
             The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Your use of the Service is at your sole risk. VirtualLab expressly disclaims all warranties of any kind, whether express or implied.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>
              In no event shall VirtualLab, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </motion.section>

          <motion.section variants={sectionAnimation}>
            <h2 className="text-2xl font-semibold text-white mb-3 flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-400" /> 8. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:support@virtuallab.dev" className="text-blue-400 hover:underline">support@virtuallab.dev</a>.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
};

export default TermsPage;
