import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type AboutHeroProps = {
  handleScrollToNextSection: () => void;
};

const AboutHero = ({ handleScrollToNextSection }: AboutHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-[1063px] mx-auto rounded-2xl h-[410px] mt-56 bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed flex flex-col justify-center items-center text-dukiaBlue overflow-hidden"
    >
      {/* <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"
      /> */}

      <div className="flex justify-between items-end px-14 w-full relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-extrabold max-w-[356px]"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="text-[40px]"
          >
            We Are Dukia Gold
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="text-[#676D88] text-xl"
          >
            Nigeria&apos;s Foremost & Largest Full-Service Bullion Dealer
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="max-w-[484px]"
        >
          Creating ease of access to investment-grade gold and other precious metals in Nigeria via a safe and secure trading platform.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutHero;