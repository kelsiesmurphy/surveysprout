import React from "react";
import { HeroSection } from "~/src/content/landing-page";
import { Badge } from "@repo/ui/components/ui/badge";
import CTAButtons from "../cta-buttons";

export default function Hero({ content }: { content: HeroSection }) {
  return (
    <section className="flex container flex-col items-center text-center pt-24 pb-10">
      <div className="max-w-2xl flex flex-col items-center gap-8">
        <div className="p-1 pr-3 rounded-full flex gap-2 items-center bg-secondary">
          <Badge>{content.badge.subtext}</Badge>
          <p className="text-sm font-medium">{content.badge.text}</p>
        </div>
        <h1 className="text-4xl md:text-7xl font-semibold transition-all">
          {content.heading}
        </h1>
        <p className="text-muted-foreground max-w-lg md:text-xl transition-all">
          {content.subheading}
        </p>
        <CTAButtons isLargeButtons />
      </div>
    </section>
  );
}
