"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { COLORS, STATS } from "@/lib/data";
import { EASE } from "@/lib/motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <b ref={ref}>0{suffix}</b>;
}

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="wrap">
        <SectionHead num="01 / About" title="The voice behind the mic" />
        <div className="about-grid">
          <Reveal className="about-photo">
            <div className="ph-zoom">
              <Placeholder
                spec={{
                  from: COLORS.ink,
                  to: COLORS.plum,
                  title: "IN THE STUDIO",
                  subtitle: "ABOUT PHOTO · REPLACE ME",
                }}
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="about-quote">
                <span className="mark">&ldquo;</span>I don&rsquo;t just talk into a microphone — I
                talk to a city that&rsquo;s always listening, always dressing up, always tuning
                in.<span className="mark">&rdquo;</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="about-body">
                Atieno Ongon&rsquo;ga is one of Nairobi&rsquo;s most recognisable on-air voices,
                known for her drive-time show, her eye for style, and a podcast that says the
                things people are already thinking. Across radio, runway, and RSS feed, her
                throughline is the same: honest, warm, unmistakably Kenyan.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="stat-row">
              {STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span>{stat.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
