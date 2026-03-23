import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  const faqs = [
    {
      question: "What is the difference between VirtualLab and a simulator?",
      answer: "VirtualLab provides remote access to real, physical hardware. Unlike simulators which emulate hardware behavior in software, you are working with the actual boards, which means you can test real-world performance, timing, and power consumption."
    },
    {
      question: "Can I upload my own code to the hardware?",
      answer: "Absolutely! Our Web IDE allows you to write, edit, and upload your code directly to the microcontroller or single-board computer you have booked."
    },
    {
      question: "What happens if my booked time runs out?",
      answer: "Your session will automatically be terminated when your booked time slot ends. The hardware will be reset to its default state for the next user. Be sure to save your work before the session ends."
    },
    {
      question: "Can I access the physical pins of the microcontroller?",
      answer: "While you cannot physically touch the board, we provide access to GPIO pins and other peripherals through the code you run on the device. For some labs, we may have pre-connected components like LEDs, sensors, or displays that you can interact with."
    },
    {
      question: "How do you ensure my session is secure?",
      answer: "Each user session is isolated. When your session ends, the hardware is completely flashed and reset, ensuring no data or code from your session is left behind for the next user."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQs - VirtualLab Docs</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none prose-h1:gradient-text prose-p:text-gray-300"
      >
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about VirtualLab. If you can't find your answer here, feel free to contact our support team.</p>
        
        <div className="mt-12 not-prose">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-800/50 rounded-lg border-b-0">
                <AccordionTrigger className="p-4 text-left font-semibold text-gray-200 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </>
  );
};

export default FaqPage;