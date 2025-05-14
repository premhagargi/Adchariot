import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";
import { TextAnimate } from "@/Components/magicui/text-animate";
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-10">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        {/* Animated Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
   <TextAnimate animation="blurIn" by="word" as="p" className="text-[#bd410c] text-5xl mb-3 ">
          REACH OUT TO US
          </TextAnimate>    
           <TextAnimate animation="blurIn" by="word" as="p" className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
   Transform your brand's visibility with modern mobile advertising solutions. Reach out today.         
    </TextAnimate> 
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Phone Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="group rounded-3xl  p-8 border border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="bg-[#bd410c]/10 group-hover:bg-[#bd410c]/20 p-5 rounded-full transition-all">
                <PhoneCall className="w-8 h-8 text-[#bd410c]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Call Us Directly</h3>
              <p className="text-gray-500 text-sm mt-2 text-center">Speak with our advertising specialists</p>
              <a
                href="tel:+917732900099"
                className="mt-6 inline-flex items-center gap-2 text-white bg-[#bd410c] hover:bg-[#a73505] px-6 py-3 rounded-full text-lg font-medium shadow-lg transition"
              >
                <PhoneCall className="w-5 h-5" /> +91 77329 00099
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="group rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="bg-blue-500/10 group-hover:bg-blue-500/20 p-5 rounded-full transition-all">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Email Us</h3>
              <p className="text-gray-500 text-sm mt-2 text-center">Detailed response within 24 hours</p>
              <a
                href="mailto:info@adchariot.in"
                className="mt-6 inline-flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg transition"
              >
                <Mail className="w-5 h-5" /> info@adchariot.in
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-lg font-medium text-[#bd410c] mb-2">Ready to revolutionize outdoor advertising?</p>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our team is here to help your brand shine using 3D LED mobile billboards and modern marketing strategies.
          </p>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 w-full bg-[#d3541e] p-6 max-w-md mx-auto border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-[#f5f2d6] text-center mb-4">Business Hours</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
            <p className="text-right text-[#f5f2d6] border-r pr-3 border-gray-300">Monday - Friday:</p>
            <p className="pl-3 text-[#f5f2d6]" >9:00 AM - 6:00 PM</p>
            <p className=" text-[#f5f2d6] text-right border-r pr-3 border-gray-300">Saturday:</p>
            <p className="text-[#f5f2d6] pl-3">10:00 AM - 4:00 PM</p>
            <p className="text-[#f5f2d6] text-right border-r pr-3 border-gray-300">Sunday:</p>
            <p className="text-[#f5f2d6] pl-3">Closed</p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
