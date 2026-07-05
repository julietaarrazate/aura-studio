import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
        <a href="/" className="group flex items-center gap-3 text-foreground">
          <span
            aria-hidden="true"
            className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-foreground/70 transition-transform duration-700 group-hover:rotate-45"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          <span className="font-serif text-xl italic leading-none tracking-tight md:text-2xl">
            El Portal <span className="not-italic tracking-[0.02em]">Magnético</span>
          </span>
        </a>
        <div className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.24em] text-foreground md:flex">
          <a href="#coleccion" className="transition-opacity hover:opacity-60">Colección</a>
          <a href="#proceso" className="transition-opacity hover:opacity-60">Proceso</a>
          <a href="#materia" className="transition-opacity hover:opacity-60">Materia</a>
          <a href="#taller" className="transition-opacity hover:opacity-60">Taller</a>
        </div>
        <a
          href="#coleccion"
          className="text-[11px] uppercase tracking-[0.24em] text-foreground transition-opacity hover:opacity-60"
        >
          Carrito&nbsp;(0)
        </a>
      </div>
    </nav>
  );
}
