"use client";

import { SHOWS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

// Deterministic PRNG so the waveform renders identically on server and client
// (Math.random here would cause a hydration mismatch).
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(2026);
const BARS = Array.from({ length: 40 }, () => ({
  h: 30 + rand() * 70,
  delay: rand() * 1.4,
  duration: 0.9 + rand() * 0.9,
}));

export default function OnAir() {
  return (
    <section className="onair section-pad" id="onair">
      <div className="wrap">
        <SectionHead
          num="02 / On Air"
          title="Drive time, her time"
          titleStyle={{ color: "var(--cream)" }}
          aside={
            <Reveal className="onair-badge" style={{ color: "var(--gold)" }}>
              <span className="onair-dot" style={{ background: "var(--gold)" }}></span> Live
              Weekdays
            </Reveal>
          }
        />
        <div className="onair-grid">
          <Reveal className="wave-panel">
            <div className="wave-bars" aria-hidden="true">
              {BARS.map((bar, i) => (
                <span
                  key={i}
                  style={
                    {
                      "--h": `${bar.h}%`,
                      animationDelay: `${bar.delay}s`,
                      animationDuration: `${bar.duration}s`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
            <div className="now-playing">
              <span>Now Playing — &ldquo;Jiji Yangu&rdquo; mix</span>
              <span className="eq" style={{ color: "var(--gold)" }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="show-list">
              {SHOWS.map((show) => (
                <li key={show.name}>
                  <span className="show-time">{show.time}</span>
                  <span className="show-name">{show.name}</span>
                  <span className="show-tag">{show.tag}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
