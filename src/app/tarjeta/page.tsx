"use client";

import { WHATSAPP_URL, WHATSAPP_E164, CONTACT_EMAIL, SITE_URL, PERSONA } from "@/lib/config";
import { IconWhatsApp, IconDownload, IconCopy, IconShare, IconUser } from "@/components/Icons";
import { useState } from "react";
import type { Metadata } from "next";

/* ============================================
   /tarjeta — Tarjeta Digital para compartir
   ============================================ */

export default function TarjetaPage() {
  const [copied, setCopied] = useState(false);
  const tarjetaUrl = `${SITE_URL}/tarjeta`;

  function handleCopyLink() {
    navigator.clipboard.writeText(tarjetaUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleDownloadVCard() {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${PERSONA.nombre} — ${PERSONA.marca}`,
      `N:${PERSONA.apellido};${PERSONA.nombreCompleto};;;`,
      `ORG:${PERSONA.marca}`,
      `TITLE:${PERSONA.cargo}`,
      `TEL;TYPE=CELL:${WHATSAPP_E164}`,
      `EMAIL:${CONTACT_EMAIL}`,
      `URL:${SITE_URL}`,
      `NOTE:${PERSONA.marca} — Asesoría y planificación de viajes`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${PERSONA.nombre}-${PERSONA.marca.replace(/\s/g, "")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${PERSONA.nombre} — ${PERSONA.marca}`,
          text: `Contacta a ${PERSONA.nombre}, asesora de viajes en ${PERSONA.marca}`,
          url: tarjetaUrl,
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-bg-alt px-4 py-16">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div
          className="overflow-hidden rounded-3xl border border-border bg-bg-card"
          style={{ boxShadow: "var(--shadow-float)" }}
        >
          {/* Header band */}
          <div className="relative h-24 bg-gradient-to-br from-primary to-accent">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
              {/* Avatar placeholder — reemplazar con foto real */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-bg-card bg-light text-earth">
                <IconUser className="h-10 w-10" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="px-6 pb-8 pt-14 text-center">
            <h1 className="text-xl font-bold text-fg">{PERSONA.nombre}</h1>
            <p className="text-sm text-fg-muted">{PERSONA.cargo}</p>
            <p className="mt-1 text-sm font-semibold text-primary">
              {PERSONA.marca}
            </p>
            <p className="mt-3 text-xs text-fg-subtle">
              Asesoría y planificación de viajes personalizada
            </p>

            {/* Main CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp py-3.5 text-base font-bold text-white hover:bg-whatsapp-hover"
            >
              <IconWhatsApp className="h-5 w-5" />
              Escribir por WhatsApp
            </a>

            {/* Secondary actions */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <button
                onClick={handleDownloadVCard}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border px-2 py-3 text-fg-muted hover:border-primary hover:text-primary"
              >
                <IconDownload className="h-5 w-5" />
                <span className="text-[11px] font-medium">Guardar</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border px-2 py-3 text-fg-muted hover:border-primary hover:text-primary"
              >
                <IconCopy className="h-5 w-5" />
                <span className="text-[11px] font-medium">
                  {copied ? "Copiado!" : "Copiar link"}
                </span>
              </button>
              <button
                onClick={handleShare}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border px-2 py-3 text-fg-muted hover:border-primary hover:text-primary"
              >
                <IconShare className="h-5 w-5" />
                <span className="text-[11px] font-medium">Compartir</span>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle branding */}
        <p className="mt-6 text-center text-xs text-fg-subtle">
          {PERSONA.marca} &middot; viajar sin stress empieza aquí
        </p>
      </div>
    </section>
  );
}
