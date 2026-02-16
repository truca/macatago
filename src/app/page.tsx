import { WHATSAPP_URL, PERSONA } from "@/lib/config";
import {
  IconWhatsApp,
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
      <ServiciosSection />
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
    <section className="relative overflow-hidden bg-bg-alt">
      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-cream) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-36">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5 text-sm text-fg-muted">
          <IconPlane className="h-4 w-4 text-primary" />
          Asesoría de viajes personalizada
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-fg sm:text-5xl lg:text-6xl">
          Viajar sin stress{" "}
          <span className="text-primary">empieza aquí</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
          Soy {PERSONA.nombre}, y te ayudo a planificar tu viaje ideal:
          destinos, vuelos, hoteles y experiencias, todo a tu medida y sin
          complicaciones.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-fg shadow-lg hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            <IconWhatsApp className="h-5 w-5" />
            Cotizar gratis por WhatsApp
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3.5 text-base font-medium text-fg-muted hover:border-primary hover:text-fg"
          >
            Ver servicios
            <IconChevronDown className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-6 text-sm text-fg-subtle">
          Sin compromiso. Respondo en menos de 24 hrs.
        </p>
      </div>
    </section>
  );
}

/* ---------- Servicios (3 paquetes) ---------- */
const SERVICIOS = [
  {
    nombre: "Asesoría Express",
    descripcion:
      "Una sesión por videollamada donde resolvemos tus dudas, revisamos opciones y te doy recomendaciones personalizadas.",
    precio: "Desde $25.000 CLP",
    items: [
      "Videollamada de 45 min",
      "Recomendaciones de destino",
      "Tips y mejores fechas",
      "Seguimiento por WhatsApp",
    ],
    destacado: false,
  },
  {
    nombre: "Planificación Completa",
    descripcion:
      "Diseño tu itinerario completo: vuelos, alojamiento, actividades y logística. Tú solo haces las maletas.",
    precio: "Desde $60.000 CLP",
    items: [
      "Itinerario día a día",
      "Cotización de vuelos y hoteles",
      "Reservas y coordinación",
      "Soporte durante el viaje",
      "Documento con tu plan completo",
    ],
    destacado: true,
  },
  {
    nombre: "Viaje a Medida Premium",
    descripcion:
      "Experiencia completa para viajes especiales: luna de miel, aniversarios, grupos. Todo personalizado al detalle.",
    precio: "Desde $120.000 CLP",
    items: [
      "Todo lo del plan completo",
      "Experiencias exclusivas",
      "Restaurantes y actividades VIP",
      "Concierge por WhatsApp 24/7",
      "Ajustes ilimitados",
    ],
    destacado: false,
  },
];

function ServiciosSection() {
  return (
    <section id="servicios" className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-fg sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-3 text-fg-muted">
            Elige el nivel de ayuda que necesitas. Siempre puedes empezar con
            una conversación gratis.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICIOS.map((s) => (
            <article
              key={s.nombre}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                s.destacado
                  ? "border-primary bg-bg-card shadow-lg ring-1 ring-primary/20"
                  : "border-border bg-bg-card"
              }`}
              style={{ boxShadow: s.destacado ? undefined : "var(--shadow-card)" }}
            >
              {s.destacado && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-fg">
                  Más popular
                </span>
              )}
              <h3 className="text-lg font-bold text-fg">{s.nombre}</h3>
              <p className="mt-2 text-sm text-fg-muted">{s.descripcion}</p>
              <p className="mt-4 text-2xl font-extrabold text-primary">
                {s.precio}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-fg-muted"
                  >
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${
                  s.destacado
                    ? "bg-primary text-primary-fg hover:bg-primary-hover"
                    : "border border-border text-fg hover:border-primary hover:text-primary"
                }`}
              >
                <IconWhatsApp className="h-4 w-4" />
                Cotizar
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-fg-subtle">
          {/* TODO: editar precios reales */}
          Precios referenciales en CLP. Cotización final depende del destino y
          complejidad del viaje.
        </p>
      </div>
    </section>
  );
}

/* ---------- Cómo funciona ---------- */
const PASOS = [
  {
    numero: "1",
    titulo: "Escríbeme por WhatsApp",
    descripcion:
      "Cuéntame a dónde quieres ir, cuándo y con quién. Sin compromiso.",
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
    <section className="bg-bg-alt py-20 sm:py-24">
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

/* ---------- Qué necesito para cotizar ---------- */
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
            ¿Qué necesito para cotizar?
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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-fg hover:bg-primary-hover"
          >
            <IconWhatsApp className="h-4 w-4" />
            Escribir por WhatsApp
          </a>
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
          Escríbeme por WhatsApp y conversemos. La primera consulta es sin costo
          ni compromiso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-fg shadow-lg hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]"
        >
          <IconWhatsApp className="h-6 w-6" />
          Escríbeme por WhatsApp
        </a>
        <p className="mt-4 text-sm text-fg-subtle">
          Respondo en menos de 24 horas.
        </p>
      </div>
    </section>
  );
}
