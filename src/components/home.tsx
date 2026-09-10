import { AboutSection } from "@/components/about";
import { DogmaSection } from "@/components/dogma-list";
import { Hero } from "@/components/hero";
import { SelectedSection } from "@/components/selected";
import { ToolsSection } from "@/components/tools";
import { WaysSection } from "@/components/ways";
import type { Locale } from "@/content/site";

export function Home({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <ToolsSection locale={locale} />
      <DogmaSection locale={locale} />
      <WaysSection locale={locale} />
      <SelectedSection locale={locale} />
      <AboutSection locale={locale} />
    </>
  );
}
