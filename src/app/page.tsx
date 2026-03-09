"use client";
import { useState } from "react";
import Hero from "../components/Hero";
import Resume from "../components/Resume";

export type Language = "de" | "en" | "it";

export default function Home() {
  const [lang, setLang] = useState<Language>("de");

  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero lang={lang} setLang={setLang} />
      <Resume lang={lang} />
    </main>
  );
}