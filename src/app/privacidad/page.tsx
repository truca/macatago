import type { Metadata } from "next";
import { CONTACT_EMAIL, PERSONA } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${PERSONA.marca}. Cómo manejamos tu información.`,
};

/* ============================================
   /privacidad — Política de Privacidad
   ============================================ */

export default function PrivacidadPage() {
  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-fg sm:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-fg-subtle">
          Última actualización: marzo 2026
        </p>

        <div className="prose-custom mt-10 space-y-8 text-fg-muted">
          <Section title="1. Información que recopilamos">
            <p>
              En <strong>{PERSONA.marca}</strong> solo recopilamos la
              información que tú nos compartes voluntariamente al contactarnos
              por WhatsApp o correo electrónico, como:
            </p>
            <ul>
              <li>Tu nombre</li>
              <li>Datos de contacto (teléfono, email)</li>
              <li>
                Información sobre tu viaje (destino, fechas, preferencias)
              </li>
            </ul>
          </Section>

          <Section title="2. Cómo usamos tu información">
            <p>Usamos tu información exclusivamente para:</p>
            <ul>
              <li>
                Brindarte asesoría y planificación de viajes personalizada
              </li>
              <li>Enviarte cotizaciones y propuestas</li>
              <li>Coordinar reservas y servicios relacionados a tu viaje</li>
              <li>Responder tus consultas</li>
            </ul>
          </Section>

          <Section title="3. No vendemos tu información">
            <p>
              <strong>Nunca</strong> vendemos, alquilamos ni compartimos tu
              información personal con terceros para fines de marketing. Solo
              compartimos datos con proveedores de viaje (aerolíneas, hoteles,
              etc.) cuando es estrictamente necesario para gestionar tu
              reserva, y siempre con tu conocimiento.
            </p>
          </Section>

          <Section title="4. Almacenamiento y seguridad">
            <p>
              Tu información se almacena de forma segura en nuestras
              herramientas de trabajo (WhatsApp, correo electrónico). Tomamos
              medidas razonables para proteger tus datos, aunque ningún
              sistema es 100% seguro.
            </p>
          </Section>

          <Section title="5. Cookies, formularios y analíticas">
            <p>
              Este sitio utiliza <strong>Google Analytics</strong> para
              entender cómo los visitantes interactúan con la página (páginas
              visitadas, duración de la visita, país de origen). Google
              Analytics utiliza cookies y envía datos a servidores de Google.
              No recopilamos datos que te identifiquen personalmente a través
              de esta herramienta. Puedes desactivar las cookies de Google
              Analytics instalando el{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                complemento de inhabilitación de Google Analytics
              </a>
              . También almacenamos tu preferencia de tema visual en
              localStorage.
            </p>
            <p>
              Para agendar reuniones y recopilar información sobre tu viaje,
              utilizamos servicios externos (Calendly y Tally). Estos
              servicios tienen sus propias políticas de privacidad y manejan
              tus datos de forma independiente.
            </p>
          </Section>

          <Section title="6. Tus derechos">
            <p>Tienes derecho a:</p>
            <ul>
              <li>Solicitar acceso a la información que tenemos sobre ti</li>
              <li>Pedir que corrijamos o eliminemos tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, escríbenos a{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="7. Cambios a esta política">
            <p>
              Podemos actualizar esta política ocasionalmente. Cualquier
              cambio será publicado en esta página con la fecha de
              actualización.
            </p>
          </Section>

          <Section title="8. Contacto">
            <p>
              Si tienes preguntas sobre esta política, contáctanos en{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              o por WhatsApp.
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-3 text-lg font-bold text-fg">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-primary [&_a]:hover:underline">
        {children}
      </div>
    </div>
  );
}
