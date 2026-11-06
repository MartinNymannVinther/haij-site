import type { Locale } from "./site";

export type SelectedProject = {
  id: string;
  /** The project's own site. */
  url: string;
  /** Where the code lives. */
  repoUrl: string;
  /** SPDX identifier, e.g. "AGPL-3.0" or "MIT". */
  license: string;
  text: Record<Locale, { name: string; why: string }>;
};

/**
 * The second shelf: open source built by others that lives up to the dogmas
 * and that I have used myself. I link, I do not host, and I promise
 * nothing on the project's behalf. The section is hidden while this is empty.
 */
export const selected: SelectedProject[] = [];
