import { PricingSection } from "~/src/content/landing-page";

export default function Pricing({ content }: { content: PricingSection }) {
  return (
    <section className="container flex flex-col gap-6 items-center py-16 md:py-24">
      <h2 className="text-3xl md:text-6xl font-semibold">{content.heading}</h2>
      <h2 className="text-muted-foreground md:text-xl">{content.subheading}</h2>
    </section>
  );
}
