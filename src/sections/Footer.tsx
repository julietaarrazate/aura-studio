export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-top px-6 py-16 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl italic tracking-tight">El Portal Magnético</div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Objetos artesanales hechos en el taller entre piedra, luz y el
              tiempo necesario para reposar.
            </p>
          </div>
          <div>
            <span className="eyebrow mb-5 block">Estudio</span>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:opacity-60">Instagram</a></li>
              <li><a href="#" className="hover:opacity-60">Journal</a></li>
              <li><a href="#" className="hover:opacity-60">Contacto</a></li>
            </ul>
          </div>
          <div>
            <span className="eyebrow mb-5 block">Legal</span>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:opacity-60">Privacidad</a></li>
              <li><a href="#" className="hover:opacity-60">Envíos</a></li>
              <li><a href="#" className="hover:opacity-60">Términos</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 text-[10px] uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center">
          <span>© {year} El Portal Magnético — Todos los derechos reservados</span>
          <span>Hecho a mano</span>
        </div>
      </div>
    </footer>
  );
}
