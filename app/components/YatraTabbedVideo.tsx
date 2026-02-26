"use client";

import { useEffect, useMemo, useState } from "react";

type TabItem = {
  id: string;
  label: string;
  subtitle?: string;
  description: string; // 👈 NUEVO
  src: string; // /public path
  poster?: string; // opcional
};

export function YatraTabbedVideo() {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        id: "aftermovie",
        label: "AFTERMOVIE VIÑA DEL MAR 2025",
        description:
          "Edición y armado del aftermovie: selección de highlights, ritmo musical y versiones optimizadas para redes.",
        src: "/videos/yatra/ejemplo.mp4",
        // poster: "/videos/yatra/aftermovie_poster.jpg",
      },
      {
        id: "videoclip",
        label: "VIDEOCLIP DISCO MILAGRO 2025",
        description:
          "Dirección de montaje + post: continuidad visual, timing de cortes y exports en formatos 16:9 y 9:16.",
        src: "/videos/yatra/ejemplo.mp4",
      },
      {
        id: "fandom",
        label: "CUENTA FANDOM @ENTRETANTAGENTE",
        description:
          "Contenido vertical para comunidad: recortes, hooks rápidos, subtitulado y estructura serial para crecimiento orgánico.",
        src: "/videos/yatra/ejemplo.mp4",
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  // Overlay info
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Cerrar con ESC (opcional)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsInfoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section data-nav="Sebastían Yatra" className="mx-auto max-w-6xl px-6 pb-24">
      {/* TABS */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((t) => {
          const isActive = t.id === activeId;

          return (
            <button
              key={t.id}
              onClick={() => {
                setActiveId(t.id);
                setIsInfoOpen(true); // 👈 abre overlay al click
              }}
              className={[
                "relative -mb-[1px] rounded-t-2xl border px-5 py-3 text-xs tracking-wide transition",
                "border-b-0", // 👈 sin borde inferior (evita línea doble)
                isActive
                  ? "border-pc-green bg-pc-green/80 text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:text-white",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* VIDEO CARD */}
      <div className="rounded-b-2xl border border-pc-green bg-black/40 p-4">
        <div className="relative overflow-hidden rounded-2xl border border-black/40">
          {/* OVERLAY */}
          {isInfoOpen && (
            <div className="absolute left-4 right-4 top-4 z-20">
              <div className="rounded-xl border border-white/10 bg-zinc-900/70 backdrop-blur-md">
                <div className="flex items-start justify-between gap-4 px-4 py-3">
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold tracking-[0.18em] text-white/60">
                      {active.label}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {active.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsInfoOpen(false)}
                    className="shrink-0 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-white/80 hover:bg-black/60"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* key para que re-monte al cambiar tab */}
          <video
            key={active.id}
            className="h-full w-full"
            src={active.src}
            poster={active.poster}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}