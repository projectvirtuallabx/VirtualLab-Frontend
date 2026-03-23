
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const TestimonialsSection = () => {
  const allTestimonials = [
    {
      quote: "This helped me complete my IoT project without owning hardware. The access was seamless and the documentation was crystal clear. A game-changer for students like me.",
      author: "Rahul",
      role: "Student"
    },
    {
      quote: "Our interns use this for hands-on debugging—no setup needed. It has drastically reduced our onboarding time and lets them get straight to real-world problem-solving.",
      author: "Anusha",
      role: "IoTEdge Inc."
    },
    {
      quote: "As a hobbyist, buying every new board is expensive. VirtualLab gives me the playground I need to experiment with different microcontrollers without breaking the bank.",
      author: "David L.",
      role: "Electronics Hobbyist"
    },
    {
      quote: "The remote access is surprisingly fast and stable. I was able to flash and debug my firmware just as easily as if the board was on my desk. Highly recommended!",
      author: "Maria S.",
      role: "Embedded Developer"
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {allTestimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card rounded-xl p-8 flex flex-col"
              variants={fadeInUp}
            >
              <p className="text-lg mb-6 italic flex-grow">"{testimonial.quote.substring(0, 100)}..."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold px-8 py-3 text-lg">
                Read More Testimonials
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-gray-900 border-gray-700 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl gradient-text">More User Stories</DialogTitle>
                <DialogDescription>
                  Here's what other developers and students are saying about VirtualLab.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-4">
                {allTestimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card rounded-lg p-4">
                    <p className="text-md mb-4 italic text-gray-300">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-100">{testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
