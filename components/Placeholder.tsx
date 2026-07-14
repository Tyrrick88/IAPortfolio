import { useId } from "react";
import type { PlaceholderSpec } from "@/lib/data";

/**
 * Branded placeholder artwork (gradient + stripes + mic glyph) used where a
 * real photo hasn't been supplied yet. Swap for an image in lib/data.ts.
 */
export default function Placeholder({ spec }: { spec: PlaceholderSpec }) {
  const id = useId();
  const fg = spec.dark ? "#1a0e1f" : "#fbf1e6";
  const sub = spec.dark ? "#1a0e1f" : "#f0dfe6";

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 700 700"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${spec.title} — ${spec.subtitle}`}
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={spec.from} />
          <stop offset="100%" stopColor={spec.to} />
        </linearGradient>
        <pattern id={`${id}-p`} width="42" height="42" patternTransform="rotate(35)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="42" stroke={fg} strokeOpacity="0.07" strokeWidth="14" />
        </pattern>
      </defs>
      <rect width="700" height="700" fill={`url(#${id}-g)`} />
      <rect width="700" height="700" fill={`url(#${id}-p)`} />
      <g transform="translate(350,300)" fill="none" stroke={fg} strokeWidth="3" opacity="0.85">
        <circle r="46" />
        <circle r="18" />
        <rect x="-64" y="-58" width="128" height="14" rx="7" fill={fg} stroke="none" opacity="0.9" />
      </g>
      <text
        x="50%"
        y="404"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="600"
        fontSize="40"
        fill={fg}
      >
        {spec.title}
      </text>
      <text
        x="50%"
        y="454"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        letterSpacing="2"
        fontSize="18"
        fill={sub}
      >
        {spec.subtitle}
      </text>
    </svg>
  );
}
