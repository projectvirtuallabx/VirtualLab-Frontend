
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Remotely Access{' '}
                <span className="gradient-text">Real Embedded Hardware</span>{' '}
                Anytime, Anywhere
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Book real embedded kits from your browser to test, debug, and validate code.
                No hardware setup required.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg pulse-glow"
              >
                <Link to="/book-slot">
                  Book a Lab Slot
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg"
              >
                <Link to="/how-it-works">
                  <Play className="mr-2 w-5 h-5" />
                  See How It Works
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative glass-effect rounded-2xl p-8 floating-animation">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                   <img 
                    alt="STM32 development board with microcontroller"
                    className="w-full h-32 object-cover rounded-lg"
                   src="https://images.unsplash.com/photo-1699049830533-29187b766a0d" />
                  <img  
                    alt="Arduino Uno development board"
                    className="w-full h-32 object-cover rounded-lg"
                   src="https://images.unsplash.com/photo-1699049830533-29187b766a0d" />
                </div>
                <div className="space-y-4">
                  <img 
                    alt="ESP32 WiFi development board"
                    className="w-full h-32 object-cover rounded-lg"
                   src="https://images.unsplash.com/photo-1586588833074-4730420e4a05" />
                  <img  
                    alt="Raspberry Pi single board computer"
                    className="w-full h-32 object-cover rounded-lg"
                   src="https://images.unsplash.com/photo-1638734255266-7597abac8571" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
