import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";

const offsets = ["", "md:mt-32"];

export function Collection() {
  return (
    <section id="coleccion" className="bg-stone px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-20 flex flex-col justify-between gap-6 md:mb-32 md:flex-row md:items-end">
            <div>
              <span className="eyebrow mb-6 block">Colección — Otoño</span>
              <h2 className="font-serif text-5xl leading-[1] tracking-tight md:text-7xl">
                Objetos <span className="italic">tallados</span>
                <br />
                por la mano.
              </h2>
            </div>
            <span className="self-start text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:self-end">
              {String(products.length).padStart(2, "0")} piezas disponibles
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.15} className={offsets[i % offsets.length]}>
              <Link
                to="/productos/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <article>
                  <div className="relative mb-8 overflow-hidden bg-card">
                    <motion.img
                      src={p.hero}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <span className="eyebrow absolute left-4 top-4">{p.code}</span>
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-background/90 px-4 py-2 text-[10px] uppercase tracking-[0.22em] opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                      Ver pieza →
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-6 border-t border-border pt-5">
                    <div className="min-w-0">
                      <h3 className="mb-2 font-serif text-2xl italic leading-tight transition-colors group-hover:text-accent">
                        {p.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {p.materials}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-sm tabular-nums">{p.price}</span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
