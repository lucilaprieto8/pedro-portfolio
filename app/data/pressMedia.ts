export type PressItem = {
  slug: string;
  title: string;
  excerpt?: string;
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
    coverSrc: "/press/pedroTN.avif",
    source: "TN",
    url: "https://tn.com.ar/musica/entrevistas/2026/01/17/tiene-27-anos-trabaja-con-bizarrap-desde-los-21-y-conto-como-es-el-verdadero-detras-de-escena/",
    body: "Tiene 27 años, trabaja con Bizarrap desde los 21 y contó cómo es el verdadero detrás de escena.",
  },
    {
    slug: "telefe-cordoba",
    title: "TELEFE",
    coverSrc: "/press/telefe.jpg",
    source: "TELEFE CÓRDOBA",
    url: "https://cordoba.mitelefe.com/espectaculos/el-ojo-detras-de-la-habitacion-pedro-colmeiro-el-director-que-le-da-forma-al-universo-de-bizarrap-pid2539696",
    body: "El ojo detrás de la habitación: Pedro Colmeiro, el director que le da forma al universo de Bizarrap.",
  },
  {
    slug: "pronto",
    title: "PRONTO",
    coverSrc: "/press/pronto.webp",
    source: "PRONTO",
    url: "https://www.pronto.com.ar/espectaculos/2026/2/1/el-director-audiovisual-que-antes-de-los-30-ya-trabajo-con-shakira-sebastian-yatra-bizarrap-cuenta-lo-que-nadie-ve-272649.html",
    body: "El director audiovisual que antes de los 30 ya trabajó con Shakira, Sebastián Yatra y Bizarrap cuenta lo que nadie ve.",
  },
  {
    slug: "bamv",
    title: "BAMV",
    coverSrc: "/press/bamv.jpg",
    source: "BAMV",
    url: "https://www.instagram.com/p/DQ7xwSAkcdi/",
    body: "La comunicación como parte de la música.",
  },
   {
    slug: "social-media-day",
    title: "SOCIAL MEDIA DAY",
    coverSrc: "/press/smd.jpg",
    source: "SOCIAL MEDIA DAY",
    url: "https://smday.com.ar/capacitaciones/ondemand-social-media-day-buenos-aires-2024/",
    body: "“Muchachos”, la película récord: del cine al fenómeno viral en tik tok.",
  },
   {
    slug: "fundacion-friedrich-naumann",
    title: "FUNDACIÓN FRIEDRICH NAUMANN",
    coverSrc: "/press/fn.jpg",
    source: "Fundación Friedrich Naumann",
    url: "https://www.freiheit.org/argentinien-and-paraguay/talks-freedom-youth-were-protagonists",
    body: "Talks For Freedom: The Youth Were the Protagonists.",
  },
    {
    slug: "Universidad de Belgrano",
    title: "UNIVERSIDAD DE BELGRANO",
    coverSrc: "/press/universidad-belgrano.jpg",
    source: "Universidad de Belgrano",
    url: "https://www.instagram.com/p/CxYiP8AO2YJ/",
    body: "Pedro Colmeiro: brillar a los 24 en el campo audiovisual.",
  },
];