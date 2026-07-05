import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text =
  "No fabricamos objetos; ordenamos la materia. Cada pieza es un equilibrio deliberado entre cristales conductores, metales puros y la quietud orgánica de la resina.";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });
  const words = text.split(" ");

  return (
    <section ref={ref} className="px-6 py-40 md:py-56">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 flex items-center gap-4">
          <span className="eyebrow">— Manifiesto</span>
          <div className="rule flex-1" />
        </div>
        <p className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-tight text-balance">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} progress={scrollYProgress} range={[start, end]} word={word} />;
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.3em] inline-block">
      {word}
    </motion.span>
  );
}
