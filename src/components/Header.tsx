"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/programm", label: "Programm" },
  { href: "/partei", label: "Die Partei" },
  { href: "/selbstkritik", label: "Selbstkritik" },
  { href: "/positionen", label: "Positionen" },
  { href: "/presse", label: "Presse" },
  { href: "/fragen", label: "Frag die KI" },
  { href: "/unterstuetzer", label: "Unterstützer" },
  { href: "/ki-ausweis", label: "KI-Ausweis" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-kifd-dark text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="text-2xl font-black tracking-tight text-kifd-accent">
              KIfD
            </span>
            <span className="hidden sm:inline text-sm text-white/60 border-l border-white/20 pl-3">
              Künstliche Intelligenz für Deutschland
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
            aria-label="Menü öffnen"
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

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-kifd-dark">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
