import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MessageSquare } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen  py-20">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto flex flex-col items-center justify-center text-black px-6 py-12"
      >
        {/* Main Heading with Animation */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Let's Connect",
              1000,
              "Reach Out To Us",
              1000,
              "Get In Touch",
              1000
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ 
              background: 'linear-gradient(to right, #ffcc00, #ffffff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
            repeat={Infinity}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            We're excited to transform your brand's visibility with our innovative mobile advertising solutions. Connect with us today!
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
          {/* Call Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className=" backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#ffcc00] transition-all shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#ffcc00]/20 p-5 rounded-full mb-6">
                <PhoneCall className="w-10 h-10 text-[#ffcc00]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Call Us Directly</h3>
              <p className="text-gray-400 mb-6">Speak with our advertising specialists</p>
              <motion.a
                href="tel:+917732900099"
                whileHover={{ scale: 1.05, backgroundColor: "#ffcc00" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-8 rounded-xl shadow-xl transition-all text-xl"
              >
                <PhoneCall className="w-6 h-6" /> +91 77329 00099
              </motion.a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className=" backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#ffcc00] transition-all shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#ffcc00]/20 p-5 rounded-full mb-6">
                <Mail className="w-10 h-10 text-[#ffcc00]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-400 mb-6">Get a detailed response within 24 hours</p>
              <motion.a
                href="mailto:info@adchariot.in"
                whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-xl shadow-xl transition-all text-xl"
              >
                <Mail className="w-6 h-6" /> info@adchariot.in
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-[#ffcc00] font-medium mb-4">Ready to revolutionize your outdoor advertising?</p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team of experts is standing by to discuss how our mobile 3D LED billboard trucks can take your brand to the next level.
          </p>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 p-6 border border-gray-800 rounded-xl  max-w-md"
        >
          <h3 className="text-xl text-white font-semibold mb-4 text-center">Business Hours</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-300">
            <p className="text-right border-r pr-4 border-gray-700">Monday - Friday:</p>
            <p className="pl-4">9:00 AM - 6:00 PM</p>
            <p className="text-right border-r pr-4 border-gray-700">Saturday:</p>
            <p className="pl-4">10:00 AM - 4:00 PM</p>
            <p className="text-right border-r pr-4 border-gray-700">Sunday:</p>
            <p className="pl-4">Closed</p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}