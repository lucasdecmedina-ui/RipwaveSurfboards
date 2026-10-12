import { createFileRoute, notFound } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import { BoardViewer } from "@/components/ripwave/BoardViewer";
import { CatalogFrame } from "@/components/ripwave/CatalogFrame";
import { getBoardCategory, getBoardModel } from "@/data/catalog";

export const Route = createFileRoute("/pranchas/$categoria/$modelo")({
  beforeLoad: ({ params }) => {
    if (!getBoardModel(params.categoria, params.modelo)) throw notFound();
  },
  component: ModelPage,
});

function ModelPage() {
  const { categoria, modelo } = Route.useParams();
  const category = getBoardCategory(categoria);
  const model = getBoardModel(categoria, modelo);

  if (!category || !model) return null;

  return (
    <CatalogFrame
      eyebrow={category.name}
      title={model.name}
      backHref={`/pranchas/${category.slug}`}
      backLabel={`Voltar para ${category.name}`}
    >
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            {model.images && model.images.length > 1 ? (
              <BoardViewer images={model.images} modelName={model.name} />
            ) : (
              <div className="model-graphic relative min-h-96 overflow-hidden bg-muted">
                <div
                  className="absolute inset-0"
                  style={{ "--model-index": model.name.length } as CSSProperties}
                  aria-hidden
                >
                  <span className="absolute top-10 left-10 font-display text-8xl text-sand/20">
                    RW
                  </span>
                  <span className="absolute right-1/4 bottom-10 h-64 w-16 rotate-[28deg] rounded-full border-2 border-primary bg-sand/10" />
                </div>
              </div>
            )}
          </div>
          <div>
            <p className="eyebrow text-foreground/55">O que o Beto diz</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">{model.description}</p>
            <dl className="mt-8 grid gap-4 border-l-2 border-primary pl-5 text-foreground/75 sm:grid-cols-3">
              <div>
                <dt className="eyebrow text-foreground/50">Rabeta</dt>
                <dd className="mt-1 text-sm leading-relaxed">{model.specifications.tail}</dd>
              </div>
              <div>
                <dt className="eyebrow text-foreground/50">Setup</dt>
                <dd className="mt-1 text-sm leading-relaxed">{model.specifications.setup}</dd>
              </div>
              <div>
                <dt className="eyebrow text-foreground/50">Onda</dt>
                <dd className="mt-1 text-sm leading-relaxed">{model.specifications.waves}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <a
            href={`https://wa.me/5513991672772?text=${encodeURIComponent(`Olá, quero pedir uma ${model.name}.`)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-7 py-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> Peça a sua
          </a>
          <p className="mt-10 eyebrow text-foreground/55">Medidas disponíveis</p>
          <div className="mt-5 overflow-x-auto border border-navy/15">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-navy text-sand">
                <tr className="text-xs tracking-[0.18em] uppercase">
                  <th className="px-5 py-4 font-semibold">Tamanho</th>
                  <th className="px-5 py-4 font-semibold">Largura</th>
                  <th className="px-5 py-4 font-semibold">Flutuação</th>
                  <th className="px-5 py-4 font-semibold">Volume</th>
                </tr>
              </thead>
              <tbody>
                {model.sizes.map((boardSize) => (
                  <tr
                    key={boardSize.size}
                    className="border-t border-navy/10 text-sm text-foreground/80"
                  >
                    <td className="px-5 py-4 font-semibold text-foreground">{boardSize.size}</td>
                    <td className="px-5 py-4">{boardSize.width}</td>
                    <td className="px-5 py-4">{boardSize.fluctuation}</td>
                    <td className="px-5 py-4">{boardSize.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </CatalogFrame>
  );
}
