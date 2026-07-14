"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import { InstagramIcon, TikTokIcon, XIcon, YouTubeIcon } from "./icons";

function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 16, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 160, damping: 16, mass: 0.2 });

  const onMouseMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="wrap contact-inner">
        <Reveal className="onair-badge" style={{ justifyContent: "center", color: "var(--gold)", display: "flex" }}>
          <span className="onair-dot" style={{ background: "var(--gold)" }}></span> Let&rsquo;s
          Work Together
        </Reveal>
        <Reveal delay={0.1}>
          <h2>
            <Magnetic>
              <a href="mailto:hello@atienoongonga.co.ke" className="contact-link" data-cursor="hover">
                Say Hello
              </a>
            </Magnetic>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="contact-sub">hello@atienoongonga.co.ke · Nairobi, Kenya</p>
        </Reveal>
        <Reveal delay={0.3} className="contact-socials">
          <a href="#" data-cursor="hover">
            <InstagramIcon size={15} /> Instagram
          </a>
          <a href="#" data-cursor="hover">
            <TikTokIcon size={15} /> TikTok
          </a>
          <a href="#" data-cursor="hover">
            <XIcon size={14} /> Twitter / X
          </a>
          <a href="#" data-cursor="hover">
            <YouTubeIcon size={15} /> YouTube
          </a>
        </Reveal>
      </div>
    </section>
  );
}
