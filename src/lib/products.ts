import obelisco from "@/assets/product-obelisco.jpg";
import esfera from "@/assets/product-esfera.jpg";
import copper from "@/assets/material-copper.jpg";
import resin from "@/assets/material-resin.jpg";
import crystal from "@/assets/material-crystal.jpg";
import gold from "@/assets/material-gold.jpg";
import craft from "@/assets/craft-process.jpg";

export interface Material {
  name: string;
  origin: string;
  img: string;
  note: string;
}

export interface Product {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  materials: string;
  price: string;
  height: string;
  weight: string;
  edition: string;
  story: string;
  hero: string;
  gallery: { src: string; alt: string; caption: string }[];
  materialsDetail: Material[];
}

export const products: Product[] = [
  {
    slug: "obelisco-obsidiana",
    code: "ORG · 04",
    name: "Obelisco de Obsidiana",
    tagline: "Presencia vertical, luz atrapada en oro.",
    materials: "Obsidiana · Oro 24k · Cuarzo Ahumado",
    price: "$ 320",
    height: "24 cm",
    weight: "1.4 kg",
    edition: "Edición de 12 piezas",
    story:
      "Nacido de una noche de invierno en el taller, el Obelisco reúne la densidad protectora de la obsidiana con la temperatura del oro batido a mano. Reposa durante siete días hasta que la resina se vuelve una sola cosa con la piedra.",
    hero: obelisco,
    gallery: [
      { src: obelisco, alt: "Vista frontal del obelisco", caption: "Vista frontal · Luz directa" },
      { src: craft, alt: "Vertido de resina en el molde", caption: "Vertido · Día uno" },
      { src: gold, alt: "Detalle del oro 24k", caption: "Detalle · Oro 24k" },
    ],
    materialsDetail: [
      { name: "Obsidiana", origin: "Michoacán, MX", img: crystal, note: "Piedra volcánica de enfriamiento súbito." },
      { name: "Oro 24k", origin: "Batido a mano", img: gold, note: "Láminas aplicadas una a una en el centro." },
      { name: "Resina Botánica", origin: "Curada al sol", img: resin, note: "Vertida en cuatro capas sucesivas." },
    ],
  },
  {
    slug: "esfera-turquesa",
    code: "ORG · 12",
    name: "Esfera de Turquesa",
    tagline: "Un mundo pequeño, contenido en cobre.",
    materials: "Turquesa · Cobre Puro · Resina Botánica",
    price: "$ 450",
    height: "10 cm de diámetro",
    weight: "0.9 kg",
    edition: "Edición de 8 piezas",
    story:
      "Cada esfera es torneada a mano y pulida en tres etapas. La turquesa se suspende en un enjambre de cobre nativo que atrapa la luz del oeste al final del día. Objeto para sostener con las dos manos.",
    hero: esfera,
    gallery: [
      { src: esfera, alt: "Esfera sobre pedestal de piedra", caption: "Vista completa · Luz de ventana" },
      { src: copper, alt: "Detalle de las espirales de cobre", caption: "Detalle · Cobre nativo" },
      { src: craft, alt: "Proceso de torneado", caption: "Torneado · Día tres" },
    ],
    materialsDetail: [
      { name: "Turquesa", origin: "Sonora, MX", img: crystal, note: "Fragmentos elegidos por su veta azul." },
      { name: "Cobre Puro", origin: "Nativo", img: copper, note: "Espirales bajo tensión constante." },
      { name: "Resina Botánica", origin: "Curada al sol", img: resin, note: "Transparencia mineral en siete días." },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
