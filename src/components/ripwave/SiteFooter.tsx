import { Link } from "@tanstack/react-router";
import { TribalLine } from "./WaveDivider";

export function SiteFooter() {
  return (
    <footer className="bg-navy py-16 text-sand">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <img
          src="/brand/ripwave-horizontal.png"
          alt="Ripwave Surfboards"
          loading="lazy"
          width={1600}
          height={242}
          className="mx-auto h-12 w-auto object-contain"
        />
        <p className="script mt-6 text-xl text-sand/90 md:text-2xl">
          Saudando o passado, surfando o presente e criando o futuro.
        </p>
        <TribalLine className="mx-auto mt-6 text-sand/50" />

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-sand/70">
          <Link to="/encomendas" className="transition-colors hover:text-primary">
            Encomendas
          </Link>
          <Link to="/pranchas" className="transition-colors hover:text-primary">
            Pranchas
          </Link>
          <Link to="/sobre" className="transition-colors hover:text-primary">
            Sobre
          </Link>
          <Link to="/contato" className="transition-colors hover:text-primary">
            Contato
          </Link>
          <a
            href="https://instagram.com/ripwavesurfboards"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5513991672772"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
          <a
            href="mailto:ripwavecomercial@gmail.com"
            className="transition-colors hover:text-primary"
          >
            ripwavecomercial@gmail.com
          </a>
          <a
            href="https://maps.app.goo.gl/cSth9MhdkcUW19WM7"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            Localização
          </a>
          <Link to="/cuidados" className="transition-colors hover:text-primary">
            Conservação da prancha
          </Link>
        </nav>

        <p className="eyebrow mt-10 text-sand/40">
          © {new Date().getFullYear()} Ripwave Surfboards — Desde 1978
        </p>
      </div>
    </footer>
  );
}
