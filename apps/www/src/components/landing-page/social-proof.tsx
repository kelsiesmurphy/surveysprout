import { SocialProofSection } from "~/src/content/landing-page";

export default function SocialProof({ content }: { content: SocialProofSection }) {
  return (
    <section className="container flex flex-col gap-6 text-center items-center py-16 md:py-48">
      <h2 className="text-muted-foreground md:text-xl">{content.heading}</h2>
    </section>
  )
}
