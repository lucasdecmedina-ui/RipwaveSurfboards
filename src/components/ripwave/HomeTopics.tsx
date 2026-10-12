import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, MessageCircle, ShieldCheck, Waves } from "lucide-react";
import { boardCategories } from "@/data/catalog";
import { Reveal } from "./Reveal";
import { TribalLine, WaveDivider } from "./WaveDivider";

const steps = ["Conversa", "Proposta", "Produção", "Na água"];

const categoryImages: Record<string, string> = {
  shortboards: "/media/client/categoria-shortboards.jpg",
  "fish-retro": "/media/client/categoria-fish-retro.jpg",
  fun: "/media/client/categoria-fun.jpg",
  longboards: "/media/client/categoria-longboards.jpg",
  "stand-up": "/media/client/categoria-stand-up.jpg",
};

function TextLink({
  to,
  children,
  light = false,
}: {
  to: "/encomendas" | "/pranchas" | "/sobre" | "/cuidados" | "/contato";
  children: string;
  light?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`mt-8 inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:text-primary ${light ? "text-sand" : "text-foreground"}`}
    >
      {children} <ArrowUpRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function HomeTopics() {
  return (
    <section aria-label="Conheça a Ripwave" className="bg-background">
      <section id="encomendas" className="surface-deep relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <Reveal>
            <div className="flex items-center gap-3 text-sand/65">
              <TribalLine className="w-20 text-primary" />
              <span className="eyebrow">Encomendas</span>
            </div>
            <h2 className="mt-5 max-w-xl text-5xl leading-[.9] text-sand md:text-6xl">
              Sua prancha começa em uma conversa.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sand/75 md:text-lg">
              Antes do shape, vem o seu surf: onde você entra no mar, o que procura sentir e para
              onde quer evoluir.
            </p>
            <TextLink to="/encomendas" light>
              Entenda as encomendas
            </TextLink>
          </Reveal>
          <Reveal delay={100} className="relative">
            <img
              src="/media/client/encomendas-conversa.jpg"
              alt="Atendimento personalizado na Ripwave"
              loading="lazy"
              className="h-[28rem] w-full object-cover shadow-[var(--shadow-deep)]"
            />
            <div className="relative z-10 mx-3 -mt-6 grid grid-cols-4 border border-sand/15 bg-navy/95 px-3 py-4 backdrop-blur-md sm:mx-6 sm:px-5">
              {steps.map((step, index) => (
                <div key={step} className="border-l border-sand/15 px-2 first:border-l-0">
                  <span className="font-display text-lg text-primary">0{index + 1}</span>
                  <p className="mt-1 text-[.58rem] font-semibold tracking-[.12em] text-sand/80 uppercase">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="pranchas" className="relative overflow-hidden py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <TribalLine className="w-20 text-primary" />
              <span className="eyebrow">Catálogo</span>
            </div>
            <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-5xl leading-[.9] md:text-6xl">
                Uma prancha para cada surf.
              </h2>
              <Waves className="h-12 w-12 text-primary" aria-hidden />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {boardCategories.map((category, index) => (
                <Link
                  key={category.slug}
                  to="/pranchas/$categoria"
                  params={{ categoria: category.slug }}
                  className="group relative aspect-[1.38/1] overflow-hidden bg-navy shadow-[var(--shadow-deep)]"
                >
                  <img
                    src={categoryImages[category.slug]}
                    alt={`Prancha da categoria ${category.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,20,43,.16)_12%,rgba(3,20,43,.05)_42%,rgba(3,20,43,.96)_100%)]" />
                  <span className="absolute top-6 left-7 font-display text-5xl text-sand/55">
                    0{index + 1}
                  </span>
                  <div className="absolute inset-x-7 bottom-6 flex items-end justify-between gap-4">
                    <h3 className="max-w-[80%] text-3xl leading-[.82] text-sand md:text-4xl">
                      {category.name}
                    </h3>
                    <ArrowUpRight
                      className="mb-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </div>
                </Link>
              ))}
            </div>
            <TextLink to="/pranchas">Explorar o catálogo</TextLink>
          </Reveal>
        </div>
      </section>

      <section id="sobre" className="bg-muted py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal className="grid grid-cols-[.7fr_1fr] items-end gap-4">
            <div className="relative">
              <img
                src="/media/client/sobre-fabrica.jpg"
                alt="Pranchas Ripwave prontas na fábrica"
                loading="lazy"
                className="h-64 w-full object-cover md:h-80"
              />
              <span className="absolute top-3 left-3 bg-primary px-2.5 py-1 text-[.55rem] font-semibold tracking-[.2em] text-primary-foreground uppercase">
                Santos, SP
              </span>
            </div>
            <video
              className="h-80 w-full object-cover md:h-[26.25rem]"
              poster="/media/client/sobre-beto.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Beto trabalhando no acabamento de uma prancha"
            >
              <source src="/media/client/sobre-beto.mp4" type="video/mp4" />
            </video>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-3 text-foreground/60">
              <TribalLine className="w-20 text-primary" />
              <span className="eyebrow">A Ripwave</span>
            </div>
            <h2 className="mt-5 text-5xl leading-[.9] md:text-6xl">Uma história feita à mão.</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Da marcenaria da família ao mar: a Ripwave cresceu em Santos, acompanhando gerações de
              surfistas e moldando uma prancha por vez.
            </p>
            <dl className="mt-8 flex gap-7 border-l-2 border-primary pl-5">
              <div>
                <dt className="font-display text-3xl">1978</dt>
                <dd className="eyebrow mt-1 text-muted-foreground">Desde</dd>
              </div>
              <div>
                <dt className="font-display text-3xl">37 mil+</dt>
                <dd className="eyebrow mt-1 text-muted-foreground">Pranchas</dd>
              </div>
              <div>
                <dt className="font-display text-3xl">Beto</dt>
                <dd className="eyebrow mt-1 text-muted-foreground">Shaper</dd>
              </div>
            </dl>
            <TextLink to="/sobre">Conheça a história</TextLink>
          </Reveal>
        </div>
      </section>

      <section id="conservacao" className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex items-center gap-3 text-foreground/60">
              <TribalLine className="w-20 text-primary" />
              <span className="eyebrow">Conservação</span>
            </div>
            <ShieldCheck className="mt-7 h-10 w-10 text-primary" aria-hidden />
            <h2 className="mt-5 max-w-lg text-5xl leading-[.9] md:text-6xl">
              Para acompanhar por muitos anos.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Sol, transporte e os cuidados depois do surf: o essencial para manter sua prancha
              pronta para muitas ondas.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold tracking-[.15em] text-foreground uppercase">
              <span>Sol e calor</span>
              <span>Depois do surf</span>
              <span>Transporte</span>
            </div>
            <TextLink to="/cuidados">Ver guia de conservação</TextLink>
          </Reveal>
          <Reveal delay={90}>
            <img
              src="/media/client/conservacao.jpg"
              alt="Prancha Ripwave em cenário de praia"
              loading="lazy"
              className="h-[30rem] w-full object-cover shadow-[var(--shadow-deep)]"
            />
          </Reveal>
        </div>
      </section>

      <section
        id="contato"
        className="surface-deep relative overflow-hidden py-24 text-sand md:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <Reveal>
            <div className="flex items-center gap-3 text-sand/65">
              <TribalLine className="w-20 text-primary" />
              <span className="eyebrow">Contato</span>
            </div>
            <h2 className="mt-5 max-w-2xl text-5xl leading-[.9] md:text-6xl">
              Vamos conversar sobre sua próxima prancha?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/75 md:text-lg">
              Fábrica, loja e ponto de encontro para quem vive o surf em Santos.
            </p>
            <TextLink to="/contato" light>
              Falar com a Ripwave
            </TextLink>
          </Reveal>
          <Reveal delay={90} className="border-l-2 border-primary pl-6">
            <MapPin className="h-7 w-7 text-primary" aria-hidden />
            <p className="mt-5 text-lg text-sand">
              Av. Dr. Nilo Peçanha, 1187
              <br />
              Marapé, Santos, SP
            </p>
            <p className="mt-4 text-sm text-sand/65">
              Segunda a sexta, das 8h às 18h.
              <br />
              Sábado, das 8h às 14h.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider className="block bg-navy" color="var(--background)" />
    </section>
  );
}
