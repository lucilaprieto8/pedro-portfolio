"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { pressMedia } from "../data/pressMedia";

export default function PressMediaPage() {
  const items = useMemo(() => pressMedia, []);
  const [index, setIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToIndex = (i: number) => {
    const el = cardRefs.current[i];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setIndex(i);
  };

  const prev = () => scrollToIndex((index - 1 + items.length) % items.length);
  const next = () => scrollToIndex((index + 1) % items.length);

  // Sync index while user scrolls
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const centerX = track.scrollLeft + track.clientWidth / 2;

        let best = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const dist = Math.abs(cardCenter - centerX);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });

        setIndex(best);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
  <main className="min-h-screen bg-black text-white">
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold tracking-wide text-pc-green md:text-5xl">
        PRESS & MEDIA
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/55">
        Notas, menciones y apariciones en medios.
      </p>

      {/* Carousel */}
      <div className="relative mt-12">
        {/* Side gradients (NO content inside) */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black via-black/80 to-transparent" />

        {/* Desktop arrows (above gradients) */}
        <button
          type="button"
          onClick={prev}
          className="hidden md:flex absolute left-2 top-1/2 z-20 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full border border-white/15 bg-black/60 text-white/80 hover:text-white hover:border-pc-green"
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          className="hidden md:flex absolute right-2 top-1/2 z-20 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full border border-white/15 bg-black/60 text-white/80 hover:text-white hover:border-pc-green"
          aria-label="Next"
        >
          ›
        </button>

        <div
          ref={trackRef}
          className="
            press-track
            flex gap-6 overflow-x-auto pb-2
            scroll-smooth
            snap-x snap-mandatory
            [scrollbar-width:none]
          "
          style={{ msOverflowStyle: "none" as any }}
        >
          {/* hide scrollbar webkit */}
          <style>{`
            .press-track::-webkit-scrollbar { display: none; }
          `}</style>

          {items.map((item, i) => (
            <div
              key={item.slug}
              data-card={i}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              className="
                snap-center
                min-w-[88%] sm:min-w-[70%] md:min-w-[52%]
                overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]
                transition hover:border-pc-green
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={item.coverSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 55vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70 backdrop-blur">
                  {item.source ?? "PRESS"}
                  {item.date ? (
                    <span className="ml-2 text-white/35">• {item.date}</span>
                  ) : null}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-center text-xl font-semibold tracking-wide text-pc-green">
                  {item.title}
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/70">
                  {item.excerpt ?? item.body ?? ""}
                </p>

                <div className="mt-6 flex justify-center">
                  {item.url ? (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-pc-green/30 bg-pc-green/10 px-5 py-2 text-sm font-medium text-pc-green transition hover:border-pc-green hover:bg-pc-green/15"
                    >
                      Leer más
                    </Link>
                  ) : (
                    <span className="text-sm text-white/40">
                      Sin link disponible
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {items.map((it, i) => (
            <button
              key={it.slug}
              onClick={() => scrollToIndex(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                i === index
                  ? "bg-pc-green scale-125"
                  : "bg-white/25 hover:bg-white/40",
              ].join(" ")}
              aria-label={`Go to ${it.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  </main>
);
}