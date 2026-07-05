import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Manifesto } from "@/sections/Manifesto";
import { Collection } from "@/sections/Collection";
import { Process } from "@/sections/Process";
import { Materials } from "@/sections/Materials";
import { Closing } from "@/sections/Closing";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Manifesto />
      <Collection />
      <Process />
      <Materials />
      <Closing />
      <Footer />
    </main>
  );
}
