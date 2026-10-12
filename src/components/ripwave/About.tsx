import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

const milestones = [
  {
    year: "12 anos",
    text: "Ganhou sua primeira prancha, de isopor, e teve a ideia de colocar uma quilha de madeira improvisada.",
  },
  {
    year: "1975",
    text: "Aos 16 anos, tornou-se fabricante de longarinas para shapers da região na marcenaria do pai e, pouco tempo depois, também fabricou quilhas de fibra.",
  },
  {
    year: "1978",
    text: "Vieram a laminação, os primeiros shapes completos e as pranchas para os amigos.",
  },
];

const chapters = [
  {
    title: "O nome que ficou",
    text: "Ripwave nasceu em 1984 pela junção de “rip”, que no vocabulário dos surfistas é estar em excelentes condições para surfar — ou rasgar o mar — com “wave”, a onda.",
    image: "/media/client/historia-primavera.jpg",
    alt: "Marcenaria Primavera, parte da história da Ripwave",
  },
  {
    title: "Do circuito ao mundo",
    text: "Em 1985, a Ripwave formou sua primeira equipe de competição e levou o nome da marca pelo Circuito Brasileiro. Entre 1989 e 1997, a equipe chegou a Costa Rica, Havaí e Indonésia ao lado de nomes importantes do surf nacional.",
    image: "/media/client/historia-time.jpg",
    alt: "Equipe Ripwave no circuito de surf",
  },
];

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
              <div className="flex items-center gap-3 text-accent">
                <TribalLine className="w-24" />
                <span className="eyebrow">A Ripwave</span>
              </div>
              <h2 className="mt-5 text-4xl leading-[1] md:text-5xl">Uma história feita à mão.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
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
            <Reveal delay={180}>
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

        <div className="mt-24 grid gap-12 border-t border-border pt-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <video
              className="h-[32rem] w-full object-cover"
              poster="/media/client/sobre-beto.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Beto Loureiro shapeando uma prancha"
            >
              <source src="/media/client/sobre-beto.mp4" type="video/mp4" />
            </video>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-primary">O olhar de quem faz</p>
              <h3 className="mt-4 text-3xl leading-none md:text-4xl">Da marcenaria para o mar.</h3>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Beto cresceu na mesma rua onde a fábrica funciona até hoje. Entre fins de semana nas
                praias do Guarujá, as aulas de educação física no Posto 2 e as ferramentas da
                marcenaria da família, começou ainda criança o interesse pelo surf.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {milestones.map((item, index) => (
                <Reveal key={item.year} delay={index * 80}>
                  <article className="h-full border-l-2 border-primary bg-muted/60 p-5">
                    <p className="font-display text-2xl text-primary">{item.year}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 border-t border-border pt-16 md:grid-cols-2">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.title} delay={index * 100}>
              <article className="overflow-hidden bg-muted">
                <img
                  src={chapter.image}
                  alt={chapter.alt}
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />
                <div className="p-7">
                  <p className="eyebrow text-primary">História</p>
                  <h3 className="mt-3 text-2xl">{chapter.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {chapter.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
