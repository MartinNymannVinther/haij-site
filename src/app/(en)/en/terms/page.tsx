import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { terms } from "@/content/legal";

export const metadata: Metadata = { title: terms.en.title };

export default function Page() {
  return <LegalPage page={terms.en} locale="en" />;
}
