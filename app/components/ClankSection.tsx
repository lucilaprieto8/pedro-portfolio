"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type ClankItem = {
  title: string;
  image: string;
  link: string;
};

export function ClankSection() {
  
  const channelLink = "https://youtube.com/@clank"; // cambiá por el real

  const items: ClankItem[] = useMemo(
    () => [
      {
        title: "Lionel SCALONI con Juan Pablo VARSKY",
        image: "/projects/clank/scaloni.jpg",
        link: channelLink,
      },
      {
        title: "Franco COLAPINTO con Juan Pablo VARSKY",
        image: "/projects/clank/colapinto.jpg",
        link: channelLink,
      },
      {
        title: "Kun AGÜERO con Juan Pablo VARSKY",
        image: "/projects/clank/aguero.jpg",
        link: channelLink,
      },
      {
        title: "Carlos TEVEZ con Juan Pablo VARSKY",
        image: "/projects/clank/tevez.jpg",
        link: channelLink,
      },
      {
        title: "Javier ZANETTI con Juan Pablo VARSKY",
        image: "/projects/clank/zanetti.jpg",
        link: channelLink,
      },
    ],
    [channelLink]
  );

  // Infinite: 3 ciclos
  const extended = useMemo(() => [...items, ...items, ...items], [items]);
  const N = items.length;
  const MID_OFFSET = N;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const cycleWidthRef = useRef<number>(0);
  const isAdjustingRef = useRef(false);
  const isHoveringRef = useRef(false);

  const scrollByOneCard = (dir: "left" | "right" = "right") => {
    const el = trackRef.current;
    if (!el) return;

    // Avanza aprox 1 card (toma el ancho de la card del medio)
    const midCard = cardRefs.current[MID_OFFSET];
    const amount = midCard ? midCard.clientWidth + 24 : Math.round(el.clientWidth * 0.6); // +gap
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  // Medir ciclo + arrancar en el medio
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const t = window.setTimeout(() => {
      const a = cardRefs.current[MID_OFFSET];
      const b = cardRefs.current[MID_OFFSET + N];
      if (a && b) {
        cycleWidthRef.current = b.offsetLeft - a.offsetLeft;
      }

      // arrancar “en el medio”
      if (a) {
        el.scrollLeft = a.offsetLeft - 12; // pequeño ajuste visual
      }
    }, 0);

    return () => window.clearTimeout(t);
  }, [N]);

  // Teletransporte invisible para infinito
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      if (isAdjustingRef.current) return;

      const cycle = cycleWidthRef.current;
      if (!cycle) return;

      const x = el.scrollLeft;

      // en 3 ciclos: [0..cycle) [cycle..2cycle) [2cycle..3cycle)
      // queremos vivir en el medio: [cycle..2cycle)
      const lowerBound = cycle * 0.5;
      const upperBound = cycle * 2.5;

      if (x < lowerBound) {
        isAdjustingRef.current = true;
        el.scrollLeft = x + cycle;
        requestAnimationFrame(() => (isAdjustingRef.current = false));
      } else if (x > upperBound) {
        isAdjustingRef.current = true;
        el.scrollLeft = x - cycle;
        requestAnimationFrame(() => (isAdjustingRef.current = false));
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const realCount = items.length;
  const [activeDot, setActiveDot] = useState(0);

  // Autoplay cada 2s (pausa si estás hover / interactuando)
  useEffect(() => {
    const id = window.setInterval(() => {
      if (isHoveringRef.current) return;
      scrollByOneCard("right");
    }, 2000);

    return () => window.clearInterval(id);
  }, []);


  return (
    
    <section data-nav="Clank!" className="mx-auto max-w-6xl px-6 py-20">
      
      {/* Título */}
      <div className="md:col-span-12">
      <h2 className="mb-10 text-center text-4xl font-bold tracking-wide text-pc-green md:text-5xl">
        CLANK!      
      </h2>
      </div>

      <div className="grid gap-10">
        <div className="md:col-span-4">
            <div className="space-y-4 text-white/70 md:text-left">
              <p>
                Un canal de entrevistas y streaming en vivo donde el público participa, las conversaciones son reales y los invitados tienen voz propia.
                Un espacio de debate, juego e interacción que conecta deporte, cultura y actualidad sin filtro.
              </p>
            </div>
          </div>
        </div>

<div className="md:col-span-8 flex md:items-center p-6">
  <div className="w-full">
    <div className="relative">
      {/* CONTENEDOR BORDE VERDE */}
      <div className="rounded-3xl border border-pc-green bg-black/40 p-4 md:p-6">
        <div
          ref={trackRef}
          onMouseEnter={() => (isHoveringRef.current = true)}
          onMouseLeave={() => (isHoveringRef.current = false)}
          onPointerDown={() => (isHoveringRef.current = true)}
          onPointerUp={() => (isHoveringRef.current = false)}
          onScroll={() => {
            const container = trackRef.current;
            if (!container) return;

            const center = container.scrollLeft + container.clientWidth / 2;

            let bestIndex = 0;
            let bestDist = Infinity;

            cardRefs.current.forEach((el, idx) => {
              if (!el) return;
              const elCenter = el.offsetLeft + el.clientWidth / 2;
              const dist = Math.abs(elCenter - center);
              if (dist < bestDist) {
                bestDist = dist;
                bestIndex = idx;
              }
            });

            const dot = ((bestIndex % realCount) + realCount) % realCount;
            setActiveDot(dot);
          }}
          className="
            flex gap-6 overflow-x-auto pb-2
            scroll-smooth
            snap-x snap-mandatory
            pc-scroll-x
          "
        >
          {extended.map((item, i) => (
            <a
              key={`${item.title}-${i}`}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group snap-start
                min-w-[78%] sm:min-w-[62%] md:min-w-[48%]
                overflow-hidden rounded-2xl border border-white/10
                transition hover:border-pc-green
              "
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 45vw"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-white/80 group-hover:text-white">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* DOTS */}
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: realCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scroll()}
              className={[
                "h-2 w-2 rounded-full transition",
                activeDot === i ? "bg-pc-green" : "bg-white/30",
              ].join(" ")}
              aria-label={`Ir a item ${i + 1}`}
            />
          ))}
        </div>

        <p className="mt-3 text-xs text-white/40 md:hidden">
          Deslizá para ver más →
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}