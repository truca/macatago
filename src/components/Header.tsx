"use client";

import Image from "next/image";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const brandFont = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
});

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        {/* Logo / Marca */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_sin_texto.svg"
            alt="Macata Go logo"
            width={54}
            height={54}
            className="h-[80px] w-[80px]"
            style={{ margin: -15 }}
          />
          <span
            className={`${brandFont.className} text-2xl font-bold text-fg tracking-tight`}
          >
            Macata Go
          </span>
        </Link>

        {/* Navegación + Acciones */}
        <div className="flex items-center gap-4 sm:gap-5">
          <Link
            href="/blog"
            className="text-sm font-medium text-fg-muted hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="/agendar"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-fg hover:bg-primary-hover"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar consulta
          </Link>
        </div>
      </div>
    </header>
  );
}
