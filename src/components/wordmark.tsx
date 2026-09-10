/**
 * The Haij mark: three left-aligned bars, long-short-medium, in the moss
 * ramp. Inline SVG so it follows the theme and needs no network request. The
 * wordmark beside it is live text in Archivo 600; it is never part of the SVG.
 * Identical to the one in the app, on purpose.
 */
export function HaijMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 38 34"
      role="presentation"
      aria-hidden
      className={`h-[1.15em] w-auto shrink-0 ${className}`}
    >
      <rect x="0" y="0" width="38" height="8" rx="2.5" fill="var(--chart-1)" />
      <rect x="0" y="13" width="25" height="8" rx="2.5" fill="var(--chart-2)" />
      <rect x="0" y="26" width="31" height="8" rx="2.5" fill="var(--chart-3)" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold ${className}`}>
      <HaijMark />
      <span className="tracking-[-0.03em]">Haij</span>
    </span>
  );
}
