"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

type Props = {
  projects: string[];
};

export function HeaderHero({ projects }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // 3 ciclos para loop suave
  const items = useMemo(() => [...projects, ...projects, ...projects], [projects]);

useEffect(() => {
  const el = trackRef.current;
  if (!el) return;

  let raf = 0;
  let last = performance.now();

  const speed = 55; // px/seg
  let third = 0;

  const compute = () => {
    third = el.scrollWidth / 3;
    // si todavía no hay ancho suficiente, no hacemos nada
    if (!third || third < 50) return;
    // asegurarnos de arrancar en el medio
    if (el.scrollLeft < third || el.scrollLeft > third * 2) {
      el.scrollLeft = third;
    }
  };

  const tick = (now: number) => {
    const dt = (now - last) / 1000;
    last = now;

    if (third && third >= 50) {
      el.scrollLeft += speed * dt;

      // mantenernos en el ciclo del medio
      if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
      if (el.scrollLeft < third) el.scrollLeft += third;
    }

    raf = requestAnimationFrame(tick);
  };

  const start = () => {
    cancelAnimationFrame(raf);
    last = performance.now();
    compute();
    raf = requestAnimationFrame(tick);
  };

  // 1) arrancar cuando el layout esté listo
  const t = window.setTimeout(start, 0);

  // 2) recalcular si cambia el viewport
  const onResize = () => start();
  window.addEventListener("resize", onResize);

  // 3) reanudar si el browser pausó animaciones (cambio de tab)
  const onVisibility = () => {
    if (document.visibilityState === "visible") start();
  };
  document.addEventListener("visibilitychange", onVisibility);

  // opcional: bloquear “scroll manual” que te lo puede frenar si arrastrás
  const stopUserScroll = (e: WheelEvent) => e.preventDefault();
  el.addEventListener("wheel", stopUserScroll, { passive: false });

  return () => {
    window.clearTimeout(t);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("visibilitychange", onVisibility);
    el.removeEventListener("wheel", stopUserScroll as any);
    cancelAnimationFrame(raf);
  };
}, []);

  return (
<header data-nav="Projects" className="relative">
        {/* HERO VIDEO */}
      <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/videos/yatra/ejemplo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* PROJECTS title */}
      <div className="w-full px-6 py-0">
        <div className="py-10">
          <h1 className="text-center text-6xl font-black tracking-tight text-pc-green md:text-7xl">
            PEDRO COLMEIRO
          </h1>
          <p className="text-xs py-5 tracking-[0.25em] text-white/70 text-center">
          PRODUCTOR AUDIOVISUAL
          </p>

        </div>
        </div>

      {/* Infinite ticker full width */}
      <div className="relative w-full border-y border-white/10 bg-black/60">
        <div
          ref={trackRef}
          className="no-scrollbar flex w-full gap-6 overflow-x-auto px-6 py-0"
          style={{ msOverflowStyle: "none" as any }}
        >
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-6 whitespace-nowrap text-sm font-semibold tracking-wide text-white/85"
            >
              {/* item */}
              <span>{name}</span>

              {/* logo como separador */}
              <span className="inline-flex h-12 w-12 items-center justify-center">
                <Image
                  src="/pedro.jpg" // corregí el path (cambialo si tu archivo tiene otro nombre)
                  alt="Pedro icon"
                  width={16}
                  height={16}
                  className="opacity-90"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}