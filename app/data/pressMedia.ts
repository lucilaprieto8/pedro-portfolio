export type PressItem = {
  slug: string;
  title: string;
  excerpt: string;
  coverSrc: string;
  date?: string;
  source?: string;
  url?: string; // link a nota oficial (si existe)
  body?: string; // texto largo para modal
};

export const pressMedia: PressItem[] = [
  {
    slug: "tn-la-viola",
    title: "TN LA VIOLA",
    excerpt:
      "Tiene 27 años, trabaja con Bizarrap desde los 21 y contó cómo es el verdadero detrás de escena.",
    coverSrc: "/press/pedroTN.avif",
    source: "TN",
    url: "https://", // opcional
    body:
      "Acá ponés el texto largo, o un resumen más detallado, o directamente dejás vacío y usás url.",
  },
  {
    slug: "nota-2",
    title: "ENTREVISTA / PODCAST",
    excerpt: "Aparición en medio X hablando de procesos creativos y dirección.",
    coverSrc: "/press/pedroTN.avif",
  },
  {
    slug: "nota-3",
    title: "WEBINAR",
    excerpt: "Charla sobre storytelling y producción audiovisual en música.",
    coverSrc: "/press/pedroTN.avif",
  },
];