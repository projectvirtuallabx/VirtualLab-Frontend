
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { Link } from 'react-router-dom';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Live Demo / Preview</h2>
          <p className="text-xl text-gray-300">
            Try a 5-minute session with a pre-configured Arduino Uno
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white border-0 px-8 py-3 text-lg glow-effect"
          >
            <Link to="/demo">
              <Play className="mr-2 w-5 h-5" />
              Start Free Demo
            </Link>
          </Button>
         
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
