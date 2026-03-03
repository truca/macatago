"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { CALENDLY_URL, TALLY_FORM_URL, PERSONA } from "@/lib/config";
import { IconCalendar, IconCheck, IconPlane } from "@/components/Icons";
import {
  trackBookingCompleted,
  trackFormStarted,
  trackFormCompleted,
  trackConversionComplete,
} from "@/lib/analytics";

type Step = "calendly" | "transition" | "tally" | "success";

export default function AgendarPage() {
  const [step, setStep] = useState<Step>("calendly");
  const calendlyRef = useRef<HTMLDivElement>(null);

  function goToStep(next: Step) {
    if (next === "success") trackConversionComplete();
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Cargar el widget script de Calendly
  useEffect(() => {
    if (step !== "calendly") return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [step]);

  // Escuchar eventos de Calendly y Tally via postMessage
  const handleMessage = useCallback(
    (e: MessageEvent) => {
      const data =
        typeof e.data === "string" ? tryParse(e.data) : e.data;

      // Calendly widget emite esto al agendar
      if (step === "calendly" && data?.event === "calendly.event_scheduled") {
        trackBookingCompleted();
        goToStep("transition");
      }

      // Tally: detectar formulario enviado
      if (
        step === "tally" &&
        (e.data === "Tally.FormSubmitted" ||
          data?.event === "Tally.FormSubmitted")
      ) {
        trackFormCompleted();
        goToStep("success");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [step],
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  return (
    <section className="bg-bg-alt min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Progress indicator */}
        <StepIndicator current={step} />

        {/* Step content */}
        {step === "calendly" && (
          <CalendlyStep
            containerRef={calendlyRef}
            onContinue={() => goToStep("transition")}
          />
        )}
        {step === "transition" && (
          <TransitionStep onContinue={() => { trackFormStarted(); goToStep("tally"); }} />
        )}
        {step === "tally" && (
          <TallyStep onSkip={() => goToStep("success")} />
        )}
        {step === "success" && <SuccessStep />}
      </div>
    </section>
  );
}

function tryParse(str: string) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

/* ---------- Progress Indicator ---------- */
function StepIndicator({ current }: { current: Step }) {
  const steps: { key: string; label: string }[] = [
    { key: "calendly", label: "Agendar" },
    { key: "tally", label: "Detalles del viaje" },
  ];

  // transition cuenta como paso 1 completado
  const currentIndex =
    current === "calendly" ? 0 : current === "transition" ? 1 : 1;

  if (current === "success" || current === "transition") return null;

  return (
    <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
      {steps.map((s, i) => {
        const isActive =
          (s.key === "calendly" && current === "calendly") ||
          (s.key === "tally" && current === "tally");
        const isCompleted = i < currentIndex;

        return (
          <div key={s.key} className="flex items-center gap-3">
            {i > 0 && (
              <div
                className={`h-px w-8 sm:w-12 ${isCompleted || isActive ? "bg-primary" : "bg-border"}`}
              />
            )}
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  isCompleted
                    ? "bg-primary text-primary-fg"
                    : isActive
                      ? "bg-primary text-primary-fg"
                      : "bg-border text-fg-subtle"
                }`}
              >
                {isCompleted ? (
                  <IconCheck className="h-3.5 w-3.5" />
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-sm font-medium ${isActive ? "text-fg" : "text-fg-subtle"}`}
              >
                {s.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Step 1: Calendly ---------- */
function CalendlyStep({
  containerRef,
  onContinue,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onContinue: () => void;
}) {
  return (
    <div>
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <IconCalendar className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold text-fg sm:text-3xl">
          Elige una fecha para tu consulta
        </h1>
        <p className="mt-2 text-fg-muted">
          Reserva 30 minutos con {PERSONA.nombre}. Es gratis y sin compromiso.
        </p>
      </div>

      {/* Widget inline de Calendly — el script carga el iframe automáticamente */}
      <div
        ref={containerRef}
        className="calendly-inline-widget overflow-hidden rounded-2xl border border-border bg-bg-card"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_landing_page_details=1`}
        style={{ minWidth: 320, height: 700 }}
      />

      {/* Botón manual como fallback */}
      <div className="mt-6 text-center">
        <button
          onClick={onContinue}
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-fg-muted hover:border-primary hover:text-fg"
        >
          Ya agendé mi reunión
        </button>
      </div>
    </div>
  );
}

/* ---------- Transition: Celebración + contexto ---------- */
function TransitionStep({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <IconCheck className="h-8 w-8" />
      </div>
      <h1 className="text-2xl font-bold text-fg sm:text-3xl">
        ¡Reunión agendada!
      </h1>
      <p className="mx-auto mt-3 max-w-md text-fg-muted">
        Para llegar a nuestra reunión con un boceto listo de tu viaje,
        necesito que me cuentes algunos detalles. Son solo un par de minutos.
      </p>
      <button
        onClick={onContinue}
        className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-fg shadow-lg hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]"
      >
        <IconPlane className="h-5 w-5" />
        Completar datos del viaje
      </button>
      <p className="mt-3 text-sm text-fg-subtle">
        Paso 2 de 2 — te tomará menos de 2 minutos
      </p>
    </div>
  );
}

/* ---------- Step 2: Tally ---------- */
function TallyStep({ onSkip }: { onSkip: () => void }) {
  return (
    <div>
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <IconPlane className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold text-fg sm:text-3xl">
          Cuéntame sobre tu viaje
        </h1>
        <p className="mt-2 text-fg-muted">
          Con esta info preparo un boceto personalizado para nuestra reunión.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-bg-card">
        <iframe
          src={`${TALLY_FORM_URL}?transparentBackground=1`}
          title="Formulario de viaje"
          className="h-[600px] w-full border-0"
        />
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={onSkip}
          className="text-sm text-fg-subtle hover:text-fg-muted"
        >
          Prefiero completarlo después
        </button>
      </div>
    </div>
  );
}

/* ---------- Step 3: Success ---------- */
function SuccessStep() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <IconCheck className="h-8 w-8" />
      </div>
      <h1 className="text-2xl font-bold text-fg sm:text-3xl">
        ¡Todo listo!
      </h1>
      <p className="mt-3 max-w-md text-lg text-fg-muted">
        Tu reunión está agendada y ya tengo los detalles de tu viaje.
        Nos vemos pronto para planificar tu aventura.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-fg hover:bg-primary-hover"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
