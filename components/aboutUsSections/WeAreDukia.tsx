import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WeAreDukiaProps {
  nextSectionRef: React.RefObject<HTMLElement>;
}

const WeAreDukia = ({ nextSectionRef }: WeAreDukiaProps) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

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
    <section
      ref={nextSectionRef}
      className="mt-[120px] max-w-[1063px] mx-auto text-dukiaBlue dark:bg-dukiaBlue dark:text-white space-y-[120px]"
    >
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="flex justify-between"
      >
        <motion.p variants={fadeInLeft} className="max-w-[519px] text-base">
          We are your premier and largest bullion dealer in Nigeria, West
          Africa, creating ease of access to investment grade gold & other
          precious metals in Nigeria via a safe and secure trading platform.
          {/* ... rest of the paragraph ... */}
        </motion.p>

        <motion.p
          variants={fadeInRight}
          className="text-[40px] font-extrabold max-w-[410px] text-end"
        >
          Your Premier And Largest Bullion Dealer In Nigeria.
        </motion.p>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="flex flex-row-reverse justify-between"
      >
        <motion.p variants={fadeInRight} className="max-w-[519px] text-base">
          Dukia Gold was incorporated on March 4, 2019 with RC 1564963 as a
          Special Purpose Company with the sole responsibility of manufacturing,
          refining, minting as well as trading in Gold and Precious Metal
          Bullion, Bars and Coins.
          {/* ... rest of the paragraph ... */}
        </motion.p>

        <motion.p
          variants={fadeInLeft}
          className="text-[40px] font-extrabold max-w-[410px]"
        >
          Incorporated with Nigeria&apos;s Corporate Affairs; OECD & LMBA
          Compliant.
        </motion.p>
      </motion.div>

      {/* Our Vision */}
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center"
      >
        <motion.div variants={fadeInLeft} className="max-w-[410px] space-y-7">
          <p className="font-extrabold text-[40px]">Our Vision</p>
          <p>
            To be recognised as &apos;The Gold Standard&apos; across the gold
            value chain in Africa, as an LBMA accredited processor and largest
            exporter of gold and other precious metal products from Nigeria.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          className="max-w-[519px] h-[410px] bg-[#FBF7EB] bg-cover bg-no-repeat bg-center rounded-2xl overflow-hidden"
        >
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1728381987/img-1_fjnkmz.png"
            alt=""
            width={519}
            height={410}
            className="rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </motion.div>

      {/* Our Mission */}
      <motion.div
        ref={ref4}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="flex flex-row-reverse justify-between items-center"
      >
        <motion.div variants={fadeInRight} className="max-w-[410px] space-y-7">
          <p className="font-extrabold text-[40px]">Our Mission</p>
          <p>
            To establish as a full-service bullion merchant and the first LBMA
            accredited Precious Metals refinery of its kind to locally produce
            good delivery investment bars and other bullion products for sale to
            investors and consumers and boost financial returns to miners &
            other stakeholders in the precious metals value chain.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInLeft}
          className="max-w-[519px] h-[410px] bg-[#FBF7EB] bg-cover bg-no-repeat bg-center rounded-2xl overflow-hidden"
        >
          <Image
            src="https://res.cloudinary.com/dvcw253zw/image/upload/v1728382620/img-2_gliocg.png"
            alt=""
            width={519}
            height={410}
            className="rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WeAreDukia;
