import About from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import OnAir from "@/components/OnAir";
import Podcast from "@/components/Podcast";
import Reveal from "@/components/Reveal";
import VelocityMarquee from "@/components/VelocityMarquee";
import { DIARY_ITEMS, EATS_ITEMS, FITNESS_ITEMS, FITNESS_STATS, ROLES } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="marquee-band">
        <VelocityMarquee baseVelocity={-3} skewOnScroll>
          {ROLES.map((role) => (
            <span className="m-item" key={role}>
              {role}
            </span>
          ))}
        </VelocityMarquee>
      </div>

      <About />

      <OnAir />

      <GallerySection
        id="diary"
        className="diary"
        num="03 / Style Diary"
        title="Pictures do the talking"
        items={DIARY_ITEMS}
      />

      <GallerySection
        id="fitness"
        className="fitness"
        num="04 / Fit & Focused"
        title="Strong is a look too"
        numStyle={{ color: "var(--teal)" }}
        aside={
          <Reveal className="onair-badge" style={{ color: "var(--teal)" }}>
            <span className="onair-dot" style={{ background: "var(--teal)" }}></span> 5x a Week
          </Reveal>
        }
        preContent={
          <Reveal className="stat-row" style={{ marginTop: 0, marginBottom: 44 }}>
            {FITNESS_STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <b style={{ color: "var(--teal)" }}>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        }
        items={FITNESS_ITEMS}
      />

      <GallerySection
        id="eats"
        className="eats"
        num="05 / Plate by Plate"
        title="Nairobi, one table at a time"
        items={EATS_ITEMS}
      />

      <Podcast />

      <Brands />

      <Contact />

      <footer>© {new Date().getFullYear()} Atieno Ongon&rsquo;ga — Site design by Tytech Solutions</footer>
    </main>
  );
}
