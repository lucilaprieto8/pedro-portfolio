"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projects";

export function ProjectsInteractive() {
  const base = projects;
  const N = base.length;

  // Lista extendida para infinito (3 ciclos)
  const extended = useMemo(() => [...base, ...base, ...base], [base]);

  // Bloque del medio (donde queremos “vivir”)
  const MID_OFFSET = N;

  const [activeProjectId, setActiveProjectId] = useState(base[0].id);

  const activeProject = useMemo(
    () => base.find((p) => p.id === activeProjectId) ?? base[0],
    [activeProjectId, base]
  );

  const [activeCameraId, setActiveCameraId] = useState(
    activeProject.cameras[0].id
  );

  const activeCamera = useMemo(
    () =>
      activeProject.cameras.find((c) => c.id === activeCameraId) ??
      activeProject.cameras[0],
    [activeProject, activeCameraId]
  );

  // Refs
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cycleHeightRef = useRef<number>(0);
  const isAdjustingScrollRef = useRef(false);

  function centerItemAtIndex(
    extIndex: number,
    behavior: ScrollBehavior = "smooth"
  ) {
    const container = listRef.current;
    const el = itemRefs.current[extIndex];
    if (!container || !el) return;

    const top = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;

    container.scrollTo({ top, behavior });
  }

  function indexInBaseById(id: string) {
    return base.findIndex((p) => p.id === id);
  }

  function centerSelectedInMiddle(behavior: ScrollBehavior = "smooth") {
    const baseIndex = indexInBaseById(activeProjectId);
    if (baseIndex < 0) return;
    const targetExtIndex = MID_OFFSET + baseIndex;
    centerItemAtIndex(targetExtIndex, behavior);
  }

  function handleProjectChange(id: string) {
    setActiveProjectId(id);

    const next = base.find((p) => p.id === id);
    if (next) setActiveCameraId(next.cameras[0].id);
  }

  // 1) Medir la altura de un ciclo + arrancar centrado
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const t = window.setTimeout(() => {
      const a = itemRefs.current[MID_OFFSET];
      const b = itemRefs.current[MID_OFFSET + N];
      if (a && b) {
        cycleHeightRef.current = b.offsetTop - a.offsetTop;
      }
      centerSelectedInMiddle("auto");
    }, 0);

    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2) Mantener el seleccionado centrado (cuando cambia)
  useEffect(() => {
    centerSelectedInMiddle("smooth");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProjectId]);

  // 3) Scroll infinito: cuando te acercás arriba/abajo, saltás al ciclo del medio
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const onScroll = () => {
      if (isAdjustingScrollRef.current) return;

      const cycle = cycleHeightRef.current;
      if (!cycle) return;

      const top = container.scrollTop;

      const lowerBound = cycle * 0.5;
      const upperBound = cycle * 2.5;

      if (top < lowerBound) {
        isAdjustingScrollRef.current = true;
        container.scrollTop = top + cycle;
        requestAnimationFrame(() => {
          isAdjustingScrollRef.current = false;
        });
      } else if (top > upperBound) {
        isAdjustingScrollRef.current = true;
        container.scrollTop = top - cycle;
        requestAnimationFrame(() => {
          isAdjustingScrollRef.current = false;
        });
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div data-nav="Bizarrap" className="grid grid-cols-1 gap-10 md:grid-cols-12">
      {/* LEFT LIST */}
      <aside className="md:col-span-3">
        <div className="relative">
          {/* fades arriba/abajo */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-black to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-black to-transparent" />

          <div
            ref={listRef}
            className={[
              "pc-scroll max-h-[520px] overflow-y-auto overflow-x-visible",
              "pr-3 pl-1 scroll-smooth",
            ].join(" ")}
          >
            {/* padding grande para que el centro pueda quedar centrado */}
            <div className="space-y-3 py-16">
              {extended.map((p, extIndex) => {
                const isActive = p.id === activeProjectId;

                return (
                  <button
                    key={`${p.id}-${extIndex}`}
                    ref={(node) => {
                      itemRefs.current[extIndex] = node;
                    }}
                    onClick={() => handleProjectChange(p.id)}
                    className={[
                      "w-full rounded-2xl p-2 text-left transition",
                      "focus:outline-none",
                      "mx-1", // 👈 evita que se corte el ring/outline
                      "border border-white/10 bg-black/30 hover:bg-black/40",
                      isActive
                        ? "ring-2 ring-pc-green bg-black/45"
                        : "opacity-70 hover:opacity-100 hover:border-white/20",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10">
                        <Image
                          src={p.leftThumbSrc}
                          alt={p.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                          priority={isActive}
                        />
                      </div>

                      <div className="min-w-0">
                        <div
                          className={[
                            "truncate text-sm",
                            isActive ? "text-pc-green" : "text-white/80",
                          ].join(" ")}
                        >
                          {p.name}
                        </div>

                        {p.role ? (
                          <div className="truncate text-xs text-white/50">
                            {p.role}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT VIEWER */}
      <section className="md:col-span-9">
        {/* Header arriba del viewer */}
        <div className="mb-4 flex items-end justify-between gap-6">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold tracking-wide text-white/90">
              {activeProject.name}
            </h2>
          </div>

          <div className="shrink-0 text-right">
            <span className="text-xs font-semibold tracking-[0.18em] text-white/50">
              {("date" in activeProject && (activeProject as any).date) || "JUNIO 2025"}
            </span>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
          <div className="relative h-full w-full">
            <Image
              key={`${activeProject.id}-${activeCamera.id}`}
              src={activeCamera.imageSrc}
              alt={`${activeProject.name} - ${activeCamera.label}`}
              fill
              className="object-cover animate-[fadeIn_.18s_ease-out]"
              sizes="(max-width: 768px) 100vw, 75vw"
              priority
            />
          </div>
        </div>

        {/* Camera tabs (hover cambia cámara) */}
        <div className="mt-6 flex flex-wrap gap-3">
          {activeProject.cameras.map((c) => {
            const isActive = c.id === activeCamera.id;

            return (
              <button
                key={c.id}
                onMouseEnter={() => setActiveCameraId(c.id)}
                onClick={() => setActiveCameraId(c.id)} // mobile fallback
                className={[
                  "rounded-full border px-4 py-2 text-sm transition",
                  isActive
                    ? "border-pc-green text-pc-green"
                    : "border-white/20 text-white/60 hover:text-white",
                ].join(" ")}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}