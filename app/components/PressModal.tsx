"use client";

import Image from "next/image";
import { PressItem } from "../data/pressMedia";

export function PressModal({
  item,
  onClose,
}: {
  item: PressItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/7] w-full">
          <Image
            src={item.coverSrc}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-sm text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold tracking-tight">{item.title}</h2>
          <p className="mt-3 text-white/70">{item.excerpt}</p>

          {item.body ? (
            <p className="mt-6 whitespace-pre-line text-white/80">{item.body}</p>
          ) : null}

          <div className="mt-8 flex items-center gap-3">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#2b73ff] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Ver nota
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}