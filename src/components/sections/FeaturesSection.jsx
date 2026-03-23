import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Calendar, Users, BookOpen, Cpu } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useToast } from '@/components/ui/use-toast';

const FeaturesSection = () => {
  const { toast } = useToast();

  

  const features = [
    {
      icon: Zap,
      title: "Real Hardware Access",
      description: "Remotely work on real boards—not simulators",
      color: "text-yellow-400"
    },
    {
      icon: Lock,
      title: "Secure Environment",
      description: "Sandboxed, time-bound sessions",
      color: "text-green-400"
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Real-time availability calendar",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Great for Learners",
      description: "Ideal for students and junior embedded developers",
      color: "text-purple-400"
    },
    {
      icon: BookOpen,
      title: "Docs & Tutorials",
      description: "Built-in support and board-specific documentation",
      color: "text-pink-400"
    },
    {
      icon: Cpu,
      title: "Multi-Device Support",
      description: "Arduino, STM32, ESP32, Raspberry Pi, and more",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose VirtualLab?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of embedded development with our cutting-edge platform
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card rounded-xl p-6 cursor-pointer"
              variants={fadeInUp}
              onClick={() => handleFeatureClick(feature.title)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;