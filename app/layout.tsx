import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pedro Colmeiro",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="text-white antialiased bg-gradient-to-b from-black via-black to-[#1e3b1a]">
          <Navbar />
        <div className="pt-16">{children}</div>

        <Footer
          name="Pedro Colmeiro"
          role="Director / Editor"
          email="pedro@correo.com"
          location="Ciudad Autónoma de Buenos Aires, Argentina"
          instagramUrl="https://instagram.com/..."
          linkedinUrl="https://linkedin.com/in/..."
          imdbUrl="https://www.imdb.com/name/..."
        />
      </body>
    </html>
  );
}