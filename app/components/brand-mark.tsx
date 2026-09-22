/**
 * MQO mark: two cavity mirrors with a standing-wave mode between them.
 * Pure SVG, inherits `currentColor`, so it works at any size or colour.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* cavity mirrors */}
      <path
        d="M5 8c-2.6 3.4-2.6 20.6 0 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M35 8c2.6 3.4 2.6 20.6 0 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* standing-wave mode */}
      <path
        d="M8 20c1.9-7 3.8-7 5.6 0 1.9 7 3.8 7 5.6 0 1.9-7 3.8-7 5.6 0 1.9 7 3.8 7 5.6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* antinode */}
      <circle cx="20" cy="20" r="1.9" fill="currentColor" />
    </svg>
  );
}
