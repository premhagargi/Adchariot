/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const SplashScreen = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the counter from 0 to 100
    tl.to({ value: 0 }, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: function() {
        setCounter(Math.round(this.targets()[0].value));
      },
    });

    // After timeline completes, trigger the finish
    setTimeout(() => {
      finishLoading();
    }, 2500);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f4cc08]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.img
          src="/Images/Adobe Express - file.png"
          alt="Logo"
          className="w-32 h-32 mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 text-black tracking-tight">
            AD CHARIOT
          </h1>
          <p className="text-xl text-black/80">Advertising in Motion</p>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-black/20 rounded-full mt-8 overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={{ width: "0%" }}
            animate={{ width: `${counter}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Counter */}
        <motion.span
          className="text-sm mt-2 text-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {counter}%
        </motion.span>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
