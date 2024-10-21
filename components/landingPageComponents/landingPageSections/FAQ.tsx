import React, { useEffect } from "react";
import FAQComp from "../FAQComp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { faqs } from "@/config/landing_page/home";

const FAQ = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="FAQ"
      className="mt-[120px] dark:bg-dukiaBlue dark:text-white px-4 sm:px-auto"
    >
      <div className="max-w-[1064px] mx-auto w-full space-y-4 flex flex-col items-center">
        <motion.p
          variants={titleVariants}
          className="font-extrabold text-dukiaBlue dark:text-white text-[2.5rem]/[3.75rem] text-center"
        >
          Frequently Asked Questions (FAQs)
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid gap-2.5 w-full"
        >
          {faqs.slice(0, 5).map((faq) => (
            <motion.div key={faq.id} variants={itemVariants}>
              <FAQComp title={faq.title} content={faq.content} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={buttonVariants} className="pt-16">
          <Link
            href="/faqs"
            className="flex items-center gap-2.5 py-3 px-5 bg-[#E8E9ED] rounded-lg font-semibold"
          >
            See All <ArrowRight size={19} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
