import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { HardDrive, Link as LinkIcon, Send, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RequestHardwarePage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '✅ Request Submitted (Demo)',
      description: 'Thank you for your suggestion! Our team will review your hardware request.',
      duration: 5000,
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Request Hardware - VirtualLab</title>
        <meta name="description" content="Suggest new hardware for the VirtualLab platform. We are always looking to expand our offerings based on user feedback." />
      </Helmet>
      <div className="pt-28 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30">
        <motion.div
          className="w-full max-w-2xl mx-auto p-8 space-y-8 glass-effect rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/lab-access" className="flex items-center text-blue-400 hover:text-blue-300 mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" /> Back to Lab Access
          </Link>
          <div className="text-center">
            <HardDrive className="mx-auto h-12 w-12 text-blue-400" />
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white">
              Request New Hardware
            </h1>
            <p className="mt-2 text-md text-gray-300">
              Help us grow! Let us know what hardware you'd like to see on VirtualLab.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="hardware-name" className="text-gray-300">Hardware Name</Label>
              <Input id="hardware-name" type="text" required placeholder="e.g., Arduino Uno R4" className="mt-1 bg-gray-700/50 border-gray-600 text-white" />
            </div>
            <div>
              <Label htmlFor="datasheet-link" className="text-gray-300">Datasheet/Product Link (Optional)</Label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
                <Input id="datasheet-link" type="url" placeholder="https://store.arduino.cc/..." className="pl-10 mt-1 bg-gray-700/50 border-gray-600 text-white" />
              </div>
            </div>
            <div>
              <Label htmlFor="reason" className="text-gray-300">Reason for Request</Label>
              <Textarea id="reason" required placeholder="Describe why this hardware would be a good addition..." rows={5} className="mt-1 bg-gray-700/50 border-gray-600 text-white" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Send className="w-4 h-4 mr-2" />
                Submit Request
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default RequestHardwarePage;