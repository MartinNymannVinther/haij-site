import type { Metadata } from "next";
import { ChecklistPage } from "@/components/checklist-page";
import { checklist } from "@/content/checklist";

export const metadata: Metadata = { title: checklist.da.title };

export default function Page() {
  return <ChecklistPage locale="da" />;
}
