import React from 'react';
import { Helmet } from 'react-helmet';

const Esp32CamPage = () => {
  return (
    <>
      <Helmet>
        <title>ESP32-CAM Stream | VirtualLab</title>
        <meta name="description" content="Live ESP32-CAM feed and stream monitoring in real-time." />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900/10 to-gray-800/30 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span role="img" aria-label="camera">📷</span> ESP32-CAM Stream (PlaceHolder)
          </h1>

          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 text-white">
            <div className="relative w-full h-[300px] md:h-[360px] bg-black rounded-xl border border-gray-600 overflow-hidden flex items-center justify-center">
              {/* LIVE Badge */}
              <div className="absolute top-3 left-3 text-xs bg-gray-700/70 px-3 py-1 rounded-lg text-green-400 animate-pulse">
                ● Live
              </div>

              {/* Placeholder text */}
              <p className="text-gray-400 text-lg text-center">Live Camera Feed Loading...</p>
            </div>

            <p className="text-sm text-gray-400 mt-4 text-center">
              This panel simulates how a real-time ESP32-CAM stream would appear. Once the camera module is connected,
              the video feed will display here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Esp32CamPage;
