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
        <a href="#top" className="font-serif text-2xl italic tracking-tight text-foreground">
          Materia&nbsp;Pura
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
