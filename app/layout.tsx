import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/lib/smooth-scroll";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // Update this when the production domain is confirmed
  metadataBase: new URL("https://atienoongonga.co.ke"),
  title: "Atieno Ongon'ga — On Air. On Trend. On Mic.",
  description:
    "Atieno Ongon'ga — Radio Presenter, Fashion & Lifestyle Influencer, Podcast Host based in Nairobi.",
  openGraph: {
    title: "Atieno Ongon'ga — On Air. On Trend. On Mic.",
    description:
      "Radio presenter, fashion & lifestyle storyteller, and host of Unfiltered with Atieno — Nairobi, Kenya.",
    images: ["/images/hero-portrait.jpeg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0e1f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${grotesk.variable} ${inter.variable}`}>
      <body id="top">
        <SmoothScroll>
          <div className="grain" aria-hidden="true" />
          <Cursor />
          <ScrollProgress />
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
