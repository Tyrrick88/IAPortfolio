"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import type { GalleryItem } from "@/lib/data";
import { EASE, VIEWPORT } from "@/lib/motion";
import Placeholder from "./Placeholder";
import SectionHead from "./SectionHead";

type GallerySectionProps = {
  id: string;
  className: string;
  num: string;
  title: string;
  numStyle?: CSSProperties;
  aside?: ReactNode;
  preContent?: ReactNode;
  items: GalleryItem[];
};

export default function GallerySection({
  id,
  className,
  num,
  title,
  numStyle,
  aside,
  preContent,
  items,
}: GallerySectionProps) {
  return (
    <section className={`${className} section-pad`} id={id}>
      <div className="wrap">
        <SectionHead num={num} title={title} numStyle={numStyle} aside={aside} />
        {preContent}
        <div className="gallery">
          {items.map((item, i) => (
            <motion.div
              key={item.caption}
              className={`g-item ${item.span}`}
              data-cursor="hover"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={VIEWPORT}
              transition={{ duration: 0.95, ease: EASE, delay: (i % 4) * 0.09 }}
            >
              <motion.div
                className="g-img"
                initial={{ scale: 1.28 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.09 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.95, ease: EASE, delay: (i % 4) * 0.09 }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <Placeholder spec={item.placeholder!} />
                )}
              </motion.div>
              {item.rating && <span className="g-rating">{item.rating}</span>}
              <span className="g-cap">{item.caption}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
