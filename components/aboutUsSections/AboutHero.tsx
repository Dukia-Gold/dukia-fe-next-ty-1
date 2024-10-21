import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { aboutHero } from "@/config/landing_page/about";

const AboutHero = () => {
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
            {aboutHero.title}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="text-[#676D88] text-xl"
          >
            {aboutHero.subtitle}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="max-w-[484px]"
        >
          {aboutHero.content}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutHero;
