"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type DisneyItem = {
  id: string;
  title: string;
  role: string;
  year: string;
  reelSrc: string;   // video vertical
  posterSrc: string; // poster
};

export function DisneySection() {
  const items: DisneyItem[] = useMemo(
    () => [
      {
        id: "muchachos",
        title: "MUCHACHOS, LA PELICULA",
        role: "VERTICAL CONTENT",
        year: "2023",
        reelSrc: "/projects/disney/muchachos.mp4",
        posterSrc: "/projects/disney/muchachos.jpg",
      },
      {
        id: "homo",
        title: "HOMO ARGENTUM",
        role: "VERTICAL CONTENT",
        year: "2025",
        reelSrc: "/projects/disney/homo.mp4",
        posterSrc: "/projects/disney/homo.jpg",
      },
      {
        id: "coppola",
        title: "COPPOLA, LA SERIE",
        role: "VERTICAL CONTENT",
        year: "2025",
        reelSrc: "/projects/disney/coppola.mp4",
        posterSrc: "/projects/disney/coppola.avif",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const active = items[index];

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section data-nav="Disney" className="mx-auto max-w-6xl px-6 py-24">

      {/* Título */}
      <h2 className="mb-10 text-center text-4xl font-bold tracking-wide text-pc-green md:text-5xl">
        DISNEY: CONTENIDOS DIGITALES
      </h2>

      <div className="grid items-center gap-10 md:grid-cols-12">
        {/* LEFT: vertical reel */}
<div className="md:col-span-5">
  <div className="mx-auto w-full max-w-[360px]">
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-black">
      
      {/* ROLE OVERLAY */}
      <div className="absolute left-4 top-4 z-10">
        <div className="rounded-full border border-white/15 bg-black/70 px-4 py-2 backdrop-blur-md">
          <div className="text-[11px] tracking-[0.25em] text-white/60">
            {active.role}
          </div>
        </div>
      </div>

      <div className="aspect-[9/16] w-full">
        <video
          key={active.id}
          className="h-full w-full object-cover"
          src={active.reelSrc}
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
    </div>
  </div>
</div>

        {/* RIGHT: poster + arrows + text */}
        <div className="md:col-span-7">
          <div className="relative mx-auto w-full max-w-[420px]">
            {/* Poster */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <div className="relative aspect-[2/3] w-full">
                <Image
                  key={active.posterSrc}
                  src={active.posterSrc}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority
                />
              </div>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-[-52px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 hover:border-pc-green hover:text-white md:flex"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-[-52px] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 hover:border-pc-green hover:text-white md:flex"
              aria-label="Next"
            >
              ›
            </button>

            {/* Text below */}
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
        </div>
      </div>
    </section>
  );
}