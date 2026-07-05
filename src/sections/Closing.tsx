import { Reveal } from "@/components/Reveal";

export function Closing() {
  return (
    <section id="taller" className="px-6 py-40 text-center md:py-56">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <span className="eyebrow mb-10 block">— Invitación</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-14 font-serif text-5xl leading-[1] tracking-tight text-balance md:text-7xl">
            Lleva un fragmento de
            <br />
            <span className="italic">orden a tu espacio.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto max-w-md">
            <form
              className="flex items-center border-b border-foreground/25 py-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Tu correo"
                className="w-full bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Correo electrónico"
              />
              <button
                type="submit"
                className="shrink-0 text-[11px] uppercase tracking-[0.24em] text-foreground transition-opacity hover:opacity-60"
              >
                Unirse →
              </button>
            </form>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Cartas del taller. Nuevas piezas, procesos y lecturas. Sin ruido.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
