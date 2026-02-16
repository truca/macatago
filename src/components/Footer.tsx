import Link from "next/link";
import { CONTACT_EMAIL, PERSONA } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-alt">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Marca */}
          <div>
            <p className="font-bold text-fg">{PERSONA.marca}</p>
            <p className="text-sm text-fg-subtle">
              Asesoría y planificación de viajes
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-fg-muted">
            <Link href="/tarjeta" className="hover:text-primary">
              Tarjeta digital
            </Link>
            <Link href="/privacidad" className="hover:text-primary">
              Privacidad
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">
              Contacto
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-fg-subtle">
          &copy; {year} {PERSONA.marca}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
