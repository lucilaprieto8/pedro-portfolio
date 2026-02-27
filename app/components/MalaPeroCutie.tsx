"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  value: string; // ej "+57", "+500K", "+250M"
  label: string;
};

function parseValue(raw: string) {
  // "+250M" -> { num: 250, suffix: "M" }
  // "+500K" -> { num: 500, suffix: "K" }
  // "+57"   -> { num: 57,  suffix: ""  }
  const cleaned = raw.replace(/\+/g, "").trim();
  const suffix = cleaned.endsWith("M") ? "M" : cleaned.endsWith("K") ? "K" : "";
  const numStr = suffix ? cleaned.slice(0, -1) : cleaned;
  const num = Number(numStr);
  return { num: isNaN(num) ? 0 : num, suffix };
}

function formatValue(n: number, suffix: string) {
  const rounded = Math.round(n);
  return `+${rounded}${suffix}`;
}
  
export function MalaPeroCutieSection() {
  const stats: Stat[] = useMemo(
    () => [
      { value: "+57", label: "COBERTURAS EN VIVO" },
      { value: "+423", label: "CONTENIDOS\nREALIZADOS" },
      { value: "+500K", label: "FOLLOWERS" },
      { value: "+250M", label: "REPRODUCCIONES" },
    ],
    []
  );

  // valores objetivos parseados
  const targets = useMemo(
    () => stats.map((s) => parseValue(s.value)),
    [stats]
  );

  // display values (string) para render
  const [display, setDisplay] = useState<string[]>(
    stats.map(() => "+0")
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const start = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const duration = 1100; // ms
      const startTime = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        // easing suave
        const eased = 1 - Math.pow(1 - t, 3);

        setDisplay(
          targets.map(({ num, suffix }) => formatValue(num * eased, suffix))
        );

        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) start();
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [targets]);

  return (
    <section
      ref={sectionRef}
      data-nav="Mala Pero Cutie"
      className="mx-auto max-w-6xl px-6 py-24"
    >
       {/* Título */}
      <div className="md:col-span-12">
      <h2 className="mb-10 text-center text-4xl font-bold tracking-wide text-pc-green md:text-5xl">
        MALA PERO CUTIE      
      </h2>
      </div>
      
      <div className="grid gap-10 md:grid-cols-12">
        {/* LEFT */}
        <div className="md:col-span-7">
          {/* Card verde */}
          <div className="rounded-3xl p-8 md:p-10">
              <p className="text-lg leading-snug text-white/95 md:text-xl">
                Primer medio digital exclusivo de una artista argentina, <br />
                creado para documentar y comunicar el MP3 Tour de Emilia Mernes.
              </p>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="w-full max-w-[640px]">
              <div className="grid grid-cols-2 gap-x-12 gap-y-14">
                {stats.map((s, idx) => (
                  <div key={s.label} className="text-center md:text-left">
                    <div className="text-5xl font-extrabold tracking-tight text-pc-green md:text-6xl">
                      {display[idx]}
                    </div>

                    <div className="mt-3 whitespace-pre-line text-base font-semibold tracking-wide text-white">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:flex md:justify-end md:items-center">
          <div className="w-full max-w-[340px] overflow-hidden rounded-[34px] border border-white/10 bg-black">
            <div className="aspect-[9/16] w-full">
              <video
                className="h-full w-full object-cover"
                src="/projects/mpc/cuties.mp4"
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
    </section>
  );
}