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
      text: "Disy v2.0 is now available",
      link: null,
    },
    heading: "Design effective products in Figma",
    subheading:
      "Disy is a minimalist Design System/UI Kit to help you build human-centered product experience.",
  },
  socialProof: {
    heading: "Used by designers from top companies",
    logos: [
      {
        image: "/path/to/logo1.png",
        altText: "Company 1 Logo",
      },
      {
        image: "/path/to/logo2.png",
        altText: "Company 2 Logo",
      },
    ],
  },
  keyFeatures: {
    headings: {
      lineOne: "Less reproducing.",
      lineTwo: "More designing.",
    },
    subheading:
      "Don’t waste time reinventing every component. Customize colors, typography, and layouts without starting from scratch.",
    features: [
      {
        icon: Settings,
        heading: "Streamlined component library",
        body: "Discover a vast collection of customizable advanced components.",
        image: null,
      },
      {
        icon: PanelsLeftRight,
        heading: "Flexible style customization",
        body: "Customize colors, typography, and layouts to align with your brand identity.",
        image: null,
      },
      {
        icon: Monitor,
        heading: "Dozens of samples to get you inspired",
        body: "Explore a collection of handmade design samples to spark your creativity.",
        image: null,
      },
    ],
  },
  features: {
    headings: {
      lineOne: "Everything you need.",
      lineTwo: "In a single file.",
    },
    subheading:
      "Thoughtful details, personalized design. Customize Disy to create a design system that embodies your project style.",
    features: [
      {
        icon: Settings,
        heading: "Large library of components",
        body: "Enjoy +2,000 handcrafted components and variants.",
        image: "",
      },
      {
        icon: PanelsLeftRight,
        heading: "4px grid system",
        body: "Leverage a consistent grid system for cohesive and scalable interfaces.",
        image: "",
      },
      {
        icon: Monitor,
        heading: "Ready-to-use layout samples",
        body: "Discover design possibilities with ready-to-use layout samples.",
        image: "",
      },
      {
        icon: Settings,
        heading: "Large library of components",
        body: "Enjoy +2,000 handcrafted components and variants.",
        image: "",
      },
      {
        icon: PanelsLeftRight,
        heading: "4px grid system",
        body: "Leverage a consistent grid system for cohesive and scalable interfaces.",
        image: "",
      },
      {
        icon: Monitor,
        heading: "Ready-to-use layout samples",
        body: "Discover design possibilities with ready-to-use layout samples.",
        image: "",
      },
    ],
  },
  pricing: {
    heading: "Pricing",
    subheading: "Pay once and get access to all content",
  },
  frequentlyAskedQuestions: {
    heading: "Frequently asked questions",
    subheading:
      "Considering Disy? Explore our FAQ section for answers to common questions about our UI kit.",
    questions: [
      {
        question: "What is the interest of this UI kit?",
        answer:
          "The interest of this UI kit lies in its ability to save time and effort for designers and developers. With a comprehensive set of pre-designed components, layouts, and styles, the kit allows for quick customization and reuse, ensuring consistency throughout projects. The UI kit offers extensive customization options, empowering users to align designs with their brand or project requirements. Detailed documentation is provided to assist users throughout the process. Overall, this UI kit streamlines workflow, maintains design consistency, and facilitates the delivery of high-quality user interfaces efficiently.",
      },
      {
        question: "What is the interest of this UI kit?",
        answer:
          "The interest of this UI kit lies in its ability to save time and effort for designers and developers. With a comprehensive set of pre-designed components, layouts, and styles, the kit allows for quick customization and reuse, ensuring consistency throughout projects. The UI kit offers extensive customization options, empowering users to align designs with their brand or project requirements. Detailed documentation is provided to assist users throughout the process. Overall, this UI kit streamlines workflow, maintains design consistency, and facilitates the delivery of high-quality user interfaces efficiently.",
      },
      {
        question: "What is the interest of this UI kit?",
        answer:
          "The interest of this UI kit lies in its ability to save time and effort for designers and developers. With a comprehensive set of pre-designed components, layouts, and styles, the kit allows for quick customization and reuse, ensuring consistency throughout projects. The UI kit offers extensive customization options, empowering users to align designs with their brand or project requirements. Detailed documentation is provided to assist users throughout the process. Overall, this UI kit streamlines workflow, maintains design consistency, and facilitates the delivery of high-quality user interfaces efficiently.",
      },
    ],
  },
};
