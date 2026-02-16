"use client";

import { useState } from "react";
import { IconChevronDown } from "./Icons";

const FAQS = [
  {
    pregunta: "¿Cuánto cuesta tu servicio?",
    respuesta:
      "Depende de la complejidad del viaje. La asesoría express parte desde $25.000 CLP y la planificación completa desde $60.000 CLP. Siempre puedes escribirme para una cotización sin compromiso.",
  },
  {
    pregunta: "¿Me ayudas con viajes a cualquier destino?",
    respuesta:
      "Sí, planifico viajes a cualquier parte del mundo. Me especializo en destinos populares desde Chile (América, Europa, Asia) pero puedo ayudarte con cualquier destino.",
  },
  {
    pregunta: "¿Qué incluye la planificación completa?",
    respuesta:
      "Incluye itinerario día a día, búsqueda y cotización de vuelos y hoteles, reservas, actividades recomendadas, tips prácticos y soporte durante el viaje por WhatsApp.",
  },
  {
    pregunta: "¿Cuánto tiempo antes debo contactarte?",
    respuesta:
      "Idealmente al menos 4-6 semanas antes de tu viaje para conseguir las mejores opciones y precios. Pero si tienes urgencia, igual escríbeme y vemos cómo ayudarte.",
  },
  {
    pregunta: "¿Cómo es el proceso de pago?",
    respuesta:
      "Trabajo con transferencia bancaria. Se paga un anticipo para iniciar la planificación y el resto al entregar el plan completo. Todo queda acordado antes de empezar.",
  },
  {
    pregunta: "¿Puedo pedir cambios después de recibir el itinerario?",
    respuesta:
      "¡Por supuesto! Revisamos juntos el plan y hacemos los ajustes necesarios hasta que quede perfecto. En el plan Premium los ajustes son ilimitados.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-fg sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-fg-muted">
            Si tienes otra duda, escríbeme por WhatsApp.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-fg">
                    {faq.pregunta}
                  </span>
                  <IconChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-fg-subtle transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {faq.respuesta}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
