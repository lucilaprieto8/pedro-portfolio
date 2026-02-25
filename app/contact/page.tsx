export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <h1 className="text-4xl font-bold tracking-tight text-pc-green">Contacto</h1>
      <p className="mt-3 max-w-2xl text-white/60">
        Para proyectos, presupuestos o colaboraciones.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <div className="text-sm font-semibold tracking-wide text-white/85">
            Email
          </div>
          <a
            className="mt-3 block text-white/70 hover:text-white"
            href="mailto:pedro@correo.com"
          >
            pedro@correo.com
          </a>

          <div className="mt-8 text-sm font-semibold tracking-wide text-white/85">
            Redes
          </div>
          <div className="mt-3 space-y-2 text-sm">
            <a className="block text-white/70 hover:text-white" href="#" target="_blank">
              Instagram
            </a>
            <a className="block text-white/70 hover:text-white" href="#" target="_blank">
              YouTube
            </a>
            <a className="block text-white/70 hover:text-white" href="#" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <div className="text-sm font-semibold tracking-wide text-white/85">
            Mensaje rápido
          </div>
          <p className="mt-3 text-sm text-white/60">
            (Opcional) Si después querés, lo conectamos a Formspree/Resend. Por ahora
            dejalo como UI.
          </p>

          <form className="mt-6 space-y-3">
            <input
              className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30"
              placeholder="Nombre"
            />
            <input
              className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30"
              placeholder="Email"
            />
            <textarea
              className="h-28 w-full resize-none rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30"
              placeholder="Mensaje"
            />
            <button
              type="button"
              className="rounded bg-[#2b73ff] px-6 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}