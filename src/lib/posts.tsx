import Image from "next/image";
import { WHATSAPP_URL } from "./config";

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
  cover: string; // imagen para la card
  content: () => React.ReactNode;
};

export const posts: Post[] = [
  {
    slug: "quien-soy",
    title: "¿Quién soy?",
    summary:
      "Conoce a Natalia Acuña, la persona detrás de Macata Go: su historia, su forma de viajar y cómo puede ayudarte.",
    date: "2026-02-18",
    cover: "/hero.webp",
    content: () => (
      <>
        <Image
          src="/hero.webp"
          alt="Natalia Acuña"
          width={800}
          height={500}
          className="w-full rounded-2xl object-cover"
        />

        <p>
          Hola! Mi nombre es <em>Natalia Acuña</em>. Soy una persona curiosa,
          estratégica y muy orientada al detalle. Desde 2015 he recorrido
          distintos lugares del mundo, y cada viaje me ha enseñado algo distinto
          sobre culturas, ritmos, formas de viajar y también sobre mí misma.
        </p>

        <p>
          Me gusta entender profundamente a quienes tengo al frente: cómo
          piensan, cómo viajan, qué los mueve y qué esperan vivir. No me quedo
          en lo superficial; disfruto analizar, ordenar y transformar ideas
          dispersas en planes claros y bien estructurados.
        </p>

        <p>
          Tengo una mezcla entre sensibilidad y organización: conecto con la
          emoción que implica viajar, pero también con la importancia de que cada
          detalle funcione. Me motiva generar tranquilidad, anticiparme a
          imprevistos y hacer que las experiencias fluyan.
        </p>

        <p>
          Para mí, viajar no es solo trasladarse, es construir recuerdos con
          intención y conciencia.
        </p>

        <hr />

        <h2>¿Cómo puedo ayudarte con tu viaje?</h2>

        <p>
          Organizo tu viaje definiendo destino, fechas, vuelos, alojamientos y
          actividades en un itinerario ordenado y realista. Te oriento para
          optimizar tiempo, presupuesto y logística, evitando errores comunes y
          sobrecarga de planificación.
        </p>

        <p>
          Puedo entregarte desde una asesoría básica, una guía y la organización
          completa de tu viaje, incluyendo:
        </p>

        <ul>
          <li>Reserva de hoteles</li>
          <li>Compra de transportes internacionales e internos</li>
          <li>Reserva para lugares turísticos</li>
          <li>Y mucho más</li>
        </ul>

        <hr />

        <h2>¿Cómo me puedes contactar?</h2>

        <p>
          Puedes contactarme a través de WhatsApp:{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Escríbeme por WhatsApp
          </a>
        </p>

        <p>
          Si quieres conocer más sobre mí, sígueme en Instagram:{" "}
          <em>@macata.go</em>
        </p>
      </>
    ),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
