import type { ToolStatus } from "@/content/tools";

/**
 * Tinted pills with dark text, never filled surfaces, as in the 2a system.
 * "new" gets a small dot so it reads as "live, and fresh" next to "live".
 */
export function StatusChip({ status, label }: { status: ToolStatus; label: string }) {
  const tone = {
    live: "bg-success-tint text-success",
    new: "bg-accent text-accent-foreground",
    coming: "bg-muted text-muted-foreground",
  }[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.75rem] font-medium ${tone}`}
    >
      {status === "new" ? (
        <span className="bg-primary h-1.5 w-1.5 rounded-full" aria-hidden />
      ) : null}
      {label}
    </span>
  );
}
