import NewsletterAPI from "@/api/newsletter";
import Image from "next/image";
import { useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Newsletter = () => {
  const handleSubscribe = NewsletterAPI();
  let loading = false;
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const goldBarVariants = {
    hidden: { opacity: 0, x: -50, rotate: -45 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const subscribeNewsletter = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    loading = true;
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    await handleSubscribe(data);
    loading = false;
    const emailInput = form.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    if (emailInput) {
      emailInput.value = "";
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mt-[120px] px-4 sm:px-0 dark:bg-dukiaDark text-dukiaBlue"
    >
      <div className="max-w-[1063px] mx-auto w-full">
        <motion.div
          variants={itemVariants}
          className="rounded-t-2xl bg-[#FBF7EB] pl-44 pr-8 mx-20 relative"
        >
          <motion.div
            variants={goldBarVariants}
            className="absolute -top-8 left-3.5 z-10"
          >
            <Image
              src="https://res.cloudinary.com/dvcw253zw/image/upload/v1725897876/newsletter-gold_zcu2it.png"
              alt="Gold bars"
              width={166.51}
              height={139}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="py-3 flex items-center justify-between"
          >
            <p className="font-extrabold text-xl">We Buy Gold.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 border border-dukiaGold rounded-full p-2.5 pl-5"
            >
              <p className="font-semibold">Sell to Us</p>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="bg-dukiaGold rounded-full p-1"
              >
                <RiArrowRightLine color="white" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative z-20 border-2 border-dukiaGold rounded-2xl py-20 px-8 bg-[url('https://res.cloudinary.com/dvcw253zw/image/upload/v1725896130/newsletter-bg_dfjfrp.png')] bg-cover bg-center bg-no-repeat bg-opacity-80 bg-black flex items-end justify-between"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-5 text-white font-extrabold"
          >
            <motion.p
              variants={itemVariants}
              className="text-[2.5rem]/[3.75rem]"
            >
              Sign Up for
              <br /> Our Newsletter
            </motion.p>

            <motion.p variants={itemVariants} className="text-xl/[1.875rem]">
              Stay updated with the latest gold
              <br /> market trends, news, and insights
            </motion.p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            action=""
            onSubmit={subscribeNewsletter}
            className="flex flex-col md:flex-row md:items-end gap-2"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 font-semibold"
            >
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email address"
                className="bg-white dark:bg-dukiaBlue outline-none rounded-lg w-[15.75rem] md:w-[23.25rem] text-sm text-dukiaBlue dark:text-white placeholder:text-[#676D88] dark:placeholder:text-white/[50%] dark:border dark:border-dukiaGold px-4 py-3.5"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-dukiaGold rounded-lg text-white font-semibold py-3 px-4 md:min-w-[106px]"
            >
              {loading ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  ⟳
                </motion.span>
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
