import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PlayCircle, Cpu, AlertTriangle, Clock, Terminal, Power, PowerOff } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const DemoPage = () => {
  const { toast } = useToast();
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [output, setOutput] = useState([]);
  const timerRef = useRef(null);
  const outputRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const addOutputLine = (line) => {
    setOutput(prev => [...prev.slice(-100), { text: line, id: Date.now() + Math.random() }]);
  };

  const stopDemo = () => {
    clearInterval(timerRef.current);
    clearInterval(outputRef.current);
    timerRef.current = null;
    outputRef.current = null;
    setIsDemoActive(false);
    toast({
      title: "👋 Demo Session Ended",
      description: "Your 5-minute session has finished. Feel free to start another one!",
    });
    addOutputLine("Session terminated. Hardware disconnected.");
  };

  const startDemoSession = () => {
    toast({
      title: "🚀 Demo Session Started",
      description: "You're now in a simulated 5-minute demo with an Arduino Uno.",
      duration: 5000,
    });
    setIsDemoActive(true);
    setTimeLeft(300);
    setOutput([]);
    
    addOutputLine("Connecting to VirtualLab Arduino Uno...");
    setTimeout(() => addOutputLine("Connection successful."), 500);
    setTimeout(() => addOutputLine("Uploading Blink.ino sketch..."), 1000);
    setTimeout(() => addOutputLine("Upload complete. Starting execution..."), 2500);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          stopDemo();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    outputRef.current = setInterval(() => {
        addOutputLine(`[${new Date().toLocaleTimeString()}] LED ON`);
        setTimeout(() => {
            addOutputLine(`[${new Date().toLocaleTimeString()}] LED OFF`);
        }, 1000)
    }, 2000);
  };
  
  useEffect(() => {
    return () => {
        if(timerRef.current) clearInterval(timerRef.current);
        if(outputRef.current) clearInterval(outputRef.current);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Live Demo - VirtualLab</title>
        <meta name="description" content="Try a live functional demo of VirtualLab. Experience remote hardware access with a pre-configured Arduino Uno for 5 minutes." />
      </Helmet>
      <div className="pt-28 pb-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/40">
        <motion.div
          className="w-full max-w-4xl p-8 md:p-12 space-y-6 glass-effect rounded-xl shadow-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center gap-0">
   <PlayCircle className="h-12 w-12 text-green-400 mr-2" /> 
   <h1 className="text-4xl font-bold tracking-tight text-white">
     Virtual Lab Live Demo
   </h1>
</div>

          
          <p className="mt-4 text-lg text-gray-300">
            Experience a functional glimpse of VirtualLab's power.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
             <div className="flex flex-col p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="flex items-center mb-3">
                   <Cpu className="w-8 h-8 text-blue-400 mr-3" />
                   <div>
                      <p className="text-lg font-semibold text-white">Hardware: Arduino Uno</p>
                      <p className="text-sm text-gray-400">Running a simulated LED blink sketch.</p>
                   </div>
                </div>
                 <div className="flex items-center p-3 bg-yellow-800/30 rounded-lg border border-yellow-700 mt-auto">
                    <Clock className="w-6 h-6 text-yellow-400 mr-2" />
                    <p className="text-md text-yellow-300">Session Timer: <span className="font-bold text-white">{formatTime(timeLeft)}</span></p>
                </div>
             </div>

             <div className="bg-black rounded-lg p-4 border border-gray-600 font-mono text-sm text-left h-48 overflow-y-auto flex flex-col-reverse">
                <div className="flex-grow">
                 {output.map((line) => (
                    <motion.p 
                        key={line.id} 
                        initial={{ opacity: 0}} 
                        animate={{ opacity: 1}} 
                        className="text-green-400 leading-relaxed"
                    >
                        <span className="text-gray-500 mr-2">&gt;</span>{line.text}
                    </motion.p>
                 ))}
                 </div>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
                size="lg"
                onClick={startDemoSession}
                disabled={isDemoActive}
                className="w-full sm:w-auto py-3 text-lg bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white border-0 pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Power className="w-5 h-5 mr-2" /> Start Demo Session
            </Button>
            <Button
                size="lg"
                onClick={stopDemo}
                disabled={!isDemoActive}
                variant="destructive"
                className="w-full sm:w-auto py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <PowerOff className="w-5 h-5 mr-2" /> Stop Session
            </Button>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <p>
              For full access and more hardware options, please{' '}
              <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300">
                create an account
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DemoPage;