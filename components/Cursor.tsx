"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [play, setPlay] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 450, damping: 40, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 450, damping: 40, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest("a, button, [data-cursor]");
      setHovered(!!target);
      setPlay(!!target && target.getAttribute("data-cursor") === "play");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-layer" style={{ x, y }} aria-hidden="true">
        <div className="cursor-dot-inner" />
      </motion.div>
      <motion.div className="cursor-layer" style={{ x: ringX, y: ringY }} aria-hidden="true">
        <div className={`cursor-ring-inner${hovered ? " hovered" : ""}${play ? " play" : ""}`} />
      </motion.div>
    </>
  );
}
