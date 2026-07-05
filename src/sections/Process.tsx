import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import craft from "@/assets/craft-process.jpg";
import { Reveal } from "@/components/Reveal";

const steps = [
  { n: "01", t: "Selección", d: "Cristales elegidos por su claridad y densidad molecular." },
  { n: "02", t: "Enrollado", d: "Espirales de cobre trabajadas a mano bajo tensión precisa." },
  { n: "03", t: "Vertido", d: "Resina botánica vertida en capas sobre siete días." },
  { n: "04", t: "Reposo", d: "Curado al sol hasta alcanzar su transparencia mineral." },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="proceso" ref={ref} className="px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-16 md:grid-cols-12 md:gap-24">
        <div className="md:col-span-5">
          <div className="overflow-hidden">
            <motion.img
              src={craft}
              alt="Manos artesanas vertiendo resina en un molde piramidal"
              loading="lazy"
              className="w-full object-cover"
              style={{ y }}
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <span className="eyebrow mb-8 block">Proceso — Siete días</span>
            <h2 className="mb-10 font-serif text-5xl leading-[1] tracking-tight md:text-6xl">
              Una alquimia lenta de <span className="italic">tierra, metal e intención.</span>
            </h2>
            <p className="mb-16 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Cada pieza reposa el tiempo necesario. Nada se apresura, nada se
              improvisa. El resultado es un objeto que sostiene la calma del
              taller donde fue hecho.
            </p>
          </Reveal>

          <div className="hairline-top grid grid-cols-1 gap-0 sm:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 0.08}
                className="border-b border-border py-8 pr-6 sm:border-r sm:[&:nth-child(2n)]:border-r-0"
              >
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {s.n}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mb-2 font-serif text-2xl italic">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
