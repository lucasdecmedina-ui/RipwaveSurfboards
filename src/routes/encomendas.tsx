import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/ripwave/PageFrame";
import { Shaper } from "@/components/ripwave/Shaper";

export const Route = createFileRoute("/encomendas")({
  head: () => ({
    meta: [
      { title: "Encomendas | Ripwave Surfboards" },
      {
        name: "description",
        content: "Encomende uma prancha Ripwave feita sob medida com o shaper Beto Loureiro.",
      },
    ],
  }),
  component: OrdersPage,
});

function OrdersPage() {
  return (
    <PageFrame
      eyebrow="Encomendas"
      title="A sua próxima prancha começa aqui."
      intro="Cada prancha Ripwave nasce de uma conversa sobre o seu surf, as ondas que você frequenta e o que procura sentir dentro d'água."
    >
      <Shaper />
    </PageFrame>
  );
}
