import { Monitor, PanelsLeftRight, Settings } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Badge {
  subtext: string;
  text: string;
  link: string | null;
}

export interface HeroSection {
  badge: Badge;
  heading: string;
  subheading: string;
}

interface Logo {
  image: string;
  altText: string;
}

export interface SocialProofSection {
  heading: string;
  logos: Logo[];
}

interface Feature {
  icon: LucideIcon;
  heading: string;
  body: string;
  image: string | null;
}

export interface FeaturesSection {
  headings: {
    lineOne: string;
    lineTwo: string;
  };
  subheading: string;
  features: Feature[];
}

export interface PricingSection {
  heading: string;
  subheading: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  heading: string;
  subheading: string;
  questions: FAQ[];
}

interface LandingPageContent {
  hero: HeroSection;
  socialProof: SocialProofSection;
  keyFeatures: FeaturesSection;
  features: FeaturesSection;
  pricing: PricingSection;
  frequentlyAskedQuestions: FAQSection;
}

export const landingPageContent: LandingPageContent = {
  hero: {
    badge: {
      subtext: "New",
      text: "SurveySprout is here!",
      link: null,
    },
    heading: "Make every survey meaningful.",
    subheading:
      "SurveySprout turns post-purchase feedback into action. Delight your users with intuitive surveys and contribute to planting a tree with every completion.",
  },
  socialProof: {
    heading: "Trusted by eco-conscious businesses worldwide",
    logos: [
      {
        image: "/path/to/logo1.png",
        altText: "Eco Brand 1 Logo",
      },
      {
        image: "/path/to/logo2.png",
        altText: "Eco Brand 2 Logo",
      },
    ],
  },
  keyFeatures: {
    headings: {
      lineOne: "Engaging surveys.",
      lineTwo: "Real-world impact.",
    },
    subheading:
      "SurveySprout combines exceptional user experience with environmental stewardship. Gather valuable insights while making a difference.",
    features: [
      {
        icon: Settings,
        heading: "Post-purchase survey focus",
        body: "Optimize customer satisfaction with targeted post-purchase surveys.",
        image: null,
      },
      {
        icon: PanelsLeftRight,
        heading: "Effortless integration",
        body: "Seamlessly connect with your e-commerce platform for smooth data collection.",
        image: null,
      },
      {
        icon: Monitor,
        heading: "Beautiful, intuitive design",
        body: "Surveys your customers will enjoy completing.",
        image: null,
      },
    ],
  },
  features: {
    headings: {
      lineOne: "Insights you need.",
      lineTwo: "Impact you care about.",
    },
    subheading:
      "SurveySprout empowers businesses to grow their feedback strategies and contribute to a greener planet.",
    features: [
      {
        icon: Settings,
        heading: "Robust analytics dashboard",
        body: "Track responses and trends to continuously improve your offerings.",
        image: null,
      },
      {
        icon: PanelsLeftRight,
        heading: "Customizable survey themes",
        body: "Reflect your brand identity with tailored survey designs.",
        image: null,
      },
      {
        icon: Monitor,
        heading: "Tree-planting program integration",
        body: "Every survey completion plants a tree. Simple and impactful.",
        image: null,
      },
    ],
  },
  pricing: {
    heading: "Transparent pricing",
    subheading: "Choose a plan that scales with your growth.",
  },
  frequentlyAskedQuestions: {
    heading: "Got questions? We have answers.",
    subheading:
      "Learn more about SurveySprout's features, pricing, and impact in our FAQ section.",
    questions: [
      {
        question: "How does SurveySprout contribute to tree planting?",
        answer:
          "For every survey completed on our platform, we partner with reforestation programs to plant a tree in regions that need it most. It's part of our mission to combine actionable insights with sustainable impact.",
      },
      {
        question: "Is SurveySprout suitable for my small business?",
        answer:
          "Absolutely! Our platform is designed to be flexible, whether you're just starting out or managing a large-scale operation. SurveySprout grows with you.",
      },
      {
        question: "Can I customize the surveys?",
        answer:
          "Yes, you can fully customize survey themes, questions, and formats to align with your brand and goals.",
      },
    ],
  },
};
