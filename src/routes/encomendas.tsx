import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/ripwave/Nav";
import { Shaper } from "@/components/ripwave/Shaper";
import { SiteFooter } from "@/components/ripwave/SiteFooter";

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
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main className="pt-16 md:pt-20">
        <Shaper />
      </main>
      <SiteFooter />
    </div>
  );
}
