"use client";

import Image from "next/image";
import { useState } from "react";
import { pressMedia, PressItem } from "../data/pressMedia";
import { PressModal } from "../components/PressModal";

export default function PressMediaPage() {
  const [open, setOpen] = useState<PressItem | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <h1 className="text-4xl font-bold tracking-tight text-pc-green">
        Press & Media
      </h1>
      <p className="mt-3 max-w-2xl text-white/60">
        Apariciones, entrevistas, notas, podcasts y cobertura de medios.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {pressMedia.map((item) => (
          <article key={item.slug} className="text-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={item.coverSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            <h2 className="mt-7 text-4xl font-extrabold tracking-tight">
              {item.title}
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-sm text-white/70">
              {item.excerpt}
            </p>

            <button
              onClick={() => setOpen(item)}
              className="mt-6 rounded bg-[#2b73ff] px-6 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Leer más
            </button>
          </article>
        ))}
      </div>

      {open ? <PressModal item={open} onClose={() => setOpen(null)} /> : null}
    </main>
  );
}