export function LogoMark() {
  return (
    <svg className="logo-mark" width="37" height="37" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="19.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="22" y="26.5" textAnchor="middle" fontFamily="var(--font-fraunces), serif" fontStyle="italic" fontWeight="700" fontSize="17" fill="currentColor">
        IA
      </text>
      <g transform="translate(13,33)" fill="currentColor">
        <rect x="0" y="-3" width="2.2" height="3" rx="1" />
        <rect x="3.6" y="-6.5" width="2.2" height="6.5" rx="1" />
        <rect x="7.2" y="-2" width="2.2" height="2" rx="1" />
        <rect x="10.8" y="-5.5" width="2.2" height="5.5" rx="1" />
        <rect x="14.4" y="-1.5" width="2.2" height="1.5" rx="1" />
      </g>
      <circle className="logo-dot" cx="37.5" cy="6.5" r="3.2" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
      <path d="M16.5 3c.4 2.2 1.8 3.7 4 4v3c-1.5 0-2.9-.4-4-1.2v6.4c0 3.3-2.7 5.8-5.9 5.5-2.8-.3-5-2.6-5.1-5.4-.2-3.3 2.4-6 5.6-6 .3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.3-2.5 2.9.1 1.2 1.1 2.2 2.3 2.3 1.5.2 2.8-1 2.8-2.5V3h2.8z" />
    </svg>
  );
}

export function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

export function YouTubeIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
