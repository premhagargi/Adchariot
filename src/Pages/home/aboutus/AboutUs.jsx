/* eslint-disable react/prop-types */
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import OurPartners from "../services/Partners";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MilestoneSlider = ({ milestones }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % milestones.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? milestones.length - 1 : prev - 1
    );

  const fadeVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const milestone = milestones[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-12mt-10">
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
        >
          <ChevronRight />
        </button>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={milestone.id}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={`flex flex-col ${
              currentIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-16 w-full`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      id: 1,
      title: "The Beginning",
      date: "January 2024",
      description: "Launch of AD Chariot with our first 3D LED billboard truck",
      image: "Images/IMG_3865.JPG"
    },
    {
      id: 2,

      image: "Images/IMG_3843.JPG"
    },
    {
      id: 3,

      image: "Images/IMG_3859.JPG"
    },
    {
      id: 3,

      image: "Images/IMG_3843.JPG"
    },
  ];
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="h-full min-h-[600px] flex flex-col items-center justify-center text-center px-4 py-12 bg-transparent"
      >
        <motion.div
          className="overflow-hidden mb-6 w-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'Next-Gen',
              1000,
              'Smart',
              1000,
              'Dynamic',
              1000
            ]}
            wrapper="div"
            speed={30}
            className="text-4xl sm:text-5xl md:text-7xl font-bold px-4"
            style={{ 
              display: 'inline-block',
              background: 'radial-gradient(circle, #ffcc00 20%, #000 80%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              `AD Chariot transforms outdoor advertising with mobile 3D LED billboard trucks, ensuring high-impact, geo-targeted brand promotions. Expanding beyond billboards, we also offer digital marketing and creative solutions, making us a one-stop advertising hub.`,
              500
            ]}
            wrapper="p"
            speed={0.1}
            className="text-lg sm:text-xl md:text-2xl text-black font-light leading-relaxed"
            cursor={true}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <TypeAnimation
            sequence={[
              'ADVERTISING IN MOTION',
              2000,
              'BRAND EXPERIENCES',
              2000,
              'DIGITAL INNOVATION',
              2000
            ]}
            wrapper="div"
            speed={40}
            className="text-xs sm:text-sm md:text-base font-mono tracking-widest"
            style={{ color: '#ffcc00' }}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          className="mt-8 animate-bounce p-5 cursor-pointer flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          onClick={() => {
            window.scrollBy({
              top: 700,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffcc00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>


      {/* Founder Section */}
      <section className="relative min-h-screen bg-transparent py-12">
        <motion.div 
          className="relative h-full flex items-center"
          style={{ y: yPos }}
        >
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Image Section */}
            <motion.div
              className="relative group w-full"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.img
                src="Images/omkar2.png"
                alt="Founder"
                className="w-full h-[600px] md:h-[600px] object-cover shadow-xl transform group-hover:rotate-1 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg" />
            </motion.div>

            {/* Text Section */}
            <motion.div 
              className="text-black space-y-6 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold">
                <span className="text-[#ffcc00]">Founder</span>
              </h3>
              <p className="text-base text-black sm:text-xl leading-relaxed border-l-4 border-[#ffcc00] pl-4">
              Omkkaar Matth, a leading Civil Engineer and contractor in Belagavi, is the driving force behind AD Chariot, an innovative platform revolutionizing outdoor advertising with mobile 3D LED billboard trucks. His expertise in civil engineering and construction, combined with a deep passion for art, social media, and technology, has enabled him to blend creativity with innovation to redefine brand visibility.
              </p>
              <p className="text-base text-black sm:text-xl leading-relaxed border-l-4 border-[#ffcc00] pl-4">
              With a commitment to delivering high-impact, geo-targeted advertising solutions, Omkkaar ensures that AD Chariot stays at the forefront of mobile advertising, offering brands unparalleled reach and engagement. His leadership and forward-thinking approach continue to position AD Chariot as a game-changer in the industry, transforming the way brands connect with their audiences.              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-20 relative mt-[100px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-black">Our </span>
            <span className="text-[#ffcc00]">Journey</span>
          </h2> */}

          <div className="space-y-32">
          <MilestoneSlider milestones={milestones} />

          </div>
        </motion.div>
      </section>

      {/* Partners Section with motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-[150px] mb-16" // Added proper spacing
      >
        <OurPartners />
      </motion.div>

      {/* CTA Section */}
      <motion.section
        className="h-[600px] flex items-center justify-center text-center bg-transparent px-4 py-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black">Ready to </span>
            <span className="text-[#ffcc00] underline underline-offset-8">Elevate</span>
            <br />
            <span className="text-black">Your Brand?</span>
          </motion.div>
          
          <motion.p
            className="text-base sm:text-xl text-black mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4 }}
          >
            Partner with us to create campaigns that don't just reach audiences, 
            but create lasting impressions through strategic movement and innovation.
          </motion.p>

          <motion.div
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#ffcc00",
              color: "#000"
            }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold bg-black text-black border-2 border-black hover:border-[#ffcc00]"
          >
            <Link to="/contact">Start Your Campaign</Link>
          </motion.div>

          <motion.div
            className="mt-8 animate-bounce p-5 cursor-pointer justify-center items-center flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 10 }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 sm:w-10 h-8 sm:h-10"
              transform="rotate(180)"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="#ffcc00"
              />
              <path
                d="M16 11l-4 4m0 0l-4-4m4 4V5"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;