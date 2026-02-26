import { Navbar } from "./components/navbar";
import { ProjectsInteractive } from "./components/ProjectsInteractive";
import { YatraTabbedVideo } from "./components/YatraTabbedVideo";
import { ClankSection } from "./components/ClankSection";
import { EmiliaSection } from "./components/EmiliaSection";
import { MalaPeroCutieSection } from "./components/MalaPeroCutie";
import { DisneySection } from "./components/DisneySection";
import { SeleccionArgentinaSection } from "./components/SeleccionArgentina";
import { HeaderHero } from "./components/HeaderHero";

const projectNames = [
  "BIZARRAP",
  "SEBASTIAN YATRA",
  "CLANK!",
  "EMILIA MERNES",
  "DISNEY",
  "SELECCIÓN ARGENTINA",
];


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeaderHero projects={projectNames} />
      <div className="mx-auto max-w-6xl py-26">
      <ProjectsInteractive />
      </div>
      <YatraTabbedVideo />
      <ClankSection />
      <EmiliaSection />
      <MalaPeroCutieSection />
      <DisneySection />
      <SeleccionArgentinaSection />
    </main>
  );
}