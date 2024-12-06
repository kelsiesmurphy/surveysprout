import { Metadata } from "next";
import SocialProof from "../components/index/social-proof";
import Hero from "../components/index/hero";
import KeyFeatures from "../components/index/key-features";
import Features from "../components/index/features";
import Pricing from "../components/index/pricing";
import FrequentlyAskedQuestions from "../components/index/frequently-asked-questions";


export const metadata: Metadata = {
  title: "Home | SurveySprout",
  description:
    "SurveySprout is a post-purchase survey tool with a focus on sustainability.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <KeyFeatures />
      <Features />
      <Pricing />
      <FrequentlyAskedQuestions />
    </>
  );
}
