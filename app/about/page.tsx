import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="grid items-center gap-12 md:grid-cols-12">
          {/* FOTO */}
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/PC.png"
                alt="Pedro Colmeiro"
                width={600}
                height={800}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* BIO */}
          <div className="md:col-span-8">
            <h1 className="text-4xl font-bold tracking-tight text-pc-green">
              PEDRO COLMEIRO
            </h1>

            <div className="mt-6 space-y-4 text-white/75 leading-relaxed">
              <p>
                Director y editor especializado en contenido musical,
                documental y formatos verticales. Trabajo junto a artistas,
                productoras y marcas construyendo piezas que combinan
                ritmo, intención narrativa y ejecución técnica precisa.
              </p>

              <p>
                Desde sesiones íntimas hasta recaps masivos, mi enfoque
                siempre parte del storytelling: entender qué historia
                estamos contando y cómo debe sentirse.
              </p>

              <p>
                He trabajado con proyectos como Bizarrap, Disney,
                Selección Argentina, Emilia Mernes y Clank!,
                desarrollando piezas que priorizan impacto, claridad
                y estética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl border-t border-white/10" />

      {/* CASOS DE ÉXITO (ACORDEÓN) */}
<section className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="text-center text-xl tracking-wider text-pc-green">
    CASOS DE ÉXITO
  </h2>

  <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/60">
    Proyectos destacados. Expandí cada caso para ver contexto, rol y piezas.
  </p>

  <div className="mt-12 space-y-4">
    {[
      {
        title: "BIZARRAP",
        subtitle: "Music Sessions — Dirección / Edición",
        gradient: "from-cyan-500 to-blue-700",
        description:
          "Dirección y edición de contenido para sesiones musicales: narrativa, ritmo, armado de piezas y versiones para distintas ventanas.",
        highlights: ["Dirección / Edición", "Formato: 16:9 + 9:16", "Versionado & recortes"],
        media: {
          // podés dejar uno solo si querés
          videoSrc: "/cases/bizarrap/bizarrap-reel.mp4",
          posterSrc: "/cases/bizarrap/poster.jpg",
          extraImageSrc: "/cases/bizarrap/extra.jpg",
        },
      },
      {
        title: "CLANK!",
        subtitle: "Streaming / entrevistas — Dirección / Post",
        gradient: "from-pink-500 to-purple-700",
        description:
          "Producción y post para entrevistas y formatos de streaming: recortes, momentos, piezas para redes y consistencia visual.",
        highlights: ["Recaps", "Clips para redes", "Look & ritmo"],
        media: {
          videoSrc: "/cases/clank/clank-recap.mp4",
          posterSrc: "/cases/clank/poster.jpg",
        },
      },
      {
        title: "SEBASTIÁN YATRA",
        subtitle: "Contenido de campaña — Dirección / Edición",
        gradient: "from-indigo-500 to-blue-500",
        description:
          "Piezas de campaña, recaps y entregables para distintos canales. Enfoque en hook + continuidad estética.",
        highlights: ["Campaña", "9:16 / 16:9", "Entrega por hitos"],
        media: {
          videoSrc: "/cases/yatra/yatra-recap.mp4",
          posterSrc: "/cases/yatra/poster.jpg",
        },
      },
      {
        title: "EMILIA MERNES",
        subtitle: "Documental / cobertura — Dirección / Edición",
        gradient: "from-fuchsia-500 to-pink-500",
        description:
          "Cobertura y piezas documentales para el tour: narrativa, backstage, entrevistas y armado de momentos.",
        highlights: ["Cobertura en vivo", "Storytelling", "Edición documental"],
        media: {
          videoSrc: "/cases/emilia/emilia-doc.mp4",
          posterSrc: "/cases/emilia/poster.jpg",
        },
      },
      {
        title: "DISNEY",
        subtitle: "Contenidos verticales — Dirección / Edición",
        gradient: "from-blue-600 to-sky-400",
        description:
          "Producción de contenidos verticales para títulos de Disney: versiones, ritmo, ganchos y consistencia editorial.",
        highlights: ["Vertical-first", "Entrega por paquete", "Clips + recaps"],
        media: {
          videoSrc: "/cases/disney/disney-vertical.mp4",
          posterSrc: "/cases/disney/poster.jpg",
        },
      },
      {
        title: "SELECCIÓN ARGENTINA",
        subtitle: "Cobertura / piezas oficiales — Dirección / Post",
        gradient: "from-slate-400 to-gray-200",
        description:
          "Contenido institucional y cobertura: piezas de alto impacto, timing de publicación y narrativa de evento.",
        highlights: ["Eventos", "Recaps", "Contenido oficial"],
        media: {
          videoSrc: "/cases/afa/afa-highlight.mp4",
          posterSrc: "/cases/afa/poster.jpg",
        },
        invertText: true, // porque el gradiente es claro
      },
    ].map((item) => (
      <details
        key={item.title}
        className="group overflow-hidden rounded-xl border border-white/10 bg-black/40"
      >
        {/* Header del acordeón */}
        <summary className="cursor-pointer list-none select-none">
          <div
            className={"flex items-center justify-between gap-6 px-6 py-5"}>
            <div className="min-w-0">
              <div
                className={`text-sm font-semibold tracking-widest ${
                  item.invertText ? "text-black/80" : "text-white/85"
                }`}
              >
                {item.title}
              </div>
              <div
                className={`mt-2 text-xs ${
                  item.invertText ? "text-black/70" : "text-white/55"
                }`}
              >
                {item.subtitle}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden text-xs text-white/50 md:inline">
                Ver más
              </span>
              <span className="text-white/60 transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </div>
          </div>

          {/* barra visual estilo “caso de éxito” */}
          <div
            className={`h-14 w-full bg-gradient-to-r ${item.gradient}`}
          />
        </summary>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="max-w-3xl text-sm leading-relaxed text-white/70">
            {item.description}
          </p>

          {/* Highlights */}
          <div className="mt-5 flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70"
              >
                {h}
              </span>
            ))}
          </div>

          {/* Media */}
          {(item.media?.videoSrc || item.media?.extraImageSrc) && (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Video */}
              {item.media?.videoSrc ? (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                  <video
                    className="h-full w-full object-cover"
                    src={item.media.videoSrc}
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.media.posterSrc}
                  />
                </div>
              ) : null}

              {/* Imagen extra opcional */}
              {item.media?.extraImageSrc ? (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.media.extraImageSrc}
                    alt={`${item.title} extra`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-sm text-white/60">
                  Si querés, acá puede ir otra pieza: una imagen, un embed o un link.
                </div>
              )}
            </div>
          )}
        </div>
      </details>
    ))}
  </div>
</section>

      {/* TIPS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center text-2xl font-semibold tracking-wide text-pc-green">
          TIPS
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/60">
          Recursos que influyen en mi forma de editar, dirigir y pensar proyectos.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* LIBROS */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-sm font-semibold tracking-widest text-white/80">
              LIBROS
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>› In the Blink of an Eye — Walter Murch</li>
              <li>› Story — Robert McKee</li>
              <li>› The War of Art — Steven Pressfield</li>
              <li>› Steal Like an Artist — Austin Kleon</li>
            </ul>
          </div>

          {/* PODCASTS */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-sm font-semibold tracking-widest text-white/80">
              PODCASTS / CONTENIDO
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>› Team Deakins</li>
              <li>› The Cutting Room</li>
              <li>› Every Frame a Painting</li>
              <li>› Indie Film Hustle</li>
            </ul>
          </div>

          {/* WORKFLOW */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-sm font-semibold tracking-widest text-white/80">
              WORKFLOW
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>› Brief claro antes de editar</li>
              <li>› Hook en los primeros 2 segundos</li>
              <li>› Ritmo guiado por emoción</li>
              <li>› Versionado inteligente para redes</li>
            </ul>
          </div>
        </div>

        {/* BLOQUE EXTRA MÁS PERSONAL */}
        <div className="mt-16 rounded-xl border border-white/10 bg-black/40 p-8 text-center">
          <h3 className="text-sm font-semibold tracking-widest text-white/80">
            FILOSOFÍA
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-sm leading-relaxed text-white/70">
            Creo que el contenido no compite por calidad técnica sino por
            claridad emocional. Si una pieza no transmite intención en
            los primeros segundos, ya perdió. Mi trabajo es encontrar
            ese punto exacto entre estética, ritmo y narrativa.
          </p>
        </div>
      </section>
    </main>
  );
}