import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

type HistorySlide = {
  image: string;
  title: string;
  alt: string;
};

const firstHistory: HistorySlide[] = [
  {
    image: "/media/client/historia-primavera.jpg",
    title: "Marcenaria Primavera",
    alt: "Marcenaria Primavera",
  },
  {
    image: "/media/client/historia-sala-shape.jpg",
    title: "Primeira sala de shape nos fundos",
    alt: "Primeira sala de shape da Ripwave",
  },
  {
    image: "/media/client/historia-bracos.jpg",
    title: "Shapeando até cansar os braços",
    alt: "Beto shapeando uma prancha",
  },
  {
    image: "/media/client/historia-maos.jpg",
    title: "Shapes manuais",
    alt: "Trabalho manual no shape de uma prancha",
  },
  {
    image: "/media/client/historia-laminacao.jpg",
    title: "Laminando as primeiras",
    alt: "Laminação de uma prancha Ripwave",
  },
  {
    image: "/media/client/historia-material.jpg",
    title: "Buscando material",
    alt: "Busca de material para as pranchas",
  },
];

const secondHistory: HistorySlide[] = [
  {
    image: "/media/client/historia-maquina-1.jpg",
    title: "As primeiras máquinas de shape",
    alt: "Primeira máquina de shape da Ripwave",
  },
  {
    image: "/media/client/historia-maquina-2.jpg",
    title: "A oficina ganhando forma",
    alt: "Máquina de shape na oficina Ripwave",
  },
  {
    image: "/media/client/historia-time.jpg",
    title: "Equipe nos campeonatos",
    alt: "Equipe Ripwave em campeonato",
  },
  {
    image: "/media/client/historia-peru.jpg",
    title: "Beto no Peru",
    alt: "Beto em viagem ao Peru",
  },
  {
    image: "/media/client/historia-parcerias.jpg",
    title: "Parcerias que atravessam o tempo",
    alt: "Parcerias da Ripwave",
  },
];

function HistoryCarousel({ label, slides }: { label: string; slides: HistorySlide[] }) {
  const [active, setActive] = useState(0);
  const current = slides[active];
  const previous = () => setActive((index) => (index - 1 + slides.length) % slides.length);
  const next = () => setActive((index) => (index + 1) % slides.length);

  return (
    <section
      className="outline-none"
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") next();
      }}
    >
      <div className="grid overflow-hidden bg-muted md:grid-cols-[1.45fr_0.55fr]">
        <div className="relative min-h-[19rem] md:min-h-[31rem]">
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={index === active ? slide.alt : ""}
              aria-hidden={index !== active}
              loading={index === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                index === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col justify-between p-7 md:p-10">
          <div>
            <p className="eyebrow text-primary">Memórias Ripwave</p>
            <p className="mt-5 font-display text-3xl leading-none text-foreground md:text-4xl">
              {current.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Registro {String(active + 1).padStart(2, "0")} de{" "}
              {String(slides.length).padStart(2, "0")}
            </p>
          </div>
          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex gap-2" role="tablist" aria-label={`Registros de ${label}`}>
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Mostrar ${slide.title}`}
                  onClick={() => setActive(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === active ? "bg-primary" : "bg-border hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Registro anterior"
                className="grid h-10 w-10 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próximo registro"
                className="grid h-10 w-10 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="relative">
            <img
              src="/media/client/sobre-fabrica.jpg"
              alt="Pranchas Ripwave prontas na fábrica"
              loading="lazy"
              className="h-[33rem] w-full object-cover shadow-[var(--shadow-deep)]"
            />
            <span className="absolute -top-5 -left-3 bg-primary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-primary-foreground uppercase">
              Santos, SP
            </span>
          </Reveal>
          <div>
            <Reveal>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A Ripwave é uma fábrica de pranchas sob medida, em Santos, tocada pelo shaper Beto
                Loureiro. Do iniciante que está tendo o primeiro contato com o mar até quem já é da
                família Ripwave há anos: nenhuma prancha sai daqui pronta de prateleira, ela é
                moldada pra você.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Mais do que uma fábrica, a Ripwave é parte da história do surf em Santos, cidade que
                se orgulha de ter visto nascer o surf no Brasil.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div>
                  <dt className="font-display text-2xl text-foreground md:text-3xl">37 mil+</dt>
                  <dd className="eyebrow mt-1 text-muted-foreground">Pranchas produzidas</dd>
                </div>
                <div>
                  <dt className="font-display text-2xl text-foreground md:text-3xl">Beto</dt>
                  <dd className="eyebrow mt-1 text-muted-foreground">Shaper e fundador</dd>
                </div>
                <div>
                  <dt className="font-display text-2xl text-foreground md:text-3xl">48 anos</dt>
                  <dd className="eyebrow mt-1 text-muted-foreground">De história</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-24 border-t border-border pt-16">
          <HistoryCarousel label="Os primeiros anos da Ripwave" slides={firstHistory} />
        </Reveal>

        <Reveal className="my-24 grid gap-10 border-y border-border py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="max-w-2xl text-xl leading-relaxed text-foreground md:text-2xl">
            O nome Ripwave nasceu em 1984 pela junção de “rip”, que no vocabulário dos surfistas é
            estar em excelentes condições pra surfar, ou “rasgar” o mar, com a palavra “wave”, a
            onda.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="border-l-2 border-primary pl-5">
              <p className="eyebrow text-primary">1985</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Formou a primeira equipe de competição da Ripwave, com técnico à frente, e levou o
                nome da marca pelo Circuito Brasileiro com atletas de peso do surf nacional.
              </p>
            </article>
            <article className="border-l-2 border-primary pl-5">
              <p className="eyebrow text-primary">1989–97 · Do circuito ao mundo</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A equipe Ripwave levou a marca a Costa Rica, Havaí e Indonésia, ao lado de nomes
                importantes do surf nacional, na realização de um sonho antigo ao lado de amigos.
              </p>
            </article>
          </div>
        </Reveal>

        <Reveal>
          <HistoryCarousel label="A Ripwave no circuito e no mundo" slides={secondHistory} />
        </Reveal>
      </div>
    </section>
  );
}
