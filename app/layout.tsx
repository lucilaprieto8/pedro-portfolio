import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pedro Colmeiro",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}

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