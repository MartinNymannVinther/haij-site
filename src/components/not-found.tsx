import Link from "next/link";
import { copy } from "@/content/copy";
import { paths, type Locale } from "@/content/site";
import { button, container } from "@/lib/ui";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = copy[locale].notFound;
  return (
    <div className={`${container} py-24 sm:py-32`}>
      <p className="text-meta text-[0.8125rem]">404</p>
      <h1 className="mt-2 text-[2.25rem] leading-[1.05] sm:text-[3rem]">{t.title}</h1>
      <p className="text-muted-foreground mt-4 max-w-md text-[1.0625rem] leading-7">{t.text}</p>
      <Link href={paths[locale].home} className={`${button("outline", "lg")} mt-8`}>
        {t.back}
      </Link>
    </div>
  );
}
