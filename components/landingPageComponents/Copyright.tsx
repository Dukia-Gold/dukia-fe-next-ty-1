"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { usePathname } from "next/navigation";
import { copyright } from "@/config/landing_page/home";

const Copyright = () => {
  const pathname = usePathname();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false to allow multiple triggers
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset to hidden when out of view
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className={` ${
        pathname.startsWith("/dashboard") ? "hidden" : "flex"
      } bg-dukiaBlue py-10`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex items-center justify-between container"
      >
        <motion.p
          variants={itemVariants}
          className="text-white text-sm font-semibold"
        >
          © {copyright.year}, {copyright.corporation}
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {[
            {
              icon: <Linkedin width={15} height={15} />,
              href: "https://www.linkedin.com/company/dukiagoldapp/",
            },
            {
              icon: <RiTwitterXFill width={15} height={15} />,
              href: "https://x.com/DukiaGoldApp",
            },
            {
              icon: <RiInstagramFill width={15} height={15} />,
              href: "https://www.instagram.com/dukiagoldapp/",
            },
            {
              icon: <RiFacebookFill width={15} height={15} />,
              href: "https://www.facebook.com/dukiagoldapp",
            },
            {
              icon: <RiYoutubeFill width={15} height={15} />,
              href: "https://www.youtube.com/@DukiaGoldApp",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <div className="p-2 border border-white rounded-full text-white">
                  {item.icon}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Copyright;
