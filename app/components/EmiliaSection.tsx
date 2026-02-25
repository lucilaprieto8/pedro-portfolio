"use client";

export function EmiliaSection() {
  return (
    <section data-nav="Emilia Mernes" className="mx-auto max-w-6xl px-6 py-24">
      {/* Título */}
      <h2 className="mb-10 text-center text-4xl font-bold tracking-wide text-pc-green md:text-5xl">
        EMILIA: EL DOCUMENTAL
      </h2>

      {/* Video */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 aspect-video">
        <video
          className="h-full w-full object-cover"
          src="/videos/emilia/loquenoseve.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>

      {/* Créditos */}
      <div className="mt-6 border-t border-white/10 pt-6 text-center">
        <p className="text-xs tracking-[0.25em] text-white/50">
          PRODUCCIÓN · DIRECCIÓN · EDICIÓN
        </p>
      </div>
    </section>
  );
}