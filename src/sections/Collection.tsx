import obelisco from "@/assets/product-obelisco.jpg";
import esfera from "@/assets/product-esfera.jpg";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

interface Piece {
  code: string;
  name: string;
  materials: string;
  price: string;
  img: string;
  alt: string;
  offset?: string;
}

const pieces: Piece[] = [
  {
    code: "ORG · 04",
    name: "Obelisco de Obsidiana",
    materials: "Obsidiana · Oro 24k · Cuarzo Ahumado",
    price: "$ 320",
    img: obelisco,
    alt: "Obelisco de resina con obsidiana y oro",
  },
  {
    code: "ORG · 12",
    name: "Esfera de Turquesa",
    materials: "Turquesa · Cobre Puro · Resina Botánica",
    price: "$ 450",
    img: esfera,
    alt: "Esfera de orgón con turquesa y cobre",
    offset: "md:mt-32",
  },
];

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
            <a
              href="#"
              className="self-start border-b border-foreground/20 pb-1 text-[11px] uppercase tracking-[0.24em] transition-colors hover:border-foreground md:self-end"
            >
              Ver catálogo completo →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2">
          {pieces.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.15} className={p.offset}>
              <article className="group">
                <div className="relative mb-8 overflow-hidden bg-card">
                  <motion.img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <span className="eyebrow absolute left-4 top-4">{p.code}</span>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-border pt-5">
                  <div className="min-w-0">
                    <h3 className="mb-2 font-serif text-2xl italic leading-tight">{p.name}</h3>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {p.materials}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-sm tabular-nums">{p.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
