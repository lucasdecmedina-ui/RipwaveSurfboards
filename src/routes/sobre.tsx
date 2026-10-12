import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/ripwave/About";
import { PageFrame } from "@/components/ripwave/PageFrame";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Ripwave | Ripwave Surfboards" },
      {
        name: "description",
        content: "Conheça a história da Ripwave e do shaper Beto Loureiro em Santos.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame
      eyebrow="A Ripwave"
      title="Uma história feita à mão."
      intro="Conheça a trajetória de Beto Loureiro e de uma fábrica que ajudou a contar a história do surf em Santos."
    >
      <About />
    </PageFrame>
  );
}
