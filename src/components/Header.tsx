"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_KEYS = [
  { href: "/programm", key: "programm" },
  { href: "/partei", key: "partei" },
  { href: "/selbstkritik", key: "selbstkritik" },
  { href: "/positionen", key: "positionen" },
  { href: "/wahlomat", key: "wahlomat" },
  { href: "/presse", key: "presse" },
  { href: "/fragen", key: "fragen" },
  { href: "/unterstuetzer", key: "unterstuetzer" },
  { href: "/ki-ausweis", key: "mitgliedsausweis" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navigation");

  return (
    <header className="bg-kifd-dark text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="text-2xl font-black tracking-tight text-kifd-accent">
              KIfD
            </span>
            <span className="hidden xl:inline text-sm text-white/60 border-l border-white/20 pl-3">
              {t("programm") === "Platform"
                ? "Artificial Intelligence for Germany"
                : "Künstliche Intelligenz für Deutschland"}
            </span>
          </Link>

          <div className="hidden xl:flex items-center">
            <nav className="flex items-center">
              {NAV_KEYS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2.5 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors whitespace-nowrap"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            <div className="ml-3 pl-3 border-l border-white/20">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-white/80 hover:text-white"
              aria-label={t("menuOpen")}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-white/10 bg-kifd-dark">
          <div className="px-4 py-3 space-y-1">
            {NAV_KEYS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
