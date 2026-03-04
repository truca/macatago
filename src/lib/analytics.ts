type CTALocation = "hero" | "mid" | "final" | "header" | "fab" | "tarjeta";

type AnalyticsEvent =
  | { name: "cta_click"; params: { location: CTALocation } }
  | { name: "booking_completed" }
  | { name: "form_started" }
  | { name: "form_completed" }
  | { name: "conversion_complete" }
  | { name: "whatsapp_click" }
  | { name: "contact_email_click" };

function isOptedOut(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((c) => c === "ga_optout=1");
}

function sendEvent(event: AnalyticsEvent) {
  const w = typeof window !== "undefined" ? window : undefined;
  if (!w || typeof w.gtag !== "function") return;
  if (isOptedOut()) return;

  const { name, ...rest } = event;
  const params = "params" in rest ? rest.params : undefined;
  w.gtag("event", name, params);
}

export function trackCTAClick(location: CTALocation) {
  sendEvent({ name: "cta_click", params: { location } });
}

export function trackBookingCompleted() {
  sendEvent({ name: "booking_completed" });
}

export function trackFormStarted() {
  sendEvent({ name: "form_started" });
}

export function trackFormCompleted() {
  sendEvent({ name: "form_completed" });
}

export function trackConversionComplete() {
  sendEvent({ name: "conversion_complete" });
}

export function trackWhatsAppClick() {
  sendEvent({ name: "whatsapp_click" });
}

export function trackContactEmailClick() {
  sendEvent({ name: "contact_email_click" });
}
