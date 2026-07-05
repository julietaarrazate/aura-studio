import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { getProduct, products, type Product } from "@/lib/products";

export const Route = createFileRoute("/productos/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Pieza no encontrada — El Portal Magnético" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — El Portal Magnético`;
    return {
      meta: [
        { title },
        { name: "description", content: product.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: product.tagline },
        { property: "og:type", content: "product" },
        { property: "og:image", content: product.hero },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: product.hero },
      ],
    };
  },
  notFoundComponent: NotFoundPiece,
  component: ProductPage,
});

function NotFoundPiece() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <span className="eyebrow mb-4 block">— Pieza no localizada</span>
        <h1 className="mb-8 font-serif text-5xl italic">No encontramos esta pieza.</h1>
        <Link
          to="/"
          className="border-b border-foreground/25 pb-1 text-[11px] uppercase tracking-[0.24em]"
        >
          Volver al taller →
        </Link>
      </div>
    </main>
  );
}

function ProductPage() {
  useLenis();
  const { product } = Route.useLoaderData() as { product: Product };
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const otherPieces = products.filter((p) => p.slug !== product.slug);

  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] w-full overflow-hidden"
      >
        <motion.div
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={product.hero}
            alt={product.name}
            width={1200}
            height={1500}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/50" />
        </motion.div>

        <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-6 pb-16 pt-32 md:px-12 md:pb-24 md:pt-40">
          <div>
            <Link
              to="/"
              className="eyebrow inline-flex items-center gap-2 transition-opacity hover:opacity-60"
            >
              ← Colección
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="eyebrow mb-6 block"
              >
                {product.code} — {product.edition}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-[-0.02em] text-balance"
              >
                {product.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-lg font-serif text-2xl italic text-muted-foreground"
              >
                {product.tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-end gap-6 md:col-span-4 md:items-end md:text-right"
            >
              <div>
                <span className="eyebrow mb-2 block">Pieza única</span>
                <p className="font-mono text-3xl tabular-nums">{product.price}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <button className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-accent">
                  Comprar ahora
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button className="border-b border-foreground/25 pb-1 text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-foreground">
                  Reservar pieza
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-t border-border px-6 md:px-12">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8 py-10 md:grid-cols-4">
          <Spec label="Materiales" value={product.materials} />
          <Spec label="Altura" value={product.height} />
          <Spec label="Peso" value={product.weight} />
          <Spec label="Edición" value={product.edition} />
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-32 md:py-48">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <span className="eyebrow">— Historia</span>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.2] text-balance">
              {product.story}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-stone px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-16 flex items-end justify-between gap-6">
              <h2 className="font-serif text-5xl leading-[1] tracking-tight md:text-6xl">
                Galería <span className="italic">del taller.</span>
              </h2>
              <span className="eyebrow">
                {String(product.gallery.length).padStart(2, "0")} imágenes
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-6">
            {product.gallery.map((img, i) => (
              <Reveal
                key={i}
                delay={i * 0.12}
                className={
                  i === 0
                    ? "md:col-span-4 md:row-span-2"
                    : "md:col-span-2"
                }
              >
                <figure className="group">
                  <div className="overflow-hidden bg-card">
                    <motion.img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`w-full object-cover ${
                        i === 0 ? "aspect-[4/5]" : "aspect-square"
                      }`}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-3">
                    <span className="text-xs text-muted-foreground">{img.caption}</span>
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} / {String(product.gallery.length).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials story */}
      <section className="bg-ink px-6 py-32 text-primary-foreground md:px-12 md:py-48">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-20 max-w-3xl">
            <div>
              <span className="eyebrow mb-6 block text-primary-foreground/50">
                — Historia de los materiales
              </span>
              <h2 className="font-serif text-5xl leading-[1] tracking-tight md:text-6xl">
                Cada elemento <span className="italic">tiene un origen.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
            {product.materialsDetail.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.12}>
                <article className="group">
                  <div className="mb-6 aspect-[4/5] overflow-hidden bg-white/5">
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 border-t border-primary-foreground/15 pt-4">
                    <div className="min-w-0">
                      <h3 className="mb-1 font-serif text-2xl italic">{m.name}</h3>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/50">
                        {m.origin}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-primary-foreground/50">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
                    {m.note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-40 text-center md:py-56">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <span className="eyebrow mb-10 block">— Reserva</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-6 font-serif text-5xl leading-[1] tracking-tight text-balance md:text-7xl">
              Lleva {product.name.toLowerCase()}
              <br />
              <span className="italic">a tu espacio.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mb-12 max-w-md text-sm leading-relaxed text-muted-foreground">
              {product.edition}. Envío cuidadoso en caja de madera con manta de
              lino. Reserva sin compromiso; te contactamos en 24 horas.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-accent">
                Comprar ahora — {product.price}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="border-b border-foreground/25 pb-1 text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-foreground">
                Reservar pieza
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other pieces */}
      {otherPieces.length > 0 && (
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 flex items-end justify-between gap-6">
              <h3 className="font-serif text-3xl italic">Otras piezas del taller</h3>
              <Link
                to="/"
                className="border-b border-foreground/20 pb-1 text-[11px] uppercase tracking-[0.24em] transition-colors hover:border-foreground"
              >
                Ver colección →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {otherPieces.map((p) => (
                <Link
                  key={p.slug}
                  to="/productos/$slug"
                  params={{ slug: p.slug }}
                  className="group"
                >
                  <div className="mb-5 overflow-hidden bg-card">
                    <motion.img
                      src={p.hero}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 border-t border-border pt-4">
                    <div className="min-w-0">
                      <h4 className="font-serif text-xl italic">{p.name}</h4>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {p.code}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-sm">{p.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="eyebrow mb-2 block">{label}</span>
      <p className="text-sm leading-snug text-foreground">{value}</p>
    </div>
  );
}
