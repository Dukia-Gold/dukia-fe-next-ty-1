"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome4Fill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Footer = () => {
  const pathname = usePathname();
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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={` ${
        pathname.startsWith("/dashboard") ? "hidden" : "flex"
      } mt-[120px] pt-11 pb-24 px-3 text-dukiaBlue bg-[#F6F7F9]`}
    >
      <div className="md:container flex flex-col items-center lg:flex-row lg:items-start lg:justify-between space-y-10 lg:space-y-0">
        {/* LEFT */}
        <motion.div variants={itemVariants} className="flex flex-col gap-11">
          <motion.div variants={itemVariants}>
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1721822926/dukia-new-logo_gg5cde.png"
              alt="Dukia Gold's Logo"
              width={224.47}
              height={50}
            />{" "}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-sm flex flex-col gap-6 items-center md:items-start font-semibold"
          >
            {/* NAME */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1">
              <p className="font-extrabold text-base">
                Dukia Gold & Precious Metals Refining Co. Ltd.
              </p>
              <p className="text-xs">
                Your Precious Metals Refiner & Trusted Bullion Merchant
              </p>
            </motion.div>

            {/* CONTACT DETAILS */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              {/* ADDRESS */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white rounded-full">
                  <RiHome4Fill width={20} height={16} />
                </div>

                <p>3B, Olusola Olude Close, Gbagada Phase 2, Lagos, Nigeria</p>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white rounded-full">
                  <RiMailFill width={20} height={16} />
                </div>

                <Link
                  href="mailto:sales@dukiapreciousmetals.co"
                  className="underline hover:text-dukiaGold"
                >
                  sales@dukiapreciousmetals.co
                </Link>
              </motion.div>

              {/* PHONE NUMBER */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white rounded-full">
                  <RiPhoneFill width={13.86} height={20} />
                </div>

                <p>+234 703 323 8121 | +234 903 150 6699</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center font-semibold gap-2.5"
          >
            <p>Stored by:</p>
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1721826164/brinks-logo-blue_1_bgbw94.png"
              alt="Brinks"
              width={143}
              height={19}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-y-5 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-x-10 md:gap-x-3.5 xl:gap-x-14 text-sm"
        >
          {/* COMPANY */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1 font-semibold space-y-3 w-fit"
          >
            <p>COMPANY</p>
            {/* LINKS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col text-[#676D88] gap-3"
            >
              <Link href="about-us/dukia-gold" className="hover:text-dukiaGold">
                About Us
              </Link>
              <p>Cookies & Privacy Policy</p>
              <p>Terms & Conditions</p>
            </motion.div>
          </motion.div>

          {/* PRODUCTS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1 font-semibold space-y-3 w-fit"
          >
            <p>PRODUCTS</p>
            {/* LINKS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col text-[#676D88] gap-3"
            >
              <Link href="/buy-gold/bars" className="hover:text-dukiaGold">
                Buy Gold Bars
              </Link>
              <Link href="/buy-gold/bars" className="hover:text-dukiaGold">
                Buy Gold Coins
              </Link>
              <Link href="/buy-gold/bars" className="hover:text-dukiaGold">
                Buy Pool Allocated
              </Link>
              <Link href="/buy-gold/coins" className="hover:text-dukiaGold">
                Dukia Gold Card
              </Link>
              <Link href="/" className="hover:text-dukiaGold">
                Sell To Us
              </Link>
            </motion.div>
          </motion.div>

          {/* GUIDES */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1 font-semibold space-y-3 w-fit"
          >
            <p>GUIDES</p>
            {/* LINKS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col text-[#676D88] gap-3"
            >
              <p>Pool Allocated Calculator</p>
              <p>Shop With Ease</p>
              <p>What We Offer</p>
              <p>Why Choose Us</p>
              <p>As Featured In</p>
              <Link href="/#customer-review" className="hover:text-dukiaGold">
                FAQs
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
