import type { Metadata } from "next";
import { ChecklistPage } from "@/components/checklist-page";
import { checklist } from "@/content/checklist";

export const metadata: Metadata = { title: checklist.en.title };

export default function Page() {
  return <ChecklistPage locale="en" />;
}
