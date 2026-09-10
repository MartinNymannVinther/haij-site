import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { terms } from "@/content/legal";

export const metadata: Metadata = { title: terms.da.title };

export default function Page() {
  return <LegalPage page={terms.da} locale="da" />;
}
