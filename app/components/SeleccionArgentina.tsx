"use client";

import { useMemo, useState } from "react";

type VerticalItem = {
  id: string;
  title: string;
  year: string;
  src: string;
};

export function SeleccionArgentinaSection() {
  const verticals: VerticalItem[] = useMemo(
    () => [
      {
        id: "afa-play",
        title: "AFA PLAY",
        year: "2021",
        src: "/projects/argentina/AFAPlay.mp4",
      },
      {
        id: "copa-2021",
        title: "COPA AMÉRICA 2021",
        year: "2021",
        src: "/projects/argentina/AFAPlay.mp4",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const active = verticals[index];

  const prev = () => setIndex((i) => (i - 1 + verticals.length) % verticals.length);
  const next = () => setIndex((i) => (i + 1) % verticals.length);

  return (
    <section data-nav="Selección Argentina" className="mx-auto max-w-6xl px-6 py-24">

      {/* Título */}
      <h2 className="mb-10 text-center text-4xl font-bold tracking-wide text-pc-green md:text-5xl">
        SELECCIÓN ARGENTINA      
      </h2>

      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        {/* LEFT: horizontal video (70%) */}
        <div className="md:col-span-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="aspect-video w-full">
              <video
                className="h-full w-full object-cover"
                src="/projects/argentina/recibimiento.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="text-lg font-semibold text-white/90">
              HOMENAJE A LOS CAMPEONES EN EL MONUMENTAL
            </div>
            <div className="mt-2 text-sm text-white/55">
              Producción audiovisual para AFA. Video mostrado a los Campeones del Mundo en el Estadio Monumental.
            </div>
          </div>
        </div>

        {/* RIGHT: vertical carousel (30%) */}
        <div className="md:col-span-4">
          <div className="relative mx-auto w-full max-w-[340px]">
            {/* Vertical video */}
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-black">
              <div className="aspect-[9/16] w-full">
                <video
                  key={active.id}
                  className="h-full w-full object-cover"
                  src={active.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
              </div>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-[-54px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-black/60 text-white hover:border-pc-green hover:text-white md:flex"
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-[-54px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-black/60 text-white hover:border-pc-green hover:text-white md:flex"
              aria-label="Next"
            >
              ›
            </button>

            {/* Text below (estilo Disney) */}
            <div className="mt-8 text-center">
              <div className="text-lg font-semibold tracking-wide text-pc-green">
                {active.title}
              </div>
              <div className="mt-3 text-2xl font-semibold text-pc-green">
                {active.year}
              </div>

              {/* Mobile arrows */}
              <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
                <button
                  type="button"
                  onClick={prev}
                  className="h-10 w-10 rounded-full border border-white/15 bg-black/60 text-white/80 hover:border-pc-green hover:text-white"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="h-10 w-10 rounded-full border border-white/15 bg-black/60 text-white/80 hover:border-pc-green hover:text-white"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* mini-indicators (opcional, lindo) */}
          <div className="mt-6 flex justify-center gap-2">
            {verticals.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setIndex(i)}
                className={[
                  "h-2 w-2 rounded-full transition",
                  i === index ? "bg-pc-green" : "bg-white/20 hover:bg-white/35",
                ].join(" ")}
                aria-label={`Go to ${v.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 h-px w-full bg-pc-green/20" />
    </section>
  );
}