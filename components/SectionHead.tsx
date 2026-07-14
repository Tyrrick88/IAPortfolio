"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { EASE, VIEWPORT } from "@/lib/motion";

type SectionHeadProps = {
  num: string;
  title: string;
  numStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  aside?: ReactNode;
};

// The reveal is driven by the h2 (variants propagate to the word spans):
// observing the clipped words directly would never fire, since a fully
// masked element is never "in view".
const titleVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const wordVariants: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

/** Section heading with an eyebrow number and a masked word-by-word title reveal. */
export default function SectionHead({ num, title, numStyle, titleStyle, aside }: SectionHeadProps) {
  const words = title.split(" ");

  return (
    <div className="section-head">
      <div>
        <motion.div
          className="section-num eyebrow"
          style={numStyle}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {num}
        </motion.div>
        <motion.h2
          style={titleStyle}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={titleVariants}
        >
          {words.map((word, i) => (
            <span className="w-mask" key={i}>
              <motion.span variants={wordVariants}>
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </motion.h2>
      </div>
      {aside}
    </div>
  );
}
