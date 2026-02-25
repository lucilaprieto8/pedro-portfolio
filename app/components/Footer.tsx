import Link from "next/link";

type FooterProps = {
  name?: string;
  role?: string;
  email?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
};

export function Footer({
  name = "Peter",
  role = "Director / Editor",
  email = "peter@email.com",
  instagramUrl = "#",
  youtubeUrl = "#",
  linkedinUrl = "#",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-{[#1e3b1a]}">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-6">
            <div className="text-sm font-semibold tracking-[0.18em] text-white/60">
              {name.toUpperCase()}
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight text-white/90">
              {role}
            </div>

            <div className="mt-6 text-sm text-white/70">
              <a className="hover:text-white" href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            <div className="mt-8 h-px w-24 bg-pc-green/40" />
            <div className="mt-6 text-xs tracking-[0.18em] text-white/40">
              © {year} {name}. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-6 md:flex md:justify-end">
            <div className="grid w-full max-w-sm gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
                  SOCIAL
                </div>

                <div className="mt-5 grid gap-3 text-sm text-white/70">
                  <a
                    className="hover:text-white"
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    className="hover:text-white"
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                  <a
                    className="hover:text-white"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}