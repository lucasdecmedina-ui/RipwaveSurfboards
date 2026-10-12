import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

export function CareTeaser() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <img
            src="/media/interior_pranchas_1.png"
            alt="Prancha Ripwave pronta na loja"
            loading="lazy"
            className="h-[28rem] w-full object-cover shadow-[var(--shadow-deep)]"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="flex items-center gap-3 text-foreground/60">
            <TribalLine className="w-20 text-primary" />
            <span className="eyebrow">Conservação</span>
          </div>
          <ShieldCheck className="mt-7 h-9 w-9 text-primary" aria-hidden />
          <h2 className="mt-4 text-4xl leading-[1] md:text-5xl">
            Para acompanhar por muitos anos.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Alguns cuidados simples ajudam a conservar sua prancha e manter cada sessão do jeito que
            ela foi pensada para ser.
          </p>
          <Link
            to="/cuidados"
            className="mt-8 inline-flex border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:text-primary"
          >
            Ver orientações →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
