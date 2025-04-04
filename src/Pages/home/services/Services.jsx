/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TextAnimate } from "../../../Components/magicui/text-animate";
import CallToAction from './CTA';

const ServicesComponent = () => {
  const [expandedIds, setExpandedIds] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
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
      <div className="py-3 md:py-5 flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(service.id)}>
        <h2 className="text-lg md:text-3xl font-medium tracking-tight">{service.title}</h2>
        <div className="rounded-full border border-gray-400 p-1 md:p-2">
          {expandedIds[service.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
            <TextAnimate animation="slideUp" by="word" as="p" className="mb-3 md:mb-5 text-sm md:text-base">
              {service.description}
            </TextAnimate>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="bg-transparent backdrop-blur-md text-white min-h-screen py-6 md:py-12 px-3 md:px-8">
      <div className="container mx-auto max-w-6xl mb-8 md:mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight text-left md:text-left">
            Services we offer
          </h1>
          <p className="text-base md:text-2xl mb-2 md:mb-3 font-light text-left md:text-left">
            Comprehensive digital marketing and creative solutions built on customized strategy.
          </p>
          <p className="text-base md:text-2xl mb-8 md:mb-12 font-light text-left md:text-left">
            As your partners in creativity, we accelerate your growth through our expertise in:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8">
          <div>
            {services.filter(service => leftColumnIds.includes(service.id)).map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}>
                <ServiceItem service={service} />   
              </motion.div>
            ))}
          </div>
          
          <div>
            {services.filter(service => rightColumnIds.includes(service.id)).map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}>
                <ServiceItem service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-3 md:px-10 mt-16 md:mt-20 mb-16 md:mb-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      <div className="px-3 md:px-8">
        <CallToAction />
      </div>
    </div>
  );
};

export default ServicesComponent;
