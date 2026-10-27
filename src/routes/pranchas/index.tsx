import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CatalogFrame } from "@/components/ripwave/CatalogFrame";
import { WaveDivider } from "@/components/ripwave/WaveDivider";
import { boardCategories } from "@/data/catalog";

const categoryImages: Record<string, string> = {
  shortboards: "/media/client/categoria-shortboards.jpg",
  "fish-retro": "/media/client/categoria-fish-retro.jpg",
  fun: "/media/client/categoria-fun.jpg",
  longboards: "/media/client/categoria-longboards.jpg",
  "stand-up": "/media/client/categoria-stand-up.jpg",
};

export const Route = createFileRoute("/pranchas/")({
  head: () => ({
    meta: [
      { title: "Catálogo de Pranchas | Ripwave Surfboards" },
      {
        name: "description",
        content: "Conheça as categorias de pranchas Ripwave Surfboards.",
      },
    ],
  }),
  component: CatalogIndexPage,
});

function CatalogIndexPage() {
  return (
    <CatalogFrame eyebrow="Ripwave Surfboards" title="Catálogo de pranchas">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-5xl border-l-2 border-primary pl-6">
            <div>
              <p className="text-2xl leading-[1.05] text-foreground md:text-4xl">
                Cada modelo deste catálogo é uma referência: décadas de shape testado onda a onda,
                os formatos que funcionam de verdade e diferenciam a Ripwave.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Aqui você encontra pranchas que fizeram e fazem parte da história da Ripwave.
                Modelos que atravessaram gerações, foram ajustados ao longo do tempo e continuam
                servindo de base para quem busca uma prancha que realmente funcione na água.
              </p>
            </div>
            <div className="pt-2">
              <p className="text-base leading-relaxed text-primary">
                Se inspire nos modelos abaixo, ou venha já entender como funciona encomendar a sua.
              </p>
              <a
                href="/#encomendas"
                className="mt-6 inline-flex border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:text-primary"
              >
                Como encomendar →
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boardCategories.map((category, index) => (
              <Link
                key={category.slug}
                to="/pranchas/$categoria"
                params={{ categoria: category.slug }}
                className="group card-lift relative min-h-64 overflow-hidden border border-navy/15 bg-navy p-7"
              >
                <img
                  src={categoryImages[category.slug]}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-md"
                />
                <img
                  src={categoryImages[category.slug]}
                  alt={`Prancha ${category.name} em estúdio`}
                  className="absolute inset-0 h-full w-full scale-[1.22] object-contain transition-transform duration-700 group-hover:scale-[1.28]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/5" />
                <span className="relative z-10 font-display text-6xl leading-none text-sand/40">
                  0{index + 1}
                </span>
                <div className="absolute right-0 bottom-0 h-24 w-24 rounded-tl-full border-t border-l border-primary/70" />
                <div className="absolute right-5 bottom-5 h-14 w-14 rounded-tl-full border-t border-l border-primary/50" />
                <div className="absolute inset-x-7 bottom-7 z-10 flex items-end justify-between gap-4">
                  <h2 className="max-w-52 text-3xl leading-[0.9] text-sand">{category.name}</h2>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0" color="var(--navy)" />
      </section>
      <section className="bg-navy px-6 py-16 text-sand md:py-20">
        <div className="mx-auto max-w-6xl border-l-2 border-primary pl-6">
          <p className="eyebrow text-primary">Não sabe qual escolher?</p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-sand/80">
            Converse com a gente para entender qual modelo faz sentido para o seu surf.
          </p>
          <a
            href="https://wa.me/5513991672772?text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] text-sand uppercase hover:text-primary"
          >
            Conversar sobre uma prancha →
          </a>
        </div>
      </section>
    </CatalogFrame>
  );
}
