
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Monitor, 
  ChevronRight, 
  Cpu, 
  Zap, 
  Shield, 
  Clock, 
  Globe, 
  Code, 
  Wifi, 
  Settings,
  CheckCircle,
  ArrowRight,
  Play, BookOpen, Lightbulb, Rocket, Target, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const steps = [
    {
      step: "1",
      title: "Sign Up & Get Started",
      description: "Create your secure VirtualLab account in under 2 minutes. Access your personalized dashboard immediately and explore our extensive hardware catalog.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      details: [
        "Instant account creation with email or social login",
        "Personalized dashboard with project management tools",
        "Immediate access to hardware catalog and documentation",
        "Free trial credits to test the platform"
      ]
    },
    {
      step: "2",
      title: "Select Hardware & Book Time",
      description: "Browse our extensive library of real embedded hardware. Choose from Arduino, STM32, ESP32, Raspberry Pi, and more. Book your preferred time slot instantly.",
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
      details: [
        "20+ different hardware platforms available 24/7",
        "Real-time availability calendar with instant booking",
        "Flexible session durations from 1 hour to full days",
        "Advanced booking for important project deadlines"
      ]
    },
    {
      step: "3",
      title: "Connect & Code Remotely",
      description: "Access your booked hardware directly from your browser. Use our integrated IDE, or connect via VNC/SSH for maximum flexibility and control.",
      icon: Monitor,
      color: "from-green-500 to-teal-500",
      details: [
        "Zero-setup browser-based access from anywhere",
        "Multiple connection options: Web IDE, VNC, SSH, Serial",
        "Real-time hardware control and monitoring",
        "Collaborative features for team development"
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Instant Access",
      description: "No waiting for hardware delivery or setup. Start coding immediately."
    },
    {
      icon: Globe,
      title: "Work Anywhere",
      description: "Access real hardware from any device with an internet connection."
    },
    {
      icon: Shield,
      title: "Always Available",
      description: "24/7 hardware availability with 99.9% uptime guarantee."
    },
    {
      icon: Code,
      title: "Full Control",
      description: "Complete access to hardware features, GPIO, sensors, and peripherals."

    }
  ];

  const features = [
    {
      icon: Wifi,
      title: "Multiple Connection Methods",
      description: "Web IDE, VNC, SSH, Serial Console - choose your preferred workflow",
      category: "Connectivity"
    },
    {
      icon: Settings,
      title: "Hardware Management",
      description: "Real-time monitoring, reset controls, and peripheral configuration",
      category: "Control"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions from 1 hour to multiple days based on your needs",
      category: "Scheduling"
    },
    {
      icon: Cpu,
      title: "Latest Hardware",
      description: "Access to newest development boards and cutting-edge technology",
      category: "Hardware"
    }
  ];

  const useCases = [  
      {
        icon: BookOpen,
        title: "Education & Learning",
        description: "Perfect for students, educators, and online courses requiring hands-on embedded systems experience",
        examples: ["University courses", "Online bootcamps", "Self-paced learning"]
      },
      {
        icon: Lightbulb,
        title: "Rapid Prototyping",
        description: "Test ideas quickly without hardware investment. Iterate faster and validate concepts efficiently",
        examples: ["IoT prototypes", "Sensor testing", "Algorithm validation"]
      },
      {
        icon: Rocket,
        title: "Professional Development",
        description: "Enterprise teams can access specialized hardware for development without procurement delays",
        examples: ["Product development", "R&D projects", "Client demonstrations"]
      },
      {
        icon: Target,
        title: "Remote Work",
        description: "Enable distributed teams to work with physical hardware from anywhere in the world",
        examples: ["Remote teams", "Freelance projects", "Consulting work"]
      }
    ];

  return (
    <>
      <Helmet>
        <title>How It Works - VirtualLab Remote Hardware Access Platform</title>
        <meta name="description" content="Discover how VirtualLab revolutionizes embedded development. Sign up, book real hardware, and code remotely on Arduino, STM32, ESP32, Raspberry Pi and more." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900/10 to-gray-800/30 hero-pattern">
        <motion.section
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Cpu className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Remote Hardware Access Platform</span>
          </motion.div>
          
          <h1 className="text-6xl font-bold mb-6 gradient-text leading-tight">
            How Virtual Lab
            <br />
            <span className="text-white">Transforms Development</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Skip the hardware hassles and dive straight into coding. VirtualLab provides instant access to real embedded hardware through your browser, enabling you to prototype, test, and deploy projects faster than ever before.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg">
              <Link to="/demo">
                <Play className="w-5 h-5 mr-2" />
                Try Live Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg">
              <Link to="/register">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>

        {/* Benefits Grid */}
        <motion.section
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl feature-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Main Steps Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Three Simple Steps to Success</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From registration to running code on real hardware - get started in minutes, not hours
            </p>
          </motion.div>

          <motion.div
            className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                variants={fadeInUp}
              >
                {/* Icon and Step Number */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}>
                    <item.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 step-number rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4 gradient-text">{item.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{item.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Developers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for professional embedded development, accessible from anywhere
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl feature-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 font-medium mb-1">{feature.category}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
       
       {/* Use Cases Section */}
             <section className="py-24 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <motion.div
                   className="text-center mb-20"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                   <h2 className="text-4xl font-bold mb-4">Perfect for Every Use Case</h2>
                   <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                     From education to enterprise, Virtual Lab adapts to your specific needs
                   </p>
                 </motion.div>
       
                 <motion.div
                   className="grid md:grid-cols-2 gap-8"
                   variants={staggerContainer}
                   initial="initial"
                   whileInView="animate"
                   viewport={{ once: true }}
                 >
                   {useCases.map((useCase, index) => (
                     <motion.div
                       key={index}
                       className="p-8 rounded-2xl feature-card"
                       variants={fadeInUp}
                       whileHover={{ scale: 1.02 }}
                     >
                       <div className="flex items-start space-x-4 mb-6">
                         <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                           <useCase.icon className="w-8 h-8 text-white" />
                         </div>
                         <div>
                           <h3 className="text-2xl font-bold mb-3 gradient-text">{useCase.title}</h3>
                           <p className="text-gray-300 text-lg leading-relaxed mb-4">{useCase.description}</p>
                         </div>
                       </div>
                       <div className="space-y-2">
                         {useCase.examples.map((example, i) => (
                           <div key={i} className="flex items-center">
                             <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                             <span className="text-gray-400">{example}</span>
                           </div>
                         ))}
                       </div>
                     </motion.div>
                   ))}
                 </motion.div>
               </div>
             </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Development?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who've already discovered the power of remote hardware access. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg">
                <Link to="/register">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg">
                <Link to="/lab-access">
                  Explore Hardware
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
