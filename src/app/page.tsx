import Hero from "../components/Hero";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <Resume />
    </main>
  );
}