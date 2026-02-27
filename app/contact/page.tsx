import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70">
            Proyectos • Presupuestos • Colaboraciones
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Contacto{" "}
            <span className="text-pc-green">
              Pedro
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-12 h-px w-full max-w-6xl bg-pc-green/20" />

        {/* Content */}
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start">
          {/* LEFT: info */}
          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-[0.22em] text-white/60">
                    CONTACTO
                  </div>

                  <a
                    className="mt-4 block break-words text-lg font-medium text-white/85 hover:text-white"
                    href="mailto:pedro@correo.com"
                  >
                    pedro@correo.com
                  </a>

                  <div className="mt-6 text-sm text-white/55">
                    Ciudad Autónoma de Buenos Aires, Argentina
                  </div>
                </div>

                {/* logo pequeño */}
                <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <Image
                    src="/pedro.jpg"
                    alt="Pedro"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-white/10" />

              <div className="mt-8">
                <div className="text-xs font-semibold tracking-[0.22em] text-white/60">
                  REDES
                </div>

                <div className="mt-5 grid gap-3 text-sm">
                  <a
                    className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/70 hover:border-pc-green/60 hover:text-white transition"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Instagram</span>
                    <span className="text-white/30 group-hover:text-pc-green transition">↗</span>
                  </a>

                  <a
                    className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/70 hover:border-pc-green/60 hover:text-white transition"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LinkedIn</span>
                    <span className="text-white/30 group-hover:text-pc-green transition">↗</span>
                  </a>

                  <a
                    className="group inline-flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white/70 hover:border-pc-green/60 hover:text-white transition"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>IMDb</span>
                    <span className="text-white/30 group-hover:text-pc-green transition">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* mini note */}
            <p className="mt-6 text-xs text-white/40">
              Tip: si es para contenido vertical, mandame el objetivo (alcance / conversión / comunidad) y el
              formato final (Reels/TikTok/Shorts).
            </p>
          </aside>

          {/* RIGHT: form UI */}
          <section className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold tracking-[0.22em] text-white/60">
                    MENSAJE
                  </div>
                </div>

                <span className="hidden rounded-full border border-pc-green/30 bg-pc-green/10 px-3 py-1 text-[11px] font-medium text-pc-green md:inline">
                  Respuesta personalizada
                </span>
              </div>

              <form className="mt-8 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-pc-green/60"
                    placeholder="Nombre"
                  />
                  <input
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-pc-green/60"
                    placeholder="Email"
                  />
                </div>

                <input
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-pc-green/60"
                  placeholder="¿De qué trata el proyecto? (1 línea)"
                />

                <textarea
                  className="h-32 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-pc-green/60"
                  placeholder="Contame contexto, entregables, plazos y referencias."
                />

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="
                      inline-flex items-center justify-center rounded-xl
                      border border-pc-green/40 bg-pc-green/15
                      px-6 py-3 text-sm font-semibold text-white
                      hover:border-pc-green hover:bg-pc-green/20
                      transition
                    "
                  >
                    Enviar
                  </button>

                  <p className="text-xs text-white/40">
                    También podés escribir directo a{" "}
                    <a className="text-white/60 hover:text-white" href="mailto:pedro@correo.com">
                      pedro@correo.com
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* subtle divider */}
            <div className="mt-10 h-px w-full bg-pc-green/20" />
          </section>
        </div>
      </section>
    </main>
  );
}