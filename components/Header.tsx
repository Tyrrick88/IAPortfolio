"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MENU_LINKS } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { getLenis, scrollToAnchor } from "@/lib/smooth-scroll";
import { LogoMark } from "./icons";

const menuVariants = {
  closed: { clipPath: "inset(0 0 100% 0)", transition: { duration: 0.55, ease: EASE, delay: 0.15 } },
  open: { clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, ease: EASE } },
};

const listVariants = {
  closed: {},
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const itemVariants = {
  closed: { y: "130%", rotate: 4, transition: { duration: 0.4, ease: EASE } },
  open: { y: "0%", rotate: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onNav = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => scrollToAnchor(href), 400);
  };

  return (
    <>
      <header>
        <a
          className="logo"
          href="#top"
          aria-label="IAMATIENO — back to top"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.setTimeout(() => scrollToAnchor("#top"), open ? 400 : 0);
          }}
        >
          <LogoMark />
          <span className="logo-word">IAMATIENO</span>
        </a>
        <button
          className={`menu-btn${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="fullmenu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="fullmenu"
            className="fullmenu"
            aria-label="Site navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div variants={listVariants} initial="closed" animate="open" exit="closed">
              {MENU_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="menu-link" onClick={(e) => onNav(e, link.href)}>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <motion.span className="menu-inner" variants={itemVariants} style={{ display: "inline-block" }}>
                      {link.num} — {link.label}
                    </motion.span>
                  </span>
                </a>
              ))}
            </motion.div>
            <motion.div
              className="menu-foot"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6, ease: EASE } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <span>hello@atienoongonga.co.ke</span>
              <span>Nairobi, Kenya</span>
              <span>On Air Weekdays 16:00 – 18:00</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
