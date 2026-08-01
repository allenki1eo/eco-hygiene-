import { cx } from "@/components/ui";

/**
 * Bespoke technical illustration of a beverage plant: process tanks, a filling
 * line, and the effluent path beneath it. Drawn rather than photographed so the
 * hero carries the brand palette exactly and stays a few kilobytes.
 *
 * Swap for licensed site photography when it is available — see README.
 */
export function PlantIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 820 620"
      className={cx("h-auto w-full", className)}
      role="img"
      aria-label="Illustration of a beverage plant: stainless process tanks feeding a filling line, with the waste water treatment path running beneath the factory floor."
    >
      <defs>
        <linearGradient id="tank-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0d1517" />
          <stop offset="0.35" stopColor="#223336" />
          <stop offset="0.55" stopColor="#334b4d" />
          <stop offset="0.75" stopColor="#1b2729" />
          <stop offset="1" stopColor="#0d1517" />
        </linearGradient>
        <linearGradient id="tank-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#66d2a3" stopOpacity="0.8" />
          <stop offset="1" stopColor="#0f77b0" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0f77b0" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#66b8e2" stopOpacity="0.65" />
          <stop offset="1" stopColor="#2fb87f" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a3a3c" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0d1517" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2fb87f" stopOpacity="0.5" />
          <stop offset="1" stopColor="#2f97cf" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#2fb87f" stopOpacity="0.32" />
          <stop offset="1" stopColor="#2fb87f" stopOpacity="0" />
        </radialGradient>
        <clipPath id="tank-clip-a">
          <path d="M96 196h132v250a26 26 0 0 1-26 26h-80a26 26 0 0 1-26-26z" />
        </clipPath>
      </defs>

      <circle cx="300" cy="230" r="230" fill="url(#halo)" />

      {/* ---- Overhead service gantry -------------------------------------- */}
      <g stroke="#405254" strokeWidth="2" opacity="0.75">
        <path d="M40 92h740" />
        <path d="M120 92v34M300 92v26M520 92v40M690 92v22" />
      </g>

      {/* ---- Process tanks ------------------------------------------------- */}
      <g>
        {/* Tank A */}
        <path
          d="M96 196h132v250a26 26 0 0 1-26 26h-80a26 26 0 0 1-26-26z"
          fill="url(#tank-body)"
        />
        <g clipPath="url(#tank-clip-a)" opacity="0.5">
          <path d="M96 250h132M96 306h132M96 362h132M96 418h132" stroke="#405254" strokeWidth="1.5" />
        </g>
        <ellipse cx="162" cy="196" rx="66" ry="18" fill="#223336" stroke="url(#tank-edge)" strokeWidth="2" />
        <path d="M162 178v-52" stroke="#405254" strokeWidth="3" strokeLinecap="round" />
        <circle cx="162" cy="126" r="9" fill="#0d1517" stroke="#66d2a3" strokeWidth="2" />

        {/* Tank B */}
        <path
          d="M262 240h106v206a26 26 0 0 1-26 26h-54a26 26 0 0 1-26-26z"
          fill="url(#tank-body)"
        />
        <ellipse cx="315" cy="240" rx="53" ry="15" fill="#223336" stroke="url(#tank-edge)" strokeWidth="2" />
        <path d="M315 225v-107" stroke="#405254" strokeWidth="3" strokeLinecap="round" />
        <circle cx="315" cy="118" r="8" fill="#0d1517" stroke="#2f97cf" strokeWidth="2" />

        {/* Level indicators — the "in spec" signal */}
        <rect x="112" y="330" width="8" height="116" rx="4" fill="#66d2a3" opacity="0.55" />
        <rect x="276" y="356" width="7" height="90" rx="3.5" fill="#66b8e2" opacity="0.55" />
      </g>

      {/* ---- Pipe manifold -------------------------------------------------- */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M228 286h72M368 300h74a24 24 0 0 1 24 24v52"
          stroke="#2a3a3c"
          strokeWidth="14"
        />
        <path
          d="M228 286h72M368 300h74a24 24 0 0 1 24 24v52"
          stroke="url(#glow)"
          strokeWidth="3"
          className="flow-fast"
        />
        <circle cx="264" cy="286" r="11" fill="#0d1517" stroke="#66d2a3" strokeWidth="2" />
        <path d="M264 279v14" stroke="#66d2a3" strokeWidth="2" />
      </g>

      {/* ---- Filling line ---------------------------------------------------- */}
      <g>
        <rect x="404" y="376" width="330" height="14" rx="7" fill="#2a3a3c" />
        <rect x="404" y="390" width="330" height="6" rx="3" fill="#0d1517" />
        {[430, 486, 542, 598, 654, 710].map((x, i) => (
          <g key={x}>
            <rect x={x - 11} y="336" width="22" height="40" rx="7" fill="#121c1e" stroke="#405254" strokeWidth="1.5" />
            <rect
              x={x - 7}
              y="352"
              width="14"
              height="22"
              rx="4"
              fill="#66b8e2"
              className="pulse-fill"
              style={{ animationDelay: `${i * 0.24}s` }}
            />
            <rect x={x - 4} y="326" width="8" height="12" rx="3" fill="#405254" />
          </g>
        ))}
        {/* Filler head */}
        <path d="M466 300v26M556 300v26M646 300v26" stroke="#405254" strokeWidth="4" strokeLinecap="round" />
        <rect x="428" y="284" width="256" height="18" rx="9" fill="#1b2729" stroke="#405254" strokeWidth="1.5" />
      </g>

      {/* ---- Factory floor ---------------------------------------------------- */}
      <path d="M20 472h780" stroke="#405254" strokeWidth="2.5" />
      <rect x="20" y="474" width="780" height="42" fill="url(#floor)" opacity="0.5" />

      {/* Floor drain — where hygiene and effluent meet */}
      <g>
        <rect x="352" y="474" width="66" height="10" rx="5" fill="#05090a" stroke="#405254" strokeWidth="1.5" />
        <path d="M362 476v6M374 476v6M386 476v6M398 476v6M410 476v6" stroke="#405254" strokeWidth="1.5" />
      </g>

      {/* ---- Effluent path beneath the floor ----------------------------------- */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M385 486v34c0 16 12 28 28 28h258c22 0 40 18 40 40v18"
          stroke="#0a3958"
          strokeWidth="16"
        />
        <path
          d="M385 486v34c0 16 12 28 28 28h258c22 0 40 18 40 40v18"
          stroke="url(#water)"
          strokeWidth="4"
          className="flow-slow"
        />
      </g>

      {/* Treatment / balancing basin */}
      <g>
        <path
          d="M74 546h236a14 14 0 0 1 14 14v34a14 14 0 0 1-14 14H74a14 14 0 0 1-14-14v-34a14 14 0 0 1 14-14Z"
          fill="#072940"
          stroke="#0b5d8c"
          strokeWidth="2"
        />
        <path
          d="M66 570c22-11 44-11 66 0s44 11 66 0 44-11 66 0 22 11 32 6"
          fill="none"
          stroke="#66b8e2"
          strokeWidth="2.5"
          opacity="0.75"
          className="swell"
        />
        <path
          d="M66 588c22-11 44-11 66 0s44 11 66 0 44-11 66 0 22 11 32 6"
          fill="none"
          stroke="#2fb87f"
          strokeWidth="2"
          opacity="0.45"
        />
        <path d="M60 552 324 552" stroke="#0b5d8c" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Return-to-environment leaf marker */}
      <g transform="translate(676 582)">
        <circle r="30" fill="#073829" stroke="#2fb87f" strokeWidth="2" />
        <path
          d="M-11 11c-2.6-8 1.6-19.6 15-24 4.3-1.4 9-1.6 12.6-1.6.2 4.3 0 9.6-2.2 14.4-3.8 9.4-13.4 12.8-20 11"
          fill="none"
          stroke="#66d2a3"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M-12 14c5-8.2 11.2-14.2 19.6-18.4" stroke="#66d2a3" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* ---- Callout labels ---------------------------------------------------- */}
      <g fontFamily="var(--font-mono-tech), monospace" fontSize="11" letterSpacing="1.6" fill="#647b7d">
        <text x="96" y="168">PROCESS TANKS</text>
        <text x="428" y="266">FILLING LINE</text>
        <text x="60" y="536">EFFLUENT TREATMENT</text>
        <text x="352" y="504">DRAIN</text>
      </g>
    </svg>
  );
}
