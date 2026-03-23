import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Users, BookOpen } from 'lucide-react';

const PricingPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const pricingTiers = [
    {
      name: "Hobbyist",
      price: "$10",
      frequency: "/month",
      description: "Perfect for individual learners and hobby projects.",
      features: [
        "10 hours/month lab access",
        "Access to all standard boards",
        "Community support",
        "Project saving (up to 3)"
      ],
      cta: "Get Started",
      link: "/register?plan=hobbyist",
      highlight: false
    },
    {
      name: "Developer",
      price: "$25",
      frequency: "/month",
      description: "For serious developers and small teams needing more resources.",
      features: [
        "30 hours/month lab access",
        "Access to all standard & premium boards",
        "Priority email support",
        "Project saving (up to 10)",
        "Early access to new hardware"
      ],
      cta: "Choose Developer",
      link: "/register?plan=developer",
      highlight: true
    },
    {
      name: "Institution",
      price: "Custom",
      frequency: "",
      description: "Tailored solutions for educational institutions and businesses.",
      features: [
        "Unlimited lab hours (customizable)",
        "Dedicated hardware instances (optional)",
        "Admin dashboard & user management",
        "Custom integrations",
        "Dedicated support manager"
      ],
      cta: "Contact Sales",
      link: "/contact?plan=institution",
      highlight: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - VirtualLab</title>
        <meta name="description" content="Explore VirtualLab pricing plans. Choose the best option for your embedded development needs, from hobbyist to institutional solutions." />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900/10 to-gray-800/30 min-h-screen">
        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className=" text-5xl font-bold mb-6 gradient-text">Flexible Pricing for Everyone</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Choose a plan that fits your needs. Whether you're a student, hobbyist, or professional, Virtual Lab offers affordable access to real embedded hardware.
          </p>
        </motion.section>

        <motion.section 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={{ animate: { transition: { staggerChildren: 0.1 }}}}
          initial="initial"
          animate="animate"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`feature-card rounded-xl p-8 flex flex-col ${tier.highlight ? 'border-2 border-purple-500 shadow-2xl shadow-purple-500/30 relative overflow-hidden' : ''}`}
              variants={fadeInUp}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <h2 className={`text-3xl font-semibold mb-2 ${tier.highlight ? 'gradient-text' : ''}`}>{tier.name}</h2>
              <p className="text-4xl font-bold mb-1">
                {tier.price} 
                {tier.frequency && <span className="text-lg font-normal text-gray-400">{tier.frequency}</span>}
              </p>
              <p className="text-gray-400 mb-6 h-16">{tier.description}</p>
              
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild 
                size="lg" 
                className={`w-full mt-auto ${tier.highlight ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'}`}
              >
                <Link to={tier.link}>{tier.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="text-left space-y-6 max-w-2xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-100">Can I change my plan later?</h3>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time from your account dashboard.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-100">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards and PayPal.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-100">Is there a free trial?</h3>
              <p className="text-gray-400">We offer a 5-minute free demo session for you to try our platform. For extended access, please choose one of our plans.</p>
            </div>
          </div>
           <Button asChild size="lg" variant="outline" className="mt-8 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg">
             <Link to="/contact">Contact Us</Link>
           </Button>
        </motion.section>
      </div>
    </>
  );
};

export default PricingPage;