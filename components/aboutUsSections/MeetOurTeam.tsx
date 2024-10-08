import React from "react";
import { team } from "@/config/landing_page/about";
import Image from "next/image";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MeetOurTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-[#FBF7EB] py-32 mt-[120px] text-dukiaBlue">
      <div className="max-w-[1063px] mx-auto space-y-20">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold text-[40px]"
        >
          Meet Our Team
        </motion.p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-x-5 gap-y-[120px]"
        >
          {team.map((member: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-5 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.pic}
                  alt={member.name}
                  width={340}
                  height={338}
                  className="rounded-lg shadow-md transition-shadow duration-300 group-hover:shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="text-xl font-extrabold">{member.name}</p>
                  <p>{member.position}</p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, color: "#0077B5" }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiLinkedinBoxFill size={32} color="#676D88" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
