export type Camera = {
  id: string;
  label: string;
  imageSrc: string;
  thumbSrc?: string; // opcional (si querés thumb distinto)
};

export type Project = {
  id: string;
  name: string;
  role?: string;
  date: string;
  youtubeUrl?: string; 
  leftThumbSrc: string; // miniatura que se ve en la lista izquierda
  cameras: Camera[];
};

export const projects: Project[] = [
  {
    id: "quevedo-bzrp",
    name: "QUEVEDO || BZRP Music Sessions",
    role: "Director / Editor",
    date: "JULY 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=V9bZqVYjH8s",
    leftThumbSrc: "/projects/quevedo/1_quevedo.png",
    cameras: [
      {
        id: "cam1",
        label: "Camera 1",
        imageSrc: "/projects/quevedo/1_quevedo.png",
      },
      {
        id: "cam2",
        label: "Camera 2",
        imageSrc: "/projects/quevedo/2_quevedo.png",
      },
      {
        id: "cam3",
        label: "Camera 3",
        imageSrc: "/projects/quevedo/3_quevedo.png",
      },
      {
        id: "vhs",
        label: "VHS",
        imageSrc: "/projects/quevedo/vhs_quevedo.png",
      },
    ],
  },
  {
    id: "shakira-bzrp",
    name: "SHAKIRA || BZRP Music Sessions",
    role: "Director / Editor", // opcional
    date: "JANUARY 2023",
    youtubeUrl: "https://www.youtube.com/watch?v=V9bZqVYjH8s",
    leftThumbSrc: "/projects/shakira/1_shakira.png",
    cameras: [
      {
        id: "cam1",
        label: "Camera 1",
        imageSrc: "/projects/shakira/1_shakira.png",
      },
      {
        id: "cam2",
        label: "Camera 2",
        imageSrc: "/projects/shakira/2_shakira.png",
      },
      {
        id: "cam3",
        label: "Camera 3",
        imageSrc: "/projects/shakira/3_shakira.png",
      },
      {
        id: "vhs",
        label: "VHS",
        imageSrc: "/projects/shakira/vhs_shakira.png",
      },
    ],
  },
  {
    id: "villano-bzrp",
    name: "VILLANO ANTILLANO || BZRP Music Sessions",
    role: "Director / Editor", // opcional
    date: "JUNE 2022",
      youtubeUrl: "https://www.youtube.com/watch?v=V9bZqVYjH8s",
    leftThumbSrc: "/projects/villano/1_villano.png",
    cameras: [
      {
        id: "cam1",
        label: "Camera 1",
        imageSrc: "/projects/villano/1_villano.png",
      },
      {
        id: "cam2",
        label: "Camera 2",
        imageSrc: "/projects/villano/2_villano.png",
      },
      {
        id: "cam3",
        label: "Camera 3",
        imageSrc: "/projects/villano/3_villano.png",
      },
      {
        id: "vhs",
        label: "VHS",
        imageSrc: "/projects/villano/vhs_villano.png",
      },
    ],
  },
  {
    id: "duki-bzrp",
    name: "DUKI || BZRP Music Sessions",
    role: "Director / Editor", // opcional
    date: "NOVEMBER 2022",
    youtubeUrl: "https://www.youtube.com/watch?v=V9bZqVYjH8s",
    leftThumbSrc: "/projects/duki/1_duki.png",
    cameras: [
      {
        id: "cam1",
        label: "Camera 1",
        imageSrc: "/projects/duki/1_duki.png",
      },
      {
        id: "cam2",
        label: "Camera 2",
        imageSrc: "/projects/duki/2_duki.png",
      },
      {
        id: "cam3",
        label: "Camera 3",
        imageSrc: "/projects/duki/3_duki.png",
      },
      {
        id: "vhs",
        label: "VHS",
        imageSrc: "/projects/duki/vhs_duki.png",
      },
    ],
  },
  {
    id: "luck-bzrp",
    name: "LUCK RA || BZRP Music Sessions",
    role: "Director / Editor", // opcional
    date: "NOVEMBER 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=V9bZqVYjH8s",
    leftThumbSrc: "/projects/luck/1_luck.png",
    cameras: [
      {
        id: "cam1",
        label: "Camera 1",
        imageSrc: "/projects/luck/1_luck.png",
      },
      {
        id: "cam2",
        label: "Camera 2",
        imageSrc: "/projects/luck/2_luck.png",
      },
      {
        id: "cam3",
        label: "Camera 3",
        imageSrc: "/projects/luck/3_luck.png",
      },
      {
        id: "vhs",
        label: "VHS",
        imageSrc: "/projects/luck/vhs_luck.png",
      },
    ],
  },
   {
    id: "milo-bzrp",
    name: "MILO J || BZRP Music Sessions",
    role: "Director / Editor", // opcional
    date: "OCTOBER 2023",
    youtubeUrl: "https://www.youtube.com/watch?v=V9bZqVYjH8s",
    leftThumbSrc: "/projects/milo/1_milo.png",
    cameras: [
      {
        id: "cam1",
        label: "Camera 1",
        imageSrc: "/projects/milo/1_milo.png",
      },
      {
        id: "cam2",
        label: "Camera 2",
        imageSrc: "/projects/milo/2_milo.png",
      },
      {
        id: "cam3",
        label: "Camera 3",
        imageSrc: "/projects/milo/3_milo.png",
      },
      {
        id: "vhs",
        label: "VHS",
        imageSrc: "/projects/milo/vhs_milo.png",
      },
    ],
  },
   {
    id: "young-bzrp",
    name: "YOUNG MIKO || BZRP Music Sessions",
    role: "Director / Editor", // opcional
    date: "JANUARY 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=V9bZqVYjH8s",
    leftThumbSrc: "/projects/young/1_young.png",
    cameras: [
      {
        id: "cam1",
        label: "Camera 1",
        imageSrc: "/projects/young/1_young.png",
      },
      {
        id: "cam2",
        label: "Camera 2",
        imageSrc: "/projects/young/2_young.png",
      },
      {
        id: "cam3",
        label: "Camera 3",
        imageSrc: "/projects/young/3_young.png",
      },
      {
        id: "vhs",
        label: "VHS",
        imageSrc: "/projects/young/vhs_young.png",
      },
    ],
  },  
];