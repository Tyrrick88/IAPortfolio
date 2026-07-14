"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

type VelocityMarqueeProps = {
  children: ReactNode;
  /** Percent of one chunk per second; negative reverses direction. */
  baseVelocity?: number;
  skewOnScroll?: boolean;
  className?: string;
};

/**
 * Infinite marquee whose speed and direction react to scroll velocity —
 * scroll fast and it accelerates (and skews); scroll up and it reverses.
 */
export default function VelocityMarquee({
  children,
  baseVelocity = 2,
  skewOnScroll = false,
  className,
}: VelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-1500, 1500], ["4deg", "-4deg"]);

  const directionFactor = useRef(baseVelocity >= 0 ? 1 : -1);
  const magnitude = Math.abs(baseVelocity);

  useAnimationFrame((_, delta) => {
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = baseVelocity >= 0 ? -1 : 1;
    else if (vf > 0) directionFactor.current = baseVelocity >= 0 ? 1 : -1;

    let moveBy = directionFactor.current * magnitude * (delta / 1000);
    moveBy += moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  return (
    <motion.div
      className={`marquee-track${className ? ` ${className}` : ""}`}
      style={{ x, skewX: skewOnScroll ? skewX : undefined }}
      aria-hidden="true"
    >
      {[0, 1, 2, 3].map((i) => (
        <div className="marquee-chunk" key={i}>
          {children}
        </div>
      ))}
    </motion.div>
  );
}
