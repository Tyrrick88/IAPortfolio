"use client";

import { motion } from "framer-motion";
import { EPISODES } from "@/lib/data";
import { EASE, VIEWPORT } from "@/lib/motion";
import SectionHead from "./SectionHead";

export default function Podcast() {
  return (
    <section className="podcast section-pad" id="podcast">
      <div className="wrap">
        <SectionHead num="06 / The Podcast" title="Unfiltered with Atieno" />
        <div className="ep-list">
          {EPISODES.map((ep, i) => (
            <motion.div
              className="ep"
              data-cursor="play"
              key={ep.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              whileHover={{ x: 12, transition: { duration: 0.35, ease: EASE } }}
            >
              <div className="ep-play"></div>
              <div>
                <div className="ep-title">{ep.title}</div>
                <div className="ep-meta">{ep.meta}</div>
              </div>
              <div className="ep-right">
                <span className="ep-eq">●</span> {ep.plays}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
