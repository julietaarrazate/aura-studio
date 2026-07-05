import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-orgon.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex h-[100svh] w-full flex-col justify-end overflow-hidden px-6 pb-16 md:px-12 md:pb-24"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Orgón de cobre y resina sobre pedestal de piedra"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-background/40" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-8 block"
          >
            Objeto&nbsp;No.&nbsp;01 — Pirámide de Cobre
          </motion.span>
          <h1 className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.02em] text-foreground text-balance">
            <FadeWord delay={0.15}>Geometría</FadeWord>{" "}
            <FadeWord delay={0.3}>capturada</FadeWord>{" "}
            <FadeWord delay={0.45}>en</FadeWord>
            <br />
            <FadeWord delay={0.6} italic>
              resina y silencio.
            </FadeWord>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start justify-end gap-6 md:col-span-4 md:items-end md:text-right"
        >
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Piezas hechas a mano en pequeños lotes. Cristal, cobre y resina botánica curados al sol.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#coleccion"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-accent"
            >
              Explorar colección
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#proceso"
              className="border-b border-foreground/25 pb-1 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground"
            >
              Nuestra historia
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="eyebrow">Desliza</span>
        <div className="relative h-10 w-px overflow-hidden bg-foreground/15">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-foreground"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}

function FadeWord({
  children,
  delay,
  italic,
}: {
  children: string;
  delay: number;
  italic?: boolean;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={italic ? "inline-block italic" : "inline-block"}
    >
      {children}
    </motion.span>
  );
}
