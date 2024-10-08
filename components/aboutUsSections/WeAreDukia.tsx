import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { visionAndMission } from "@/config/landing_page/about";

interface WeAreDukiaProps {
  nextSectionRef: React.RefObject<HTMLElement>;
}

const WeAreDukia = ({ nextSectionRef }: WeAreDukiaProps) => {
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
          Africa, creating ease of access to investment grade gold & other
          precious metals in Nigeria via a safe and secure trading platform.
          Dukia Gold offers an easy, secure and accessible way to buy, sell,
          invest and do much more with gold. With Dukia Gold, you have full
          control and peace of mind over securing your financial future.
          <br />
          <br />
          Dukia Gold is a gold and precious metals refiner and the only
          full-service bullion-merchant in Nigeria, West Africa. Dukia Gold
          aggregates responsibly sourced raw materials such as gold dore and
          other precious metal materials, and refines it into investment grade
          ‘good delivery’ bar or coin. Dukia sells its finished products to high
          networth individuals and corporate investors such as banks and other
          financial institutions, including discerning corporates & individuals.
          <br />
          <br />
          The ‘Good Delivery’ bar presented by Dukia Gold for sale in the
          investment marketplace is of .9999 purity and will afford the investor
          the opportunity to buy a product with high intrinsic value and an
          assured market when the investor chooses to liquidate its investment.
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
          Bullion, Bars and Coins. With this, Dukia Gold set out on a journey
          that puts Nigeria on the global map and at par with the major Gold &
          Precious Metals refining and producing nations.
          <br />
          <br />
          Dukia Gold obtained its license as a refinery on May 15, 2019 and
          assembled the necessary right of way, plant, machinery and equipment
          including every other activity essential for the commencement of
          profitable and sustainable operations.
          <br />
          <br />
          Though formally constituted in 2019, the people constituted as Dukia
          Gold management has between them over 200years of hands on experience
          of the Gold and other Precious Metals sector both internationally and
          nationally. More importantly most of the management had been
          informally working together within the sector for at least 10 years
          pre-incorporation of Dukia Gold.
          <br />
          <br />
          Dukia Gold has achieved success in its OECD & LBMA compliant gold
          sourcing program under its Urban and Rural mining initiatives that
          create high-grade recyclable household and residual gold and mineral
          ores across Nigeria.
        </motion.p>

        <motion.p
          variants={fadeInLeft}
          className="text-[40px] font-extrabold max-w-[410px]"
        >
          Incorporated with Nigeria&apos;s Corporate Affairs; OECD & LMBA
          Compliant.
        </motion.p>
      </motion.div>

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
