import { createElement } from "react";
import { FeaturesSection } from "~/src/content/landing-page";
import { Card } from "@repo/ui/components/ui/card";

export default function Features({ content }: { content: FeaturesSection }) {
  return (
    <section className="container flex flex-col gap-24 items-center md:gap-32 py-16 md:py-24">
      <div className="text-center flex flex-col gap-6 items-center max-w-2xl">
        <h2 className="text-3xl md:text-6xl/[4.5rem] font-semibold">
          <span className="text-muted-foreground">
            {content.headings.lineOne}
          </span>
          <br />
          {content.headings.lineTwo}
        </h2>
        <p className="text-muted-foreground md:text-xl max-w-lg">
          {content.subheading}
        </p>
      </div>
      <ul className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {content.features.map((feature, index) => {
          return (
            <li key={index}>
              <Card className="p-8 h-full rounded-3xl space-y-6 border-none shadow-none bg-secondary">
                {createElement(feature.icon)}
                <div className="space-y-1">
                  <h3 className="font-semibold">{feature.heading}</h3>
                  <p className="text-muted-foreground">{feature.body}</p>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
