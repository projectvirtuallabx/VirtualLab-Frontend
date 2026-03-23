import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Cpu, RadioTower, Server, CalendarCheck2, ArrowRight } from 'lucide-react';


const LabAccessPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const hardwareLabs = [
    { 
      name: "STM32 Nucleo Lab", 
      description: "Access versatile STM32 Nucleo boards for ARM Cortex-M development. Perfect for IoT, robotics, and embedded systems.",
      icon: Cpu,
      features: ["Real-time debugging", "Peripheral access", "Various toolchain support"],
      imageAlt: "STM32 Nucleo development board in a lab setting",
      imageUrlKey: "stm32_nucleo_lab"
    },
    { 
      name: "Raspberry Pi Hub", 
      description: "Utilize Raspberry Pi single-board computers for Linux-based projects, Python scripting, and multimedia applications.",
      icon: Server,
      features: ["SSH access", "GPIO control", "Camera module support"],
      imageAlt: "Raspberry Pi connected to peripherals",
      imageUrlKey: "raspberry_pi_hub"
    },
    { 
      name: "ESP32 IoT Corner", 
      description: "Experiment with ESP32 microcontrollers, ideal for Wi-Fi and Bluetooth connected IoT devices and sensor networks.",
      icon: RadioTower,
      features: ["Wi-Fi & Bluetooth", "Deep sleep modes", "Arduino & MicroPython IDE"],
      imageAlt: "ESP32 board with sensors and LEDs",
      imageUrlKey: "esp32_iot_corner"
    },

    { 
      name: "FROST Lab", 
      description: "Experiment with ESP32 microcontrollers, ideal for Wi-Fi and Bluetooth connected IoT devices and sensor networks.",
        
      features: ["Wi-Fi & Bluetooth",  "Arduino & MicroPython IDE"],
      imageAlt: "FROST",
      imageUrlKey: "frost"
    },
  ];

  const imageMap = {
    stm32_nucleo_lab: "https://cdn.xingosoftware.com/elektor/images/fetch/dpr_1,w_800,h_460,c_fit/https%3A%2F%2Fwww.elektormagazine.com%2Fassets%2Fupload%2Fimages%2F16%2F20180614135155_CoverSTM32nucleoBoards.jpg",
    raspberry_pi_hub: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzcGJlcnJ5JTIwcGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    esp32_iot_corner: "/images/esp32.png",
    frost: "/images/frost1.png",
  };

  return (
    <>
      <Helmet>
        <title>Lab Access - VirtualLab</title>
        <meta name="description" content="Explore available hardware labs at VirtualLab. Choose from STM32, Raspberry Pi, ESP32, and more. Book your slot and start your remote embedded development session." />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900/10 to-gray-800/30">
        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">Explore Our Hardware Labs</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Dive into our diverse collection of real embedded hardware. Find the perfect board for your project, check availability, and book your remote access slot.
          </p>
        </motion.section>

        <motion.section 
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{ animate: { transition: { staggerChildren: 0.1 }}}}
          initial="initial"
          animate="animate"
        >
          {hardwareLabs.map((lab, index) => (
            <motion.div
              key={index}
              className="feature-card rounded-xl overflow-hidden flex flex-col"
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(96, 165, 250, 0.25)" }}
            >
              <div className={`${lab.name === "FROST Lab" ? "md:h-[14rem]" : "md:h-[21rem]"} w-full overflow-hidden`}>
  <img 
    src={imageMap[lab.imageUrlKey]} 
    alt={lab.imageAlt} 
    className="w-full h-full object-cover" 
  />
</div>

<div className=" p-6 flex flex-col flex-grow">
  {lab.name === "FROST Lab" ? (
    <div className="-mt-12 w-10 h-10 flex items-center justify-center mb-4">
      <img src="/images/frosticon1.jpg" alt="FROST Icon" className="w-8 h-8" />
    </div>
  ) : (
    <lab.icon className="w-12 h-12 text-blue-400 mb-4" />
  )}

                <h2 className="text-2xl font-semibold mb-2">{lab.name}</h2>
                <p className="text-gray-300 mb-4 flex-grow">{lab.description}</p>
                <ul className="space-y-1 text-gray-400 mb-6">
                  {lab.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CalendarCheck2 className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  <Link to="/book-slot" state={{ labName: lab.name }}>
                    Book Slot <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                {lab.name === "ESP32 IoT Corner" && (
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full mt-3 border border-blue-400 text-blue-400 hover:bg-blue-950"
                  >
                    <Link to="/access-esp32-lab">
                      Access Lab <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                )}

                {lab.name === "FROST Lab" && (
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full mt-3 border border-blue-400 text-blue-400 hover:bg-blue-950"
                  >
                    <Link to="/frostlab">
                      Access Lab <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6">Don't See What You Need?</h2>
          <p className="text-lg text-gray-300 mb-8">
            We are constantly expanding our hardware offerings. If you have specific hardware requirements or suggestions, please let us know!
          </p>
          <Button asChild size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg">
            <Link to="/request-hardwar">Request Hardware</Link>
          </Button>
        </motion.section>
      </div>
    </>
  );
};

export default LabAccessPage;
