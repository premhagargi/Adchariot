/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin, Link2, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Particles } from "@/Components/magicui/particles";
import { DotPattern } from "@/Components/magicui/dot-pattern";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const socialIcons = [
  { Icon: Share2, link: "#" },
  { Icon: Facebook, link: "#" },
  { Icon: Twitter, link: "#" },
  { Icon: Linkedin, link: "https://www.linkedin.com/in/omkarmath999/" },
  { Icon: Instagram, link: "https://www.instagram.com/adchariot.in/" },
];

const Footer = () => {
  const controls = useAnimation();
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={controls}
      variants={footerVariants}
      className="relative text-white py-12 mb-0"
    >
      {/* Particles Background */}
      <div className="absolute inset-0">
        <DotPattern className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        <motion.div variants={staggerVariants} className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Footer Links */}
          {[
            {
              title: "Our Services",
              links: [
                "3D Billboard Advertising",
                "Social Media Management",
                "Paid Ads",
                "Content Production",
                "Influencer Marketing",
                "Web Design & Development"
              ],
            },
            {
              title: "Why Choose Us",
              links: [
                "Wide City Coverage",
                "Creative Advertising Solutions",
                "Make Impactful ROI",
                "Impactful Results",
              ],
            },
            {
              title: "Explore More",
              links: ["About Us", "Testimonials", "FAQs"],
              routeLinks: ["/aboutus", "", ""],
            },
            {
              title: "Legal Information",
              links: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
            },
          ].map((section, index) => (
            <motion.div key={index} variants={footerVariants} className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="cursor-pointer hover:text-blue-500 transition-all duration-300 text-white"
                  >
                    {section.routeLinks ? <Link to={section.routeLinks[i] || "#"}>{link}</Link> : link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Us */}
          <motion.div variants={footerVariants} className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li className="hover:text-blue-500 transition-all duration-300">info@adchariot.in</li>
              <li>
                <a href="tel:+917732900099" className="hover:text-blue-500 transition-all duration-300">
                  +91-7732900099
                </a>
              </li>
              <li className="hover:text-blue-500 transition-all duration-300">67, 15th Cross, 3rd Phase, JP Nagar, Bengaluru, 560078</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={footerVariants}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="cursor-pointer transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div variants={footerVariants} className="text-center text-white mt-8">
          © {new Date().getFullYear()} Ad Chariot. All rights reserved. <br />
          Designed and Developed by <a href="https://premhagaragi.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@ AD Chariot</a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
