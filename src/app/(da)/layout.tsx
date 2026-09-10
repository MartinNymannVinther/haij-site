import "@fontsource-variable/archivo";
import "../globals.css";
import { metadataFor, Shell } from "@/components/shell";

export const metadata = metadataFor("da");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell locale="da">{children}</Shell>;
}
