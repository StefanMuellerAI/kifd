"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("de")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "de"
            ? "text-kifd-accent font-bold"
            : "text-white/50 hover:text-white/80"
        }`}
      >
        DE
      </button>
      <span className="text-white/30">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-kifd-accent font-bold"
            : "text-white/50 hover:text-white/80"
        }`}
      >
        EN
      </button>
    </div>
  );
}
