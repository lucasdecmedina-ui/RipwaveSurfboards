import { useState } from "react";
import { ChevronDown, MapPin, MessageCircle, PackageCheck, Sparkles, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

const WHATSAPP = "https://wa.me/5513991672772?text=Olá%2C%20gostaria%20de%20falar%20com%20o%20Beto";
const MAPS = "https://maps.app.goo.gl/cSth9MhdkcUW19WM7";

const steps = [
  {
    n: "01",
    t: "Conversa",
    d: "A gente entende seu momento no surf, nível, peso, ondas e o que você busca na próxima prancha.",
  },
  {
    n: "02",
    t: "Proposta",
    d: "Com base na conversa, Beto indica shape, medidas e o material mais adequado para o seu surf.",
  },
  {
    n: "03",
    t: "Produção",
    d: "A prancha é feita sob medida. Prazos são combinados e acompanhados até a prancha ficar pronta.",
  },
  {
    n: "04",
    t: "Na água",
    d: "Você recebe uma prancha pensada para remar, entrar na onda e responder ao seu surf.",
  },
];

const faq = [
  {
    q: "Quanto tempo leva para minha prancha ficar pronta?",
    a: "Em média 3 semanas, mas isso varia de acordo com o modelo e a fila de encomendas do momento. O prazo fica combinado com você logo no primeiro papo.",
  },
  {
    q: "EPS ou PU: qual eu escolho?",
    a: "Depende do seu nível, peso e das ondas que você mais surfa. Beto ajuda a decidir na conversa inicial; se você já tem preferência, é só avisar.",
  },
  {
    q: "Posso deixar minha prancha usada para venda enquanto a nova fica pronta?",
    a: "Pode. A gente avalia o estado dela e deixa disponível para os nossos clientes. Se vender, repassamos o valor combinado.",
  },
  {
    q: "Posso vender uma prancha usada sem encomendar uma nova?",
    a: "A gente também avalia. Dependendo do caso, anunciamos para os nossos clientes ou indicamos bons canais para você vender por conta própria.",
  },
  {
    q: "Fazem reparo de qualquer prancha?",
    a: "Fazemos reparos de qualquer marca. O ideal é passar na loja para avaliarmos o dano; se preferir, mande uma foto no WhatsApp para uma primeira olhada.",
  },
  {
    q: "Como funciona o reparo?",
    a: "A prancha é avaliada para entender o dano e definir o reparo. Depois, combinamos o serviço e avisamos quando ela estiver pronta para voltar à água.",
  },
  {
    q: "Vendem acessórios mesmo sem eu estar encomendando prancha?",
    a: "Sim. Leash, deck, quilhas, capas e parafina ficam disponíveis na loja para quem precisar, com ou sem encomenda.",
  },
];

export function Shaper() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="encomendas" className="surface-deep relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3 text-sand/70">
              <TribalLine className="w-24" />
              <span className="eyebrow">Encomendas</span>
            </div>
            <h2 className="mt-5 text-4xl leading-[1] text-sand md:text-5xl">
              Sua prancha começa aqui.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sand/70 md:text-lg">
              Quando você encomenda uma prancha na Ripwave, a conversa vem antes do shape. A gente
              quer entender como você surfa, onde costuma entrar no mar e o que espera sentir na
              próxima prancha.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-sand/70 md:text-lg">
              É a partir disso que o Beto propõe medidas, outline, rabeta e material. Prazo de
              produção e valores são combinados com clareza na conversa, de acordo com o projeto.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex bg-primary px-7 py-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Converse com o Beto
            </a>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/media/client/encomendas-conversa.jpg"
              alt="Atendimento personalizado na Ripwave"
              loading="lazy"
              width={1920}
              height={3413}
              className="h-[32rem] w-full object-cover shadow-[var(--shadow-deep)]"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="order-2 lg:order-1">
            <img
              src="/media/client/encomendas-pintura.jpg"
              alt="Prancha Ripwave em processo de pintura"
              loading="lazy"
              width={1920}
              height={2560}
              className="h-full max-h-[520px] w-full object-cover"
            />
          </Reveal>
          <div className="order-1 grid gap-6 sm:grid-cols-2 lg:order-2">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 100}>
                <div className="card-lift h-full border-l-2 border-primary/70 bg-sand/5 p-6">
                  <span className="font-display text-3xl text-primary">{step.n}</span>
                  <h3 className="mt-2 text-lg text-sand">{step.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/70">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <section className="mt-16 border-t border-sand/20 pt-12">
          <Reveal>
            <p className="eyebrow text-primary">Outros serviços</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/75">
              Além das encomendas, a Ripwave também realiza reparos de qualquer marca, tem alguns
              modelos pronta-entrega na loja física e acessórios para completar seu surf.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: Wrench, title: "Reparos", text: "Reparos em pranchas de qualquer marca." },
              {
                icon: PackageCheck,
                title: "Pronta-entrega",
                text: "Estoque variado disponível na loja.",
              },
              {
                icon: Sparkles,
                title: "Acessórios",
                text: "Leash, deck, quilhas, capas e parafina.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="card-lift border-l-2 border-primary bg-sand/5 p-6">
                  <Icon className="h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mt-5 text-xl text-sand">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/70">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-wrap gap-5">
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] text-sand uppercase hover:text-primary"
            >
              <MapPin className="h-4 w-4" aria-hidden /> Conheça a loja →
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] text-sand uppercase hover:text-primary"
            >
              Fale com a gente →
            </a>
          </Reveal>
        </section>

        <Reveal className="mt-20" delay={150}>
          <div className="border-t border-sand/20 pt-12">
            <p className="eyebrow text-primary">Perguntas frequentes</p>
            <div className="mt-6 divide-y divide-sand/15 border-t border-sand/15">
              {faq.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-sand"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen ? (
                      <p className="pb-5 text-sm leading-relaxed text-sand/70">{item.a}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
