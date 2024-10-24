import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiDoubleQuotesR } from "react-icons/ri";
import { customerReviews } from "@/config/landing_page/home";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= customerReviews.length ? 0 : prevIndex + 2
    );
    controls.start("hidden").then(() => controls.start("visible"));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? customerReviews.length - 2 : prevIndex - 2
    );
    controls.start("hidden").then(() => controls.start("visible"));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 360, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
  };

  const dotVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.5 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="customer-review"
      className="px-2 md:px-8 mt-[120px] dark:bg-dukiaDark text-dukiaBlue dark:text-white"
    >
      <div className="max-w-[1064px] mx-auto w-full flex flex-col space-y-8 text-center">
        <motion.div
          className="flex flex-col gap-4 text-center font-extrabold"
          variants={containerVariants}
        >
          <motion.p
            className="text-[2.5rem]/[3.75rem]"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
          >
            Customers Reviews
          </motion.p>
          <motion.p
            className="text-xl/[1.875rem]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, delay: 0.2 },
              },
            }}
          >
            What various satisfied customers have to say about Dukia Gold!
          </motion.p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex justify-center gap-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              {customerReviews
                .slice(currentIndex, currentIndex + 2)
                .map((review) => (
                  <motion.div key={review.key} variants={cardVariants}>
                    <Card className="dark:bg-dukiaBlue rounded-2xl border-0 md:h-[297px] w-[400px] shadow-[10px_15px_5px_0px_#D6C18F26]">
                      <CardContent className="flex flex-col p-3.5 aspect-video gap-3 justify-between w-full h-full text-dukiaBlue dark:text-white text-sm">
                        <div className="flex flex-row-reverse">
                          <motion.div
                            className="flex justify-end"
                            variants={quoteVariants}
                          >
                            <RiDoubleQuotesR size={72} color="#DAAA38" />
                          </motion.div>
                          <motion.blockquote
                            className="text-left pt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {review.review}
                          </motion.blockquote>
                        </div>
                        <motion.p
                          className="font-bold text-left"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {review.name}
                        </motion.p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={prevSlide}
            className="absolute text-dukiaGold bg-white border-none rounded-full w-14 h-14 top-1/2 left-0 transform -translate-y-1/2 shadow-[0px_1px_2px_0px_#B09B4F1A,0px_3px_3px_0px_#B09B4F17,0px_7px_4px_0px_#B09B4F0D,0px_13px_5px_0px_#B09B4F03,0px_21px_6px_0px_#B09B4F00]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="text-5xl font-light">&lt;</span>
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute flex items-center justify-center text-dukiaGold bg-white border-none rounded-full w-14 h-14 top-1/2 right-0 transform -translate-y-1/2 shadow-[0px_1px_2px_0px_#B09B4F1A,0px_3px_3px_0px_#B09B4F17,0px_7px_4px_0px_#B09B4F0D,0px_13px_5px_0px_#B09B4F03,0px_21px_6px_0px_#B09B4F00]"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="text-5xl font-light">&gt;</span>
          </motion.button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-5 pt-5">
          {Array.from({ length: Math.ceil(customerReviews.length / 2) }).map(
            (_, index) => (
              <motion.div
                key={index}
                className={`rounded-full ${
                  index === currentIndex / 2 ? "bg-dukiaBlue w-16 h-3" : "w-3 h-3 bg-gray-300"
                }`}
                variants={dotVariants}
                animate={index === currentIndex / 2 ? "active" : "inactive"}
                onClick={() => setCurrentIndex(index * 2)}
              />
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default CustomerReviews;
