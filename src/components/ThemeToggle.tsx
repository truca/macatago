"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { id: "solar", label: "Solar", icon: "☀️" },
  { id: "tierra", label: "Tierra", icon: "🌿" },
  { id: "nocturno", label: "Nocturno", icon: "🌙" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeId>("solar");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("macatago-theme") as ThemeId | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  function changeTheme(newTheme: ThemeId) {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("macatago-theme", newTheme);
    setOpen(false);
  }

  const current = THEMES.find((t) => t.id === theme)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-fg-muted hover:border-primary hover:text-fg"
        aria-label={`Tema actual: ${current.label}. Cambiar tema`}
        aria-expanded={open}
      >
        <span aria-hidden="true">{current.icon}</span>
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 rounded-lg border border-border bg-bg-card p-1 shadow-lg"
               style={{ boxShadow: "var(--shadow-float)" }}>
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm ${
                  theme === t.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-fg-muted hover:bg-light hover:text-fg"
                }`}
              >
                <span aria-hidden="true">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
