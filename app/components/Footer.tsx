import Image from "next/image";

type FooterProps = {
  name: string;
  role?: string;
  email: string;
  location?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  imdbUrl?: string;
};

export default function Footer({
  name,
  role,
  email,
  location = "Ciudad Autónoma de Buenos Aires, Argentina",
  instagramUrl,
  linkedinUrl,
  imdbUrl,
}: FooterProps) {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* LEFT */}
          <div className="md:col-span-5">
            <div className="flex items-start gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
                <Image
                  src="/pedro.jpg"
                  alt="Pedro logo"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="space-y-1">
                <div className="text-base font-semibold text-white">{name}</div>
                {role ? <div className="text-sm text-white/70">{role}</div> : null}
                <a className="text-sm text-white/70 hover:text-pc-green" href={`mailto:${email}`}>
                  {email}
                </a>
                <div className="text-sm text-white/55">{location}</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-7 md:flex md:justify-end">
            <div className="min-w-[220px]">
              <div className="text-xs tracking-[0.22em] text-pc-green">SOCIAL</div>
              <div className="mt-4 space-y-3 text-sm">
                {instagramUrl ? (
                  <a className="block text-white/70 hover:text-pc-green" href={instagramUrl} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                ) : null}
                {linkedinUrl ? (
                  <a className="block text-white/70 hover:text-pc-green" href={linkedinUrl} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                ) : null}
                {imdbUrl ? (
                  <a className="block text-white/70 hover:text-pc-green" href={imdbUrl} target="_blank" rel="noreferrer">
                    IMDb
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* divider verde sutil */}
        <div className="mt-10 h-px w-full bg-pc-green/25" />

        <div className="mt-6 text-xs text-white/45">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}