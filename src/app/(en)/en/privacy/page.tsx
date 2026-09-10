import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacy } from "@/content/legal";

export const metadata: Metadata = { title: privacy.en.title };

export default function Page() {
  return <LegalPage page={privacy.en} locale="en" />;
}
