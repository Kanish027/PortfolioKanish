import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanish Mohariya",
};

export default function Home() {
  return (
    <main className="antialiased flex-auto">
      <Hero />
    </main>
  );
}
