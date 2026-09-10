/**
 * The few shared class strings the site needs. Kept as functions and strings
 * rather than components so the markup stays plain anchors and buttons.
 */
export function button(
  variant: "primary" | "outline" | "soft" = "primary",
  size: "sm" | "lg" = "sm",
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-[background-color,color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-y-px";
  const sizes = { sm: "h-9 px-3.5 text-[0.875rem]", lg: "h-11 px-5 text-[0.9375rem]" };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
    outline: "border border-border bg-card text-foreground hover:bg-secondary",
    soft: "bg-accent text-accent-foreground hover:bg-success-tint",
  };
  return `${base} ${sizes[size]} ${variants[variant]}`;
}

/** Header links that collapse on small screens; kept apart from button() so `hidden` is not fought by `inline-flex`. */
export const navLink =
  "hidden h-9 items-center rounded-lg px-3 text-[0.875rem] font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex";

/** A text link in the moss green with a soft underline that firms up on hover. */
export const textLink =
  "text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:decoration-primary";

/** The small label above a section title. */
export const kicker = "text-label text-[0.8125rem] font-medium tracking-[0.01em]";

export const container = "mx-auto w-full max-w-6xl px-6";
