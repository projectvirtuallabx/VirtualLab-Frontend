import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button'; // Ensure your button component is correctly imported

const ControlsPage = () => {
  const handleReset = () => {
    // Add reset logic here (e.g., API call to reset ESP32)
    alert('🧠 Device Reset Triggered!');
  };

  return (
    <>
      <Helmet>
        <title>Controls | VirtualLab</title>
        <meta name="description" content="Control panel to manage ESP32 commands and resets." />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900/10 to-gray-800/30 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            ⚙️ Control Buttons
          </h1>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Use the button below to send a reset command to the ESP32 device.
            </p>

            <Button
              onClick={handleReset}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 rounded-lg text-lg font-semibold"
            >
              🔄 Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlsPage;
