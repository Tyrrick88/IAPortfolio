"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";
import { InstagramIcon, TikTokIcon, XIcon } from "./icons";

const lineTransition = { duration: 1, ease: EASE };

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      <motion.span
        className="hero-frame-num"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        NAIROBI, KE — 01
      </motion.span>

      <motion.div className="hero-left" style={{ y: leftY, opacity: leftOpacity }}>
        <motion.div
          className="onair-badge hero-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          <span className="onair-dot"></span> On Air Now · Vibe FM Nairobi
        </motion.div>

        <h1>
          <span className="line">
            <motion.span
              initial={{ y: "112%", rotate: 3 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ ...lineTransition, delay: 0.15 }}
            >
              ATIENO
            </motion.span>
          </span>
          <span className="line">
            <motion.span
              initial={{ y: "112%", rotate: 3 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ ...lineTransition, delay: 0.25 }}
            >
              Ongon&rsquo;ga
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
        >
          Radio presenter, fashion &amp; lifestyle storyteller, fitness devotee, and host of{" "}
          <em>Unfiltered with Atieno</em>{" — "}bringing Nairobi&rsquo;s culture, workouts, and best
          plates to the airwaves, the feed, and your headphones.
        </motion.p>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        >
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="TikTok">
            <TikTokIcon />
          </a>
          <a href="#" aria-label="Twitter/X">
            <XIcon />
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-right">
        <motion.div
          className="hero-img-clip"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
        >
          <motion.div className="hero-img-par" style={{ y: imgY }}>
            <motion.div
              style={{ position: "absolute", inset: 0 }}
              initial={{ scale: 1.18 }}
              animate={{ scale: 1.02 }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
            >
              <Image
                src="/images/hero-portrait.jpeg"
                alt="Atieno Ongon'ga editorial portrait"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.button
          className="hero-tab"
          data-cursor="hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Listen Live <span className="onair-dot"></span>
        </motion.button>
      </div>

      <motion.div className="scroll-cue" style={{ opacity: cueOpacity }}>
        <span className="eyebrow">Scroll</span>
        <div className="stick"></div>
      </motion.div>
    </section>
  );
}
