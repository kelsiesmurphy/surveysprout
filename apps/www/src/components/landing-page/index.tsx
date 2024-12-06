"use client";

import React from "react";
import Features from "./features";
import FrequentlyAskedQuestions from "./frequently-asked-questions";
import Hero from "./hero";
import KeyFeatures from "./key-features";
import Pricing from "./pricing";
import SocialProof from "./social-proof";
import { landingPageContent as content } from "~/src/content/landing-page";
import useLenis from "@repo/shared/hooks/use-lenis";

export default function LandingPage() {
  useLenis();

  return (
    <>
      <Hero content={content.hero} />
      <SocialProof content={content.socialProof} />
      <KeyFeatures content={content.keyFeatures} />
      <Features content={content.features} />
      <Pricing content={content.pricing} />
      <FrequentlyAskedQuestions content={content.frequentlyAskedQuestions} />
    </>
  );
}
