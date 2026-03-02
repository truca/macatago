import type { Metadata } from "next";
import { PERSONA } from "@/lib/config";

export const metadata: Metadata = {
  title: "Agendar consulta gratuita",
  description: `Reserva 30 minutos con ${PERSONA.nombre} para planificar tu próximo viaje. Sin costo y sin compromiso.`,
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
