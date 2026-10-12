import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/ripwave/Contact";
import { PageFrame } from "@/components/ripwave/PageFrame";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Ripwave Surfboards" },
      { name: "description", content: "Entre em contato com a Ripwave Surfboards em Santos." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contato"
      title="Estamos por perto."
      intro="Fale com a Ripwave pelo WhatsApp, visite nossa fábrica em Santos ou encontre a gente nas redes."
    >
      <Contact />
    </PageFrame>
  );
}
