import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";
import { AtSign, Instagram, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5513991672772";
const MAPS = "https://maps.app.goo.gl/cSth9MhdkcUW19WM7";
const MAP_EMBED =
  "https://www.google.com/maps?q=Ripwave%20Surfboards%20Santos%20SP&z=16&output=embed";

export function Contact() {
  return (
    <section id="contato" className="surface-deep relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-sand/70">
            <TribalLine className="hidden w-20 sm:block" />
            <span className="eyebrow">Contato</span>
            <TribalLine className="hidden w-20 scale-x-[-1] sm:block" />
          </div>
          <h2 className="mt-5 text-4xl leading-[1] text-sand md:text-6xl">
            Vamos conversar sobre sua próxima prancha?
          </h2>
          <p className="script mt-4 text-2xl text-sand/80 md:text-3xl">Estamos por perto.</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="card-lift bg-sand/5 p-6">
              <MessageCircle className="h-5 w-5 text-primary" aria-hidden />
              <span className="eyebrow text-sand/60">WhatsApp</span>
              <p className="mt-2 text-sand">+55 13 99167-2772</p>
            </a>
            <a href="mailto:ripwavecomercial@gmail.com" className="card-lift bg-sand/5 p-6">
              <AtSign className="h-5 w-5 text-primary" aria-hidden />
              <span className="eyebrow text-sand/60">E-mail</span>
              <p className="mt-2 break-all text-sand">ripwavecomercial@gmail.com</p>
            </a>
            <a
              href="https://instagram.com/ripwavesurfboards"
              target="_blank"
              rel="noreferrer"
              className="card-lift bg-sand/5 p-6"
            >
              <Instagram className="h-5 w-5 text-primary" aria-hidden />
              <span className="eyebrow text-sand/60">Instagram</span>
              <p className="mt-2 text-sand">@ripwavesurfboards</p>
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="w-full border border-sand/40 px-9 py-4 text-sm font-semibold tracking-[0.2em] text-sand uppercase transition-colors duration-300 hover:bg-sand/10 sm:w-auto"
            >
              <MapPin className="mr-2 inline h-4 w-4" aria-hidden /> Como chegar
            </a>
          </div>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-12 border-t border-sand/15 pt-10 text-left">
            <p className="eyebrow text-primary">Loja física e fábrica</p>
            <h3 className="mt-3 text-2xl text-sand">Venha conhecer a Ripwave.</h3>
            <p className="mt-4 text-sm leading-relaxed text-sand/70">
              Av. Dr. Nilo Peçanha, 1187, Marapé, Santos, SP, CEP 11070-051
              <br />
              Segunda a sexta, das 8h às 18h. Sábado, das 8h às 14h.
            </p>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden border border-sand/20 bg-navy">
              <iframe
                src={MAP_EMBED}
                title="Localização da Ripwave Surfboards no Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="absolute right-4 bottom-4 inline-flex items-center gap-2 bg-navy/95 px-4 py-3 text-xs font-semibold tracking-[0.16em] text-sand uppercase shadow-lg transition-colors hover:bg-primary"
              >
                <MapPin className="h-4 w-4" aria-hidden /> Abrir no Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
