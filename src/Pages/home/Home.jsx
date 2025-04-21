/* eslint-disable react/prop-types */
import { ArrowUpRight, Truck, Phone, MapPin } from "lucide-react";
import { WordRotate } from "@/Components/magicui/word-rotate";
import { Link } from "react-router-dom";
import { VelocityScroll } from "@/Components/magicui/scroll-based-velocity";
import CallToAction from "./services/CTA";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, useInView } from "framer-motion";
import OurPartners from "./services/Partners";
import { BoxReveal } from "@/Components/magicui/box-reveal";
// Scroll-triggered animation component using Framer Motion
const AnimateOnScroll = ({ children, className, delay = 0, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const billboardOptions = [
    {
      title: "LED Mobile Billboard",
      icon: <Truck />,
      description: "High-impact moving displays for maximum visibility",
      route: "/mobile-billboard",
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "3D Holographic Ads",
      icon: <MapPin />,
      description: "Cutting-edge 3D technology that stops traffic",
      route: "/3d-billboard",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Custom Campaigns",
      icon: <Phone />,
      description: "Tailored advertising solutions for your brand",
      route: "/custom-billboard",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex min-h-[83vh] md:h-screen flex-col justify-center pb-8 px-6 z-10"
        >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col max-w-xl lg:max-w-4xl text-black"
        >
          <motion.h1 variants={itemVariants} className="text-5xl font-regular lg:text-7xl text-black md:text-5xl mb-2">
            The Future of outdoor Advertising is here!
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-5xl font-regular lg:text-7xl text-black md:text-5xl mb-2">
            3D LED billboard truck For Your
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="relative inline-flex items-center border border-black rounded-full h-[50px] md:h-[60px] lg:h-[60px px-3 w-full"
          >
            <span className="text-3xl md:text-5xl pr-4 lg:text-5xl font-regular">
              <WordRotate
                words={[
                  "Jewellery showroom",
                  "Apparel Business",
                  "Hospital",
                  "Political Campaigns",
                  "Real Estate",
                  "Restaurant & Cafes",
                  "Launch events",
                  "Institutional",
                  "Promotions",
                  "Concert Promotions"
                ]}
              />
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute right-2 bg-yellow-400 rounded-full p-1"
            >
              <ArrowUpRight className="text-black w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* New Call-to-Action Button */}
          <motion.div
            variants={itemVariants}
            className="mt-6"
          >
            <Link to="/routes">
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-2 px-6 py-3 bg-[#f4cc08] text-black font-bold rounded-2xl shadow-[8px_8px_12px_rgba(0,0,0,0.15),_-4px_-4px_12px_rgba(255,255,255,0.4)] hover:shadow-[2px_2px_8px_rgba(0,0,0,0.2),_-2px_-2px_8px_rgba(255,255,255,0.5)] transition-all duration-300"
>
  Explore routes
  <ArrowUpRight className="w-5 h-5" />
</motion.button>

            </Link>
          </motion.div>
        </motion.div>
      </motion.div>


      <div className="w-full px-6 pt-8 mt-5 md:max-w-5xl md:mx-auto md:flex md:flex-col md:items-center md:justify-center">
  <div className="mt-12 space-y-6 w-full">
    {/* Intro Text */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="md:text-center"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-regular text-black md:text-5xl mb-2"
      >
        Our MVP 3D Billboard Truck
      </motion.h1>
      <p className="mt-2 text-base md:text-lg text-gray-700">
        A mobile solution for impactful advertising. Ideal for campaigns that value
        visibility, creativity, and flexibility.
      </p>
    </motion.div>

    {/* Image of the Truck */}
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-4 md:flex md:justify-center"
    >
      <img
        src="Images/1000014890.png"
        alt="3D Billboard LRD Truck"
        className="w-full h-auto md:max-w-3xl"
      />
    </motion.div>
  </div>
</div>




<div className="size-full max-w-4xl mx-auto items-center justify-center overflow-hidden pt-8 mt-20 mb-[150px] px-6 lg:flex lg:flex-col lg:items-center">
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true, amount: 0.2, delay: 0.5 }}
  >
    <BoxReveal boxColor={"#000"} duration={1.0}>
      <p className="text-[1.5rem] lg:text-[2.5rem]">
        Our Services<span className="text-[#5046e6]">.</span>
      </p>
    </BoxReveal>
  </motion.div>

  {/* Description */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true, amount: 0.2, delay: 0.5 }}
  >
    <BoxReveal boxColor={"#000"} duration={1.15}>
      <div className="mt-6 lg:max-w-2xl lg:text-center">
        <p className="text-base lg:text-lg">
          Call us your partner in advertising. Want to know the full scope of what we offer?
          <span className="text-[#5046e6]"> 3D billboard advertising</span>,
          <span className="text-[#5046e6]"> Marketing</span>,
          <span className="text-[#5046e6]"> Web Design & Development</span>,
          {' '}and more.
          <br />
          100% open-source, and customizable.
        </p>
      </div>
    </BoxReveal>
  </motion.div>

  {/* Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true, amount: 0.2, delay: 0.5 }}
  >
    <BoxReveal boxColor={"#000"} duration={1.25}>
      <Link to="/services">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center px-6 py-2 border border-gray-300 text-lg hover:bg-white hover:text-black transition-all duration-300 mt-3 lg:px-8 lg:py-3 lg:text-xl"
        >
          Learn More
        </motion.button>
      </Link>
    </BoxReveal>
  </motion.div>
</div>


      {/* Floating Locations Button - NEW */}
      {/* <div className="fixed bottom-8 right-8 z-20">
        <Link to="/billboard-locations">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-3 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-full text-black hover:bg-opacity-20 transition-all duration-300 shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Find Billboard Locations</span>
          </motion.button>
        </Link>
      </div> */}

      {/* Scrolling Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8"
      >
        <VelocityScroll className="mt-10 mb-10 text-black">
          Mobile Billboard Advertising • 3D LED Trucks • Marketing Consultancy • Brand Design • Influencer Marketing • Advertising • Website Development • Restaurants & Cafés • Jewellery showroom • Movie promotions • Real Estate • Hospital & Clinics • Political campaigns • Automobile • Launch events
        </VelocityScroll>
      </motion.div>

      {/* Our Partners */}
      <OurPartners />
      
      {/* Call To Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <CallToAction />
      </motion.div>
    </div>
  );
};

export default Home;