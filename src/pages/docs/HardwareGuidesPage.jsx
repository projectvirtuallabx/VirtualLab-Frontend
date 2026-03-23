import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cpu, Server, RadioTower } from 'lucide-react';

const HardwareGuidesPage = () => {
  const hardware = [
    {
      icon: Cpu,
      name: "STM32 Nucleo-F401RE",
      description: "A powerful and versatile board from STMicroelectronics featuring an ARM Cortex-M4 core. Ideal for a wide range of applications from simple GPIO control to complex digital signal processing.",
      specs: [
        { key: "Core", value: "ARM 32-bit Cortex-M4" },
        { key: "Frequency", value: "84 MHz" },
        { key: "Flash", value: "512 KB" },
        { key: "SRAM", value: "96 KB" },
      ]
    },
    {
      icon: Server,
      name: "Raspberry Pi 4 Model B",
      description: "A mini-computer capable of running a full Linux OS. Perfect for projects requiring more computational power, networking, or a graphical user interface.",
      specs: [
        { key: "SoC", value: "Broadcom BCM2711" },
        { key: "CPU", value: "Quad core Cortex-A72 (ARM v8) 64-bit @ 1.5GHz" },
        { key: "RAM", value: "4GB LPDDR4-3200 SDRAM" },
        { key: "Connectivity", value: "Gigabit Ethernet, Dual-band 802.11ac wireless" },
      ]
    },
    {
      icon: RadioTower,
      name: "ESP32-WROOM-32",
      description: "A low-cost, low-power system on a chip microcontroller with integrated Wi-Fi and dual-mode Bluetooth. The go-to choice for IoT projects.",
      specs: [
        { key: "CPU", value: "Xtensa dual-core 32-bit LX6" },
        { key: "Frequency", value: "Up to 240 MHz" },
        { key: "Connectivity", value: "Wi-Fi 802.11 b/g/n, Bluetooth v4.2 BR/EDR & BLE" },
        { key: "Peripherals", value: "Capacitive touch, ADCs, DACs, I2C, SPI, UART" },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hardware Guides - VirtualLab Docs</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none prose-h1:gradient-text prose-p:text-gray-300"
      >
        <h1>Hardware Guides</h1>
        <p>Here you'll find detailed information about the hardware available in our labs. Each guide includes key specifications and common use cases to help you choose the right board for your project.</p>
        
        <div className="mt-12 space-y-10">
          {hardware.map((board, index) => (
            <div key={index} className="p-6 rounded-lg feature-card not-prose">
              <div className="flex items-center mb-4">
                <board.icon className="w-10 h-10 mr-4 text-blue-400" />
                <h2 className="text-2xl font-bold text-white mt-0">{board.name}</h2>
              </div>
              <p className="text-gray-300">{board.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {board.specs.map(spec => (
                  <div key={spec.key}>
                    <span className="font-semibold text-gray-200">{spec.key}: </span>
                    <span className="text-gray-400">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default HardwareGuidesPage;