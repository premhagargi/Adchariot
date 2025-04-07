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
          className="flex flex-col max-w-xl text-black"
        >
          <motion.h1 variants={itemVariants} className="text-5xl font-regular text-black md:text-5xl mb-2">
            The Future of outdoor Advertising is here!
          </motion.h1>
          <motion.h1 variants={itemVariants} className="text-5xl font-regular text-black md:text-5xl mb-2">
            3D LED billboard truck For Your
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="relative inline-flex items-center border border-black rounded-full h-[50px] px-3 w-full"
          >
            <span className="text-3xl md:text-5xl pr-4 font-regular">
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


      {/* Services Section */}
      <section id="services" className="relative flex flex-col items-start justify-center h-[60vh] bg-opacity-0 text-black px-6 md:px-12">
        <AnimateOnScroll className="max-w-xl">
          <h2 className="text-sm md:text-lg font-semibold uppercase tracking-wide mb-4 text-black">
            Our Services
          </h2>
          <p className="text-lg md:text-xl mb-6 text-black">
            Call us your partner in creativity. Want to know the full scope of what we offer?
          </p>
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center px-6 py-2 border border-gray-300 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </motion.button>
          </Link>
        </AnimateOnScroll>
      </section>

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