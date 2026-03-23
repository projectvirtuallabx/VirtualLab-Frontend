import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Terminal, Monitor, Globe } from 'lucide-react';

const ConnectionMethodsPage = () => {
  const methods = [
    {
      icon: Globe,
      title: "Web IDE (Recommended)",
      description: "Our primary connection method is a browser-based IDE. It provides a seamless experience with a file editor, serial monitor, and board control all in one window. No setup required.",
      steps: [
        "Book a lab slot.",
        "When the time comes, click 'Connect' on your dashboard.",
        "The Web IDE will open in a new tab, automatically connected to your hardware."
      ]
    },
    {
      icon: Monitor,
      title: "VNC (For GUI Access)",
      description: "For hardware like the Raspberry Pi that can run a graphical desktop, we provide VNC access. This allows you to see and interact with the board's desktop environment.",
      steps: [
        "Book a Raspberry Pi lab.",
        "On your dashboard, connection details including an IP, port, and password will be provided.",
        "Use any standard VNC client (like RealVNC or TightVNC) to connect."
      ]
    },
    {
      icon: Terminal,
      title: "SSH (For Command-Line Access)",
      description: "Direct command-line access is available for Linux-based hardware. This is ideal for advanced users who prefer working in a terminal.",
      steps: [
        "Book a compatible lab (e.g., Raspberry Pi).",
        "Connection details (IP, username, password/key) will be available on your dashboard.",
        "Use your local terminal or an SSH client like PuTTY to establish a connection."
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Connection Methods - VirtualLab Docs</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none prose-h1:gradient-text prose-p:text-gray-300"
      >
        <h1>Connection Methods</h1>
        <p>We offer several ways to connect to your remote hardware, catering to different needs and workflows. Choose the method that works best for you.</p>
        
        <div className="mt-12 space-y-10">
          {methods.map((method, index) => (
            <div key={index} className="p-6 rounded-lg feature-card not-prose">
              <div className="flex items-center mb-4">
                <method.icon className="w-10 h-10 mr-4 text-green-400" />
                <h2 className="text-2xl font-bold text-white mt-0">{method.title}</h2>
              </div>
              <p className="text-gray-300">{method.description}</p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-200 mb-2">How to connect:</h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-400">
                  {method.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ConnectionMethodsPage;