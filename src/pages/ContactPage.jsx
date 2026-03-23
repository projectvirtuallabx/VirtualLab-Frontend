import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '📬 Message Sent',
      description: 'Thank you for contacting us! We will get back to you shortly.',
      duration: 5000,
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - VirtualLab</title>
        <meta name="description" content="Get in touch with the VirtualLab team. We're here to help with any questions, feedback, or support inquiries." />
      </Helmet>
      <div className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800/50">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold gradient-text">Get In Touch</h1>
            <p className="mt-4 text-lg text-gray-300">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-gray-400">Our team is here to help.</p>
                  <a href="mailto:support@virtuallab.dev" className="text-blue-400 hover:text-blue-300 transition-colors">
                    support@virtuallab.dev
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Call Us</h3>
                  <p className="text-gray-400">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+1234567890" className="text-green-400 hover:text-green-300 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Our Location</h3>
                  <p className="text-gray-400">India</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="glass-effect p-8 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <Input id="name" type="text" required placeholder="Your Name" className="mt-1 bg-gray-700/50 border-gray-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" className="mt-1 bg-gray-700/50 border-gray-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea id="message" required placeholder="Your message..." rows={5} className="mt-1 bg-gray-700/50 border-gray-600 text-white" />
                </div>
                <div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;