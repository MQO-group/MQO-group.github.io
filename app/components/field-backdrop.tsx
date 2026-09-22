/**
 * Decorative backdrop: a two-source interference pattern over a faint
 * graticule, echoing a cavity mode map. Deterministic (no randomness), so
 * server and client render identically.
 */
export function FieldBackdrop() {
  return (
    <div className="hero__field" aria-hidden="true">
      <svg
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <defs>
          <radialGradient id="mqo-src-a" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#5ce0c6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5ce0c6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mqo-src-b" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="mqo-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07080b" stopOpacity="0" />
            <stop offset="72%" stopColor="#07080b" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#07080b" stopOpacity="1" />
          </linearGradient>
          <pattern
            id="mqo-grid"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M72 0H0V72"
              fill="none"
              stroke="#e9eef7"
              strokeOpacity="0.045"
              strokeWidth="1"
            />
          </pattern>
          <mask id="mqo-mask">
            <rect width="1440" height="620" fill="url(#mqo-fade)" />
          </mask>
        </defs>

        <rect width="1440" height="620" fill="url(#mqo-grid)" />

        {/* interference fringes from two coherent sources */}
        <g stroke="#5ce0c6" fill="none" strokeWidth="1">
          {Array.from({ length: 22 }, (_, i) => (
            <circle
              key={`a${i}`}
              cx="1090"
              cy="150"
              r={26 + i * 32}
              strokeOpacity={0.15 - i * 0.0055}
            />
          ))}
        </g>
        <g stroke="#8b7cf6" fill="none" strokeWidth="1">
          {Array.from({ length: 18 }, (_, i) => (
            <circle
              key={`b${i}`}
              cx="1310"
              cy="330"
              r={22 + i * 34}
              strokeOpacity={0.13 - i * 0.0055}
            />
          ))}
        </g>

        <circle cx="1090" cy="150" r="300" fill="url(#mqo-src-a)" opacity="0.5" />
        <circle cx="1310" cy="330" r="260" fill="url(#mqo-src-b)" opacity="0.45" />

        <rect
          width="1440"
          height="620"
          fill="#07080b"
          opacity="0.55"
          mask="url(#mqo-mask)"
        />
      </svg>
    </div>
  );
}
