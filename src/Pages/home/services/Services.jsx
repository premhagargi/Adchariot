/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { TextAnimate } from "../../../Components/magicui/text-animate";
import CallToAction from './CTA';

const ServicesComponent = () => {
  const [expandedIds, setExpandedIds] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [showServices, setShowServices] = useState(false);
  const [fadeOutComplete, setFadeOutComplete] = useState(false);
  
  const headingWords = ["services", "we", "offer"];
  const animationTimerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);
    
    // Show all words initially
    setActiveWordIndex(-1);
    
    // Start the sequential word fade-out animation after 2 seconds
    const startAnimationTimer = setTimeout(() => {
      let currentIndex = 0;
      
      // Function to handle fading out words one by one
      const fadeOutNextWord = () => {
        if (currentIndex < headingWords.length) {
          setActiveWordIndex(currentIndex);
          currentIndex++;
          animationTimerRef.current = setTimeout(fadeOutNextWord, 200); // Time between words fading
        } else {
          // All words have faded out
          setTimeout(() => {
            setFadeOutComplete(true);
            setTimeout(() => setShowServices(true), 150);
          }, 200); // Short delay after last word fades
        }
      };
      
      fadeOutNextWord();
    }, 1000); // Initial delay before animation starts
    
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(startAnimationTimer);
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  const services = [
    { id: 1, title: "3D Billboard Advertising", description: "Performance-focused advertising that maximizes your marketing investment. We design, implement, and optimize campaigns with our customized 3D mobile billboards." },
    { id: 2, title: "Marketing Consultancy", description: "Expert-led marketing strategy that transforms your business objectives into measurable results. We analyze market trends, identify opportunities, and create data-driven plans that position your brand for sustainable growth." },
    { id: 3, title: "Social Media Management", description: "Strategic social presence building that turns followers into advocates. We develop platform-specific content strategies, manage community engagement, and leverage analytics to continuously refine your digital footprint." },
    { id: 4, title: "Graphic Design", description: "Purposeful visual communication that elevates your message. Our design solutions combine aesthetic excellence with strategic thinking to create compelling assets that engage your audience and strengthen your brand position." },
    { id: 5, title: "Paid Ads", description: "Performance-focused advertising that maximizes your marketing investment. We design, implement, and optimize campaigns across platforms, ensuring your message reaches the right audience at the perfect moment." },
    { id: 6, title: "Creative Direction", description: "Visionary creative leadership that unifies your brand communications. We establish clear aesthetic principles and conceptual frameworks that guide all visual storytelling, ensuring consistency while driving innovation." },
    { id: 7, title: "Content Production", description: "Premium content creation that captivates and converts. From compelling copywriting to immersive video production, we develop multi-format content that tells your story authentically across all touchpoints." },
    { id: 8, title: "Web Design & Development", description: "User-centric digital experiences that perform as beautifully as they look. We combine strategic UX, striking design, and clean code to build websites that serve as powerful business tools while delighting your visitors." }
  ];

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const leftColumnIds = [1, 3, 5, 7];
  const rightColumnIds = [2, 4, 6, 8];

  const ServiceItem = ({ service }) => (
    <div className="border-t-2 border-white">
    <div 
      className="py-3 md:py-5 lg:py-7 h-[82px] lg:h-[100px] flex justify-between items-center cursor-pointer" 
      onClick={() => toggleExpand(service.id)}
    >
      <h2 className="text-lg md:text-3xl lg:text-4xl tracking-tight">{service.title}</h2>
      <div className="p-1 md:p-2 lg:p-3">
        {expandedIds[service.id] ? (
          <Minus size={20} className="lg:w-6 lg:h-6" />
        ) : (
          <Plus size={20} className="lg:w-6 lg:h-6" />
        )}
      </div>
    </div>
    
    <AnimatePresence>
      {expandedIds[service.id] && (
        <motion.div
          key={`content-${service.id}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <TextAnimate 
            animation="slideUp" 
            by="word" 
            as="p" 
            className="mb-3 md:mb-5 lg:mb-7 text-sm md:text-base lg:text-lg"
          >
            {service.description}
          </TextAnimate>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center"></div>;
  }

  return (
    <div className="bg-transparent backdrop-blur-md text-[#f5f2d6] min-h-screen py-2 md:py-4 px-3 md:px-8">
      <div className="container mx-auto max-w-6xl h-full">
      {!fadeOutComplete && (
  <div className="flex items-center h-screen pt-0">
    <div className="w-full mt-0 md:mt-0" style={{ marginTop: "-15vh" }}>
      <div
        className="text-7xl md:text-8xl tracking-tight text-left flex flex-wrap"
        style={{ color: "#f5f2d6" }}
      >
        {headingWords.map((word, index) => (
          <motion.span
            key={index}
            className="mr-5 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeWordIndex >= 0
                ? activeWordIndex >= index
                  ? 0
                  : 1
                : 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2 * index
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  </div>
)}


{showServices && (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mb-8 md:mb-10 lg:mb-12 lg:mt-20"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-12">
      <div>
        {services.filter(service => leftColumnIds.includes(service.id)).map((service, index) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <ServiceItem service={service} />   
          </motion.div>
        ))}
      </div>
      
      <div>
        {services.filter(service => rightColumnIds.includes(service.id)).map((service, index) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <ServiceItem service={service} />
          </motion.div>
        ))}
      </div>
    </div>
    
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-3 md:px-10 lg:px-16 mt-16 md:mt-20 lg:mt-24 mb-16 md:mb-20 lg:mb-24">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>

    <div className="px-3 md:px-8 lg:px-12">
      <CallToAction />
    </div>
  </motion.div>
)}
      </div>
    </div>
  );
};

export default ServicesComponent;