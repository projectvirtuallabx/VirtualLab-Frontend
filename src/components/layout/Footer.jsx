import React from 'react';
import { Cpu, Linkedin, Youtube, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer className="bg-gray-900/50 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">VirtualLab</span>
              </div>
            </Link>
            <p className="text-gray-400">
              Empowering embedded developers with remote hardware access.
            </p>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/pricin" className="block text-gray-400 hover:text-white transition-colors">Pricing</Link>
              <Link to="/term" className="block text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link to="/privac" className="block text-gray-400 hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Contact</span>
            <div className="space-y-2">
               <Link to="/contact" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>support@virtuallab.dev</span>
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-white mb-4 block">Follow Us</span>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' }
              ].map((social) => (
                <button
                  key={social.label}
                  onClick={() => handleSocialClick(social.label)}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 VirtualLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;