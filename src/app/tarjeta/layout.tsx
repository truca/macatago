import type { Metadata } from "next";
import { PERSONA } from "@/lib/config";

export const metadata: Metadata = {
  title: "Tarjeta Digital",
  description: `Contacta a ${PERSONA.nombre}, ${PERSONA.cargo} en ${PERSONA.marca}. Escríbele por WhatsApp.`,
};

export default function TarjetaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
