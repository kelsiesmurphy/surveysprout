import { createElement } from "react";
import { FeaturesSection } from "~/src/content/landing-page";
import { Card } from "@repo/ui/components/ui/card";

export default function KeyFeatures({ content }: { content: FeaturesSection }) {
  return (
    <section className="container flex flex-col gap-24 items-center md:gap-32 py-16 md:py-48">
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
      <ul className="w-full space-y-24 md:space-y-32">
        {content.features.map((feature) => {
          return (
            <li className="flex gap-12 md:gap-24 justify-center items-center flex-wrap even:flex-row-reverse">
              <div className="max-w-md space-y-4 md:space-y-6">
                <Card className="p-3.5 border shadow-sm w-min">
                  {createElement(feature.icon)}
                </Card>
                <h3 className="text-2xl md:text-4xl font-semibold">{feature.heading}</h3>
                <p className="md:text-xl">{feature.body}</p>
              </div>
              <div className="bg-secondary aspect-square rounded-2xl min-w-[200px] flex-1 max-w-xl"></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
