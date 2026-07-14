"use client";

import { BRANDS } from "@/lib/data";
import Reveal from "./Reveal";
import VelocityMarquee from "./VelocityMarquee";

export default function Brands() {
  return (
    <div className="brands">
      <div className="wrap">
        <Reveal className="brands-label eyebrow">Trusted By &amp; Collaborated With</Reveal>
      </div>
      <VelocityMarquee baseVelocity={3}>
        {BRANDS.map((brand) => (
          <div className="m-item" key={brand}>
            {brand}
          </div>
        ))}
      </VelocityMarquee>
    </div>
  );
}
