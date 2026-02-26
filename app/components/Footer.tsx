import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        
        {/* Main Row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="relative h-12 w-12">
              <Image
                src="/pedro.jpg"
                alt="Pedro Colmeiro"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-1">
              <div className="text-lg font-semibold">
                Pedro Colmeiro
              </div>

              <div className="text-sm text-white/70">
                pedro@correo.com
              </div>

              <div className="text-sm text-white/50">
                Ciudad Autónoma de Buenos Aires, Argentina
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-left md:text-right">
            <div className="text-xs tracking-[0.25em] text-white/40">
              SOCIAL
            </div>

            <div className="mt-4 flex gap-6 text-sm md:justify-end">
              <a
                href="https://instagram.com/..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-pc-green transition"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com/in/..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-pc-green transition"
              >
                LinkedIn
              </a>

              <a
                href="https://imdb.com/name/..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-pc-green transition"
              >
                IMDb
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-pc-green/40" />

        {/* Bottom */}
        <div className="text-xs text-white/40">
          © {year} Pedro Colmeiro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}