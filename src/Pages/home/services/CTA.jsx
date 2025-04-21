import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AuroraText } from "@/Components/magicui/aurora-text";
import { DotPattern } from "@/Components/magicui/dot-pattern";
import { RainbowButton } from "@/Components/magicui/rainbow-button";

const CallToAction = () => {
  return (
<div className="relative flex h-[50vh] lg:h-[60vh] w-[100%] flex-col items-center justify-center overflow-hidden rounded-lg px-4 md:px-0 lg:px-8">
  {/* Dot Pattern Background */}
  <DotPattern
    className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
  />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-center">
    {/* Animated Heading */}
    <motion.h2
      className="text-3xl md:text-5xl lg:text-6xl text-black"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-black text-[40px] md:text-[48px] lg:text-[56px] mb-2 lg:mb-4">Ready to elevate your advertising game ?</span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-base md:text-lg lg:text-xl text-black mt-2 md:mt-1 lg:mt-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Let’s chat and collaborate
    </motion.p>

    {/* Button */}
    <Link to="/contact">
      <RainbowButton className="mt-6 md:mt-10 lg:mt-12 px-6 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg">
        Get in touch
      </RainbowButton>
    </Link>
  </div>
</div>
  );
};

export default CallToAction;
