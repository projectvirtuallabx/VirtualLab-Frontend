import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Monitor } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Sign Up & Login",
      description: "Create an account and access your dashboard.",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "2",
      title: "Book Hardware",
      description: "Choose from available boards and time slots using the calendar.",
      icon: Calendar,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "3",
      title: "Connect & Code",
      description: "Access the board via web, VNC, or SSH during your slot.",
      icon: Monitor,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started with real embedded hardware in just three simple steps
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="text-center space-y-6"
              variants={fadeInUp}
            >
              <div className="relative">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;