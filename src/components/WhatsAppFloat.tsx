"use client";

import { IconCalendar } from "@/components/Icons";
import { TrackedLink } from "@/components/TrackedLink";

export function WhatsAppFloat() {
  return (
    <TrackedLink
      href="/agendar"
      track={{ event: "cta_click", location: "fab" }}
      aria-label="Agendar consulta"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-fg shadow-lg hover:bg-primary-hover hover:scale-105 active:scale-95 md:bottom-8 md:right-8 md:h-16 md:w-16"
      style={{ boxShadow: "var(--shadow-float)" }}
    >
      <IconCalendar className="h-7 w-7 md:h-8 md:w-8" />
    </TrackedLink>
  );
}
