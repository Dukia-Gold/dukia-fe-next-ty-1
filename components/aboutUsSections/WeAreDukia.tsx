import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutContent, visionAndMission } from "@/config/landing_page/about";

interface WeAreDukiaProps {
  nextSectionRef: React.RefObject<HTMLElement>;
}

const WeAreDukia = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="mt-[120px] max-w-[1063px] mx-auto text-dukiaBlue dark:bg-dukiaBlue dark:text-white space-y-[120px]">
      {aboutContent.map((item, index) => {
        const sectionInView = item.inView === "inView1" ? inView1 : inView2; // Fixed syntax
        return (
          <motion.div
            key={index}
            ref={item.ref === "ref1" ? ref1 : ref2}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className={`${
              item.reverseLayout ? "flex-row-reverse" : ""
            } flex justify-between`}
          >
            <motion.p
              variants={item.reverseLayout ? fadeInRight : fadeInLeft}
              className="max-w-[519px] text-base"
            >
              {item.pg1}
              <br />
              <br />
              {item.pg2}
              <br />
              <br />
              {item.pg3}
              <br />
              <br />
              {item.pg4}
            </motion.p>

            <motion.p
              variants={item.reverseLayout ? fadeInLeft : fadeInRight}
              className={`${
                item.reverseLayout ? "" : "text-end"
              } text-[40px] font-extrabold max-w-[410px]`}
            >
              {item.title}
            </motion.p>
          </motion.div>
        );
      })}

      {visionAndMission.map((section, index) => {
        const sectionInView = section.inView === "inView3" ? inView3 : inView4; // Fixed syntax
        return (
          <motion.div
            key={index}
            ref={section.ref === "ref3" ? ref3 : ref4}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className={`flex ${
              section.reverseLayout ? "flex-row-reverse" : ""
            } justify-between items-center`}
          >
            <motion.div
              variants={section.reverseLayout ? fadeInRight : fadeInLeft}
              className="max-w-[410px] space-y-7"
            >
              <p className="font-extrabold text-[40px]">{section.title}</p>
              <p>{section.content}</p>
            </motion.div>

            <motion.div
              variants={section.reverseLayout ? fadeInLeft : fadeInRight}
              className="max-w-[519px] h-[410px] bg-[#FBF7EB] bg-cover bg-no-repeat bg-center rounded-2xl overflow-hidden"
            >
              <Image
                src={section.image || ""} // Fallback image
                alt=""
                width={519}
                height={410}
                className="rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default WeAreDukia;
