import Image from "next/image";

type CaseItem = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  metric?: string;
};

export default function AboutPage() {
  const cases: CaseItem[] = [
    {
      title: "BIZARRAP",
      subtitle: "Music Sessions — Dirección / Edición",
      description:
        "Dirección y edición dentro del equipo de BZRP Music Sessions, cuidando ritmo, intención narrativa y ejecución técnica. Adaptación y versionado para distintas ventanas (16:9 y 9:16) manteniendo consistencia visual.",
      bullets: [
        "Dirección / Edición",
        "Ritmo y narrativa de performance",
        "Versionado 16:9 + 9:16",
        "Entrega por hitos y piezas para lanzamiento",
      ],
    },
    {
      title: "SHAKIRA || BZRP #53",
      subtitle: "Récords & premios — Dirección / Edición",
      description:
        "Participación como pieza clave en la dirección y edición del video oficial. Producción con impacto global y resultados históricos a nivel audiencia.",
      bullets: [
        "Récord Guinness: tema latino más visto en 24h",
        "Récord Guinness: más rápido en alcanzar 100M",
        "Latin Grammy: Canción del Año + Mejor Canción Pop",
      ],
      metric: "Impacto global / récords Guinness",
    },
    {
      title: "QUEVEDO || BZRP #52",
      subtitle: "Premios — Dirección / Edición",
      description:
        "Dirección y edición del video oficial. Construcción de pieza con identidad propia y timing de lanzamiento que amplificó el alcance orgánico.",
      bullets: ["Latin Grammy: Mejor Canción Urbana", "Dirección / Edición", "Narrativa + performance"],
      metric: "Latin Grammy 2023",
    },
    {
      title: "AFA — SELECCIÓN ARGENTINA",
      subtitle: "Cobertura oficial — Dirección / Post",
      description:
        "Cobertura audiovisual y piezas documentales para AFA Play y redes oficiales. Trabajo en eventos de alta exigencia con foco en emoción, timing y relato.",
      bullets: [
        "Copa América 2019 (viaje con plantel)",
        "Piezas documentales para AFA Play",
        "Spot Monumental (homenaje Campeones del Mundo)",
      ],
    },
    {
      title: "CONVOCATORIA MUNDIAL FEMENINO 2019",
      subtitle: "Viral / prensa — Dirección / Realización",
      description:
        "Video creativo de convocatoria que se viralizó y fue destacado por su impacto y originalidad en medios.",
      bullets: ["Dirección / Realización", "Creatividad aplicada a pieza institucional", "Amplificación en prensa"],
      metric: "Viral + cobertura en medios",
    },
    {
      title: "EMILIA MERNES",
      subtitle: "Documental / shows / vertical — Dirección / Edición",
      description:
        "Cobertura de tour, piezas documentales y dirección de contenidos. Material de backstage, entrevistas y momentos diseñados para sostener narrativa y comunidad.",
      bullets: [
        "Documental “Emilia: Lo que no se ve” (DGO)",
        "Dirección de show (Movistar Arena) para DGO",
        "Dirección de contenidos @malaperocutieok",
      ],
    },
    {
      title: "@MALAPEROCUTIEOK",
      subtitle: "Nuevo modelo de comunicación — Dirección creativa",
      description:
        "Creación y dirección de un canal alternativo oficial centrado en comunidad. Coberturas, lanzamientos y actualidad con lógica vertical-first.",
      bullets: [
        "Dirección creativa y producción vertical",
        "Cobertura de shows + lanzamientos",
        "Consistencia editorial y velocidad de entrega",
      ],
      metric: "+500 contenidos / año",
    },
    {
      title: "SEBASTIÁN YATRA",
      subtitle: "Campaña / contenido — Dirección / Edición",
      description:
        "Dirección audiovisual de contenidos y piezas de campaña. Recaps, entregables por hitos y continuidad estética en múltiples canales.",
      bullets: [
        "Aftermovie Viña del Mar 2025",
        "Lanzamiento disco “Milagro” (video + estrategia)",
        "Dirección de contenidos para @entretantagente",
      ],
    },
    {
      title: "@ENTRETANTAGENTE",
      subtitle: "Cuenta oficial + comunidad — Dirección creativa",
      description:
        "Desarrollo de un canal oficial de comunicación para el artista: nombre, dirección creativa y producción. Integración con show en vivo y activación de comunidad.",
      bullets: [
        "Dirección creativa + producción",
        "Vertical-first / community-driven",
        "Integración al show en vivo",
      ],
      metric: "+200 videos / año",
    },
    {
      title: "DISNEY / STAR DISTRIBUTION LA",
      subtitle: "Campañas verticales — Dirección / Edición",
      description:
        "Dirección de grandes volúmenes de contenidos digitales para campañas de estreno. Piezas pensadas para impacto cultural, conversación y performance.",
      bullets: [
        "Muchachos, la peli (récords de taquilla/preventa)",
        "Homo Argentum (récords de taquilla)",
        "Entrevista a Guillermo Francella (campaña)",
      ],
      metric: "+200 contenidos (campañas)",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO (Apple vibe: limpio, aire, jerarquía fuerte) */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="grid items-center gap-12 md:grid-cols-12">
          {/* FOTO */}
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70">
              Director • Editor • Storytelling • Vertical-first
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Pedro{" "}
              <span className="text-pc-green">
                Colmeiro
              </span>
            </h1>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/70 md:text-base">
              <p>
                Director y editor especializado en contenido musical, documental y formatos verticales.
                Trabajo con artistas, productoras y marcas construyendo piezas que combinan ritmo,
                intención narrativa y ejecución técnica precisa.
              </p>

              <p>
                Desde sesiones íntimas hasta recaps masivos, mi enfoque parte del storytelling:
                entender qué historia estamos contando y cómo debe sentirse.
              </p>

              <p>
                He trabajado con proyectos como Bizarrap, Disney / Star Distribution, Selección Argentina,
                Emilia Mernes y Clank!, desarrollando piezas que priorizan impacto, claridad y estética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl border-t border-white/10" />

      {/* CASOS DE ÉXITO (ACORDEÓN — sin video, más legible, pro) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-[0.22em] text-pc-green">
            CASOS DE ÉXITO
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {cases.map((item) => (
            <details
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur"
            >
              <summary className="cursor-pointer list-none select-none">
                <div className="flex items-center justify-between gap-6 px-6 py-5">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <div className="text-sm font-semibold tracking-widest text-white/85">
                        {item.title}
                      </div>

                      {item.metric ? (
                        <span className="rounded-full border border-pc-green/30 bg-pc-green/10 px-3 py-1 text-[11px] font-medium text-pc-green">
                          {item.metric}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-2 text-xs text-white/55">{item.subtitle}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-white/60 transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </div>
                </div>

                {/* micro line pro (evita doble línea / ruido) */}
                <div className="h-px w-full bg-pc-green/25" />
              </summary>

              <div className="px-6 py-6">
                <p className="max-w-3xl text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>

                <div className="mt-5 grid gap-2 md:grid-cols-2">
                  {item.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70"
                    >
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-pc-green" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FILOSOFÍA (debajo de casos, sobresalida + animación suave) */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div
          className="
            relative overflow-hidden rounded-2xl border border-pc-green/20
            bg-gradient-to-br from-white/[0.05] via-black/30 to-pc-green/10
            p-8 md:p-10
            shadow-[0_0_0_1px_rgba(104,255,165,0.06)]
            animate-[fadeUp_.35s_ease-out]
          "
        >
          {/* glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-pc-green/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-pc-green/10 blur-3xl" />

          <div className="relative">
            <h3 className="text-sm font-semibold tracking-[0.22em] text-pc-green">
              FILOSOFÍA
            </h3>

            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
              Creo que el contenido no compite por calidad técnica sino por claridad emocional.
              Si una pieza no transmite intención en los primeros segundos, ya perdió.
              Mi trabajo es encontrar ese punto exacto entre estética, ritmo y narrativa.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS (más alineado a Pedro, sin inventar cosas hiper específicas) */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold tracking-[0.22em] text-pc-green">
            TIPS
          </h2>

          <p className="mt-4 text-sm text-white/55">
            Recursos y principios que guían mi forma de dirigir, editar y construir comunidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* NARRATIVA */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xs font-semibold tracking-[0.22em] text-white/80">
              NARRATIVA & RITMO
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>› El hook no es un truco: es una promesa clara.</li>
              <li>› Ritmo guiado por emoción (no por efectos).</li>
              <li>› Una idea por pieza. Una sensación por escena.</li>
              <li>› Mostrar | explicar: el “detrás” como historia.</li>
            </ul>
          </div>

          {/* VERTICAL-FIRST */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xs font-semibold tracking-[0.22em] text-white/80">
              VERTICAL-FIRST
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>› Los primeros 2 segundos definen la retención.</li>
              <li>› Texto mínimo, intención máxima.</li>
              <li>› Versionado inteligente sin perder identidad.</li>
              <li>› Comunidad: hablar con la gente, no “a” la gente.</li>
            </ul>
          </div>

          {/* EQUIPO & EJECUCIÓN */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xs font-semibold tracking-[0.22em] text-white/80">
              EQUIPO & EJECUCIÓN
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>› Brief corto + referencia clara = velocidad real.</li>
              <li>› Entregas por hitos (no por “una pieza final”).</li>
              <li>› Consistencia visual antes que “más cosas”.</li>
              <li>› Crecer con otros: construir equipo y proceso.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-pc-green/20" />
      </section>
    </main>
  );
}
