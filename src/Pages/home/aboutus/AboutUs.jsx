import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import OurPartners from "../services/Partners";
import { TextAnimate } from "@/Components/magicui/text-animate";
import { useSwipeable } from "react-swipeable";

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });
  const yPos = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const images = [
    {
      id: 1,
      src: "Images/IMG_3865.jpg",
      title: "The Beginning",
      date: "April 2025",
      description: "Launch of AD Chariot with our first 3D LED billboard truck"
    },
    {
      id: 2,
      src: "Images/IMG_3843.jpg",
      title: "The Beginning",
      date: "April 2025",
      description: "Launch of AD Chariot with our first 3D LED billboard truck"
    },
    {
      id: 3,
      src: "Images/IMG_3858.jpg",
      title: "The Beginning",
      date: "April 2025",
      description: "Launch of AD Chariot with our first 3D LED billboard truck"
    },
    {
      id: 4,
      src: "Images/IMG_3859.jpg",
      title: "The Beginning",
      date: "April 2025",
      description: "Launch of AD Chariot with our first 3D LED billboard truck"
    }
  ];

  // Pre-load all images at component mount
  useEffect(() => {
    const imagePromises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(err => console.error("Error preloading images:", err));
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const JourneySection = () => (
    <section className="relative overflow-hidden h-[450px] mt-20 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="relative max-w-5xl mx-auto">
          {/* Image Slider */}
          <div
            {...handlers}
            className="relative h-[300px] overflow-hidden rounded-lg bg-gray-900"
          >
            {imagesLoaded ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={images[currentImageIndex].id}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <img
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={images[currentImageIndex].id}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white z-[2]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                  >
                    <span className="text-[#ffcc00] text-xs font-medium block mb-1">
                      {images[currentImageIndex].date}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      {images[currentImageIndex].title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {images[currentImageIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white text-2xl px-3 py-1 rounded-full z-10"
                >
                  {"<"}
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white text-2xl px-3 py-1 rounded-full z-10"
                >
                  {">"}
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <div className="w-10 h-10 border-4 border-[#ffcc00] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Dots indicator moved outside */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-[#ffcc00]" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );

  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="h-full min-h-[600px] flex flex-col items-center justify-center text-center px-4 py-6 bg-transparent"
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
            className="text-5xl sm:text-7xl md:text-8xl font-bold px-4"
            style={{ 
              display: 'inline-block',
              background: 'radial-gradient(circle, #1e3a8a 20%, #60a5fa 80%)',
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
          <TextAnimate animation="blurIn" by="word" as="p" className="text-xl md:text-2xl text-gray-600 mt-4 max-w-2xl mx-auto">
            AD Chariot transforms outdoor advertising with mobile 3D LED billboard trucks, ensuring high-impact, geo-targeted brand promotions. Expanding beyond billboards, we also offer digital marketing and creative solutions, making us a one-stop advertising hub.
          </TextAnimate> 
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
          className="mt-3 animate-bounce  cursor-pointer flex justify-center"
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
            stroke="#000"
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
      <section className="relative min-h-screen bg-transparent py-12 mb-10">
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
                className="w-full h-[400px] md:h-[600px] object-cover shadow-xl transform group-hover:rotate-1 transition-all duration-500"
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
                <span className="text-[#000000]">Founder</span>
              </h3>
              <p className="text-lg text-gray-600 sm:text-xl leading-relaxed border-l-2 border-[#000] pl-4">
  Omkkaar Matth, a renowned civil engineer and contractor from Belagavi, is the visionary behind AD Chariot—an innovative platform transforming outdoor advertising through mobile 3D LED billboard trucks. His expertise in engineering, paired with a passion for art, social media, and technology, drives a unique blend of creativity and innovation in brand promotion.
</p>
<p className="text-lg text-gray-600 sm:text-xl leading-relaxed border-l-2 border-[#000] pl-4">
  Dedicated to high-impact, geo-targeted campaigns, Omkkaar’s leadership keeps AD Chariot at the cutting edge of mobile advertising, delivering exceptional reach and engagement while redefining how brands connect with their audiences.
</p>

            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* New Paragraph Section */}
      <motion.section
        className="container mx-auto px-4 py-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-lg text-gray-600 leading-relaxed border-l-2 border-[#000] pl-4">
          AD Chariot was proudly launched by Padmashree <b>Dr. Vijay Sankeshwar, Chairman of VRL,</b> and <b>Mrs. Deepa Sidnal , MD of Vijaykant Dairy & Food Products Ltd.</b> Recognizing the potential of this innovative concept, Dr. Sankeshwar personally applauded AD Chariot’s vision and addressed the media during the launch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto pt-5">
  <p className="text-lg sm:text-lg text-gray-600 leading-relaxed border-l-2 border-[#000] pl-4">
    As the in-house advertising agency for Vijaykant Dairy & Food Products Ltd.,  
    <a href="https://www.adityaamilk.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
       {' '}Adityaa Milk
    </a> and 
    <a href="https://kingicecream.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      {' '}King Icecream
    </a>, AD Chariot seamlessly fuses advanced technology with innovative strategy to transform both outdoor and digital advertising. We empower brands with unparalleled visibility, impactful storytelling, and meaningful audience engagement.
  </p>
</div>


      </motion.section>

      {/* Partners Section with motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-[150px] mb-16"
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
            <span className="text-[#000] underline underline-offset-8">Elevate</span>
            <br />
            <span className="text-black">Your Brand?</span>
          </motion.div>
          
          <motion.p
            className="text-base sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold bg-black text-white border-2 border-black hover:border-[#ffcc00]"
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