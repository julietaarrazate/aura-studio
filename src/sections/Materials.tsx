import copper from "@/assets/material-copper.jpg";
import resin from "@/assets/material-resin.jpg";
import crystal from "@/assets/material-crystal.jpg";
import gold from "@/assets/material-gold.jpg";
import { Reveal } from "@/components/Reveal";

const items = [
  { n: "01", t: "Cobre Nativo", d: "Conductividad térmica y energética.", img: copper },
  { n: "02", t: "Resina Botánica", d: "Curada al sol para pureza mineral.", img: resin },
  { n: "03", t: "Cristal Maestro", d: "Cuarzos seleccionados uno a uno.", img: crystal },
  { n: "04", t: "Oro 24k", d: "Láminas aplicadas a mano en el centro.", img: gold },
];

export function Materials() {
  return (
    <section id="materia" className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-48">
        <Reveal className="mx-auto mb-24 max-w-3xl text-center">
          <div>
            <span className="eyebrow mb-6 block text-primary-foreground/50">— Materia</span>
            <h2 className="font-serif text-5xl leading-[1] tracking-tight text-balance md:text-7xl">
              Elementos en su
              <br />
              <span className="italic">estado más puro.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.1}>
              <figure className="group">
                <div className="relative mb-5 aspect-square overflow-hidden bg-white/5">
                  <img
                    src={m.img}
                    alt={m.t}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 font-mono text-[11px] tracking-widest text-primary-foreground/70">
                    {m.n}
                  </span>
                </div>
                <figcaption>
                  <h3 className="mb-1 font-serif text-xl italic">{m.t}</h3>
                  <p className="text-xs leading-relaxed text-primary-foreground/50">{m.d}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
