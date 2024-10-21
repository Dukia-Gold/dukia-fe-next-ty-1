"use client";

import { FC, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQCompType = {
  title: string;
  content: string;
};

const FAQComp: FC<FAQCompType> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerVariants = {
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

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full md:w-[40rem] lg:w-full bg-dukiaGrey dark:bg-white/[5%] text-dukiaBlue dark:text-white rounded-lg p-4 py-6 md:pl-8 md:pr-5 space-y-2"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-extrabold text-xl/[1.875rem]">{title}</h4>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="bg-white rounded-full p-0 w-7 h-7"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </motion.div>
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <AnimatePresence>
          {isOpen && (
            <CollapsibleContent forceMount asChild>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-base"
              >
                {content}
              </motion.div>
            </CollapsibleContent>
          )}
        </AnimatePresence>
      </Collapsible>
    </motion.div>
  );
};

export default FAQComp;
