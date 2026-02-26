"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [activeLabel, setActiveLabel] = useState<string>("");
  const [animKey, setAnimKey] = useState<number>(0);
  const lastLabelRef = useRef<string>("");

  useEffect(() => {
    // Si NO estamos en home: limpiamos y salimos (sin listeners)
    if (!isHome) {
      lastLabelRef.current = "";
      setActiveLabel("");
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]")
    );

    if (!sections.length) {
      lastLabelRef.current = "";
      setActiveLabel("");
      return;
    }

    const setLabel = (next: string) => {
      if (!next) return;
      if (lastLabelRef.current !== next) {
        lastLabelRef.current = next;
        setActiveLabel(next);
        setAnimKey((k) => k + 1);
      }
    };

    // punto guía: 30% del viewport desde arriba
    const getActiveSection = () => {
      const anchorY = window.innerHeight * 0.3;

      let bestEl: HTMLElement | null = null;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

        const dist = Math.abs(rect.top - anchorY);
        if (dist < bestDist) {
          bestDist = dist;
          bestEl = el;
        }
      }

      return bestEl ?? sections[0];
    };

    // set inicial
    setLabel(getActiveSection().dataset.nav ?? "");

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const active = getActiveSection();
        setLabel(active.dataset.nav ?? "");
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* LEFT: logo + active section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/pedro.jpg"
              alt="Pedro"
              width={22}
              height={22}
              className="opacity-90"
              priority
            />
          </Link>

          {/* SOLO HOME */}
          {isHome && activeLabel ? (
            <span
              key={animKey}
              className="inline-flex items-center gap-2 text-sm text-white/80"
              style={{ animation: "fadeRight 260ms ease-out both" }}
            >
              <span className="text-white/30">|</span>
              <span className="font-medium">{activeLabel}</span>
            </span>
          ) : null}
        </div>

        {/* RIGHT: links */}
        <div className="flex items-center gap-6 text-sm font-medium text-white/70">
          <Link href={isHome ? "/#projects" : "/#projects"} className="hover:text-white">
            Projects
          </Link>

          <Link href="/press-media" className="hover:text-white">
            Press & Media
          </Link>

          <Link href="/about" className="hover:text-white">
            About me
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}