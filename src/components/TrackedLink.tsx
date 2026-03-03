"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackCTAClick, trackWhatsAppClick, trackContactEmailClick } from "@/lib/analytics";

type TrackedEvent =
  | { event: "cta_click"; location: "hero" | "mid" | "final" | "header" | "fab" | "tarjeta" }
  | { event: "whatsapp_click" }
  | { event: "contact_email_click" };

type TrackedLinkProps = ComponentProps<typeof Link> & {
  track: TrackedEvent;
};

export function TrackedLink({ track, onClick, ...props }: TrackedLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    switch (track.event) {
      case "cta_click":
        trackCTAClick(track.location);
        break;
      case "whatsapp_click":
        trackWhatsAppClick();
        break;
      case "contact_email_click":
        trackContactEmailClick();
        break;
    }
    if (onClick) onClick(e);
  }

  return <Link {...props} onClick={handleClick} />;
}
