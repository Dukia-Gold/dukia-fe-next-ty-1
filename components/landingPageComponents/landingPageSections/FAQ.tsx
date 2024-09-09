import React, { useEffect } from "react";
import FAQComp from "../FAQComp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const FAQArray = [
    {
      id: 1,
      title: "Who is Dukia Gold? ",
      content:
        "Dukia Gold & Precious Metals Refining Co. Ltd (Dukia Gold) is a full-service bullion merchant involved in the trading (buying and selling), vaulting and custodial services of gold and other precious metals in addition to our other gold value chain activities from mines to market."
    },
    {
      id: 2,
      title: "How do I buy gold from you?",
      content:
        "Once your Dukia Gold Trading Account has been set up, you can then start buying from our selection of investment grade gold products.",
    },
    {
      id: 3,
      title: "What are your delivery methods?",
      content:
        "Our packages are discretely wrapped and delivered through our partner couriers with an option for insurance. You can also advise your preferred courier service provider and arrange for your insurance. When you receive goods from us by courier, we advise you ensure the external packaging has not been tampered with. If you notice any sign of tampering or damages, you should not sign for it.",
    },
    {
      id: 4,
      title: "Can you store your gold with us?",
      content:
        "Yes, you can opt for storage of your gold at our designated LBMA accredited state-of-the-art, high security, and fully insured storage facility in Switzerland and UK. ",
    },
  ];

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

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="FAQ"
      className="mt-[120px] dark:bg-dukiaBlue dark:text-white px-4 sm:px-auto"
    >
      <div className="max-w-[1064px] mx-auto w-full space-y-4">
        <motion.p
          variants={titleVariants}
          className="font-extrabold text-[2.5rem]/[3.75rem] text-center"
        >
          Frequently Asked Questions (FAQs)
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid gap-2.5 w-full"
        >
          {FAQArray.map((faq) => (
            <motion.div key={faq.id} variants={itemVariants}>
              <FAQComp title={faq.title} content={faq.content} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
