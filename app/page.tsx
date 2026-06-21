// src/app/page.tsx
import { Header } from "./components/Header";
import { Start } from "./components/Start";
import { Benefits } from "./components/Benefits";
import { Plans } from "./components/Plans";
import { Location } from "./components/Location";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      <Header />
      <Start />
      <Benefits />
      <Plans />
      <Location />
    </main>
  );
}