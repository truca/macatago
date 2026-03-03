import Image from "next/image";
import Link from "next/link";
import { PERSONA } from "@/lib/config";
import { TrackedLink } from "@/components/TrackedLink";
import {
  IconChat,
  IconCalendar,
  IconMap,
  IconPlane,
  IconStar,
  IconCheck,
  IconChevronDown,
} from "@/components/Icons";
import { FAQSection } from "@/components/FAQ";

/* ============================================
   HOME — Landing Page
   ============================================ */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ComoFuncionaSection />
      <QueCotizarSection />
      <TestimoniosSection />
      <FAQSection />
      <CTAFinalSection />
    </>
  );
}

/* ---------- Hero ---------- */
function HeroSection() {
  return (
    <section className="bg-bg-alt">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:gap-16 md:py-24 lg:py-32">
        {/* Texto — izquierda */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5 text-sm text-fg-muted">
            <IconPlane className="h-4 w-4 text-primary" />
            Asesoría de viajes personalizada
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Viajar sin stress{" "}
            <span className="text-primary">empieza aquí</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-fg-muted sm:text-xl">
            Soy {PERSONA.nombre}, y te ayudo a planificar tu viaje ideal:
            destinos, vuelos, hoteles y experiencias, todo a tu medida y sin
            complicaciones.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <TrackedLink
              href="/agendar"
              track={{ event: "cta_click", location: "hero" }}
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-fg shadow-lg hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              <IconCalendar className="h-5 w-5" />
              Agendar consulta gratis
            </TrackedLink>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3.5 text-base font-medium text-fg-muted hover:border-primary hover:text-fg"
            >
              ¿Cómo funciona?
              <IconChevronDown className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 text-sm text-fg-subtle">
            Sin costo ni compromiso. Elige el horario que más te acomode.
          </p>
        </div>

        {/* Foto — derecha (arriba en mobile) */}
        <div className="relative mx-auto w-56 shrink-0 sm:w-64 md:w-72 lg:w-80">
          <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
            <Image
              src="/foto1.webp"
              alt={PERSONA.nombre}
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cómo funciona ---------- */
const PASOS = [
  {
    numero: "1",
    titulo: "Diagnóstico",
    descripcion:
      "Conversamos sobre tu viaje ideal: destino, fechas, presupuesto y preferencias.",
    icon: IconChat,
  },
  {
    numero: "2",
    titulo: "Diseño tu plan",
    descripcion:
      "Investigo las mejores opciones y armo un itinerario a tu medida.",
    icon: IconMap,
  },
  {
    numero: "3",
    titulo: "Revisamos juntos",
    descripcion:
      "Por videollamada o WhatsApp ajustamos todo hasta que quede perfecto.",
    icon: IconCalendar,
  },
  {
    numero: "4",
    titulo: "A viajar",
    descripcion:
      "Te entrego todo listo. Durante el viaje sigo disponible por si necesitas algo.",
    icon: IconPlane,
  },
];

function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="bg-bg-alt py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-fg sm:text-4xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-3 text-fg-muted">
            Cuatro pasos simples para tu próximo viaje.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.numero} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Paso {p.numero}
                </span>
                <h3 className="mt-2 text-base font-bold text-fg">
                  {p.titulo}
                </h3>
                <p className="mt-1.5 text-sm text-fg-muted">
                  {p.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Qué necesito para el diagnóstico ---------- */
function QueCotizarSection() {
  const items = [
    "Destino(s) que te interesan",
    "Fechas aproximadas de viaje",
    "Cantidad de viajeros (adultos, niños)",
    "Presupuesto aproximado (opcional)",
    "Alguna preferencia especial (hotel, experiencias, etc.)",
  ];

  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
          <h2 className="text-2xl font-bold text-fg">
            ¿Qué necesito para el diagnóstico?
          </h2>
          <p className="mt-2 text-fg-muted">
            Para darte la mejor propuesta, ten a mano esta info (aunque no es
            obligatoria para escribirme):
          </p>
          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-fg-muted"
              >
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <TrackedLink
            href="/agendar"
            track={{ event: "cta_click", location: "mid" }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-fg hover:bg-primary-hover"
          >
            <IconCalendar className="h-4 w-4" />
            Agendar consulta gratis
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonios ---------- */
const TESTIMONIOS = [
  {
    nombre: "Camila R.",
    texto:
      "Nati nos armó un viaje increíble a Europa. Todo estaba coordinado al detalle, solo tuvimos que disfrutar. 100% recomendada.",
    estrellas: 5,
  },
  {
    nombre: "Andrés M.",
    texto:
      "Contraté la asesoría express para un viaje a Brasil. En 45 minutos tenía claro todo: fechas, vuelos y hoteles. Súper eficiente.",
    estrellas: 5,
  },
  {
    nombre: "Francisca L.",
    texto:
      "Lo mejor es la tranquilidad. Nati se encargó de todo y durante el viaje estuvo siempre disponible. Viajar así no tiene precio.",
    estrellas: 5,
  },
];

function TestimoniosSection() {
  return (
    <section className="bg-bg-alt py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-fg sm:text-4xl">
            Lo que dicen mis clientes
          </h2>
          <p className="mt-3 text-fg-muted">
            {/* TODO: reemplazar con testimonios reales */}
            Testimonios de viajeros que confiaron en Macata Go.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIOS.map((t) => (
            <article
              key={t.nombre}
              className="rounded-2xl border border-border bg-bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex gap-0.5 text-secondary">
                {Array.from({ length: t.estrellas }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                &ldquo;{t.texto}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-fg">{t.nombre}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA Final ---------- */
function CTAFinalSection() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-fg sm:text-4xl">
          ¿Lista/o para tu próximo viaje?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">
          Agenda una consulta gratuita y cuéntame sobre tu viaje. Llego a
          nuestra primera reunión con un boceto listo para ti.
        </p>
        <TrackedLink
          href="/agendar"
          track={{ event: "cta_click", location: "final" }}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-fg shadow-lg hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]"
        >
          <IconCalendar className="h-6 w-6" />
          Agendar consulta gratis
        </TrackedLink>
        <p className="mt-4 text-sm text-fg-subtle">
          Solo toma 2 minutos. Sin costo ni compromiso.
        </p>
      </div>
    </section>
  );
}
