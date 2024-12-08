import {
  Clock,
  Monitor,
  PanelsLeftRight,
  Settings,
  TreeDeciduous,
} from "lucide-react";
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
        image: "/social_proof/Cubekit.svg",
        altText: "Cubekit Logo",
      },
      {
        image: "/social_proof/EasyTax.svg",
        altText: "EasyTax Logo",
      },
      {
        image: "/social_proof/Eclipseful.svg",
        altText: "Eclipseful Logo",
      },
      {
        image: "/social_proof/Eightball.svg",
        altText: "Eightball Logo",
      },
      {
        image: "/social_proof/Elasticware.svg",
        altText: "Elasticware Logo",
      },
      {
        image: "/social_proof/Ennlabs.svg",
        altText: "Ennlabs Logo",
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
        icon: TreeDeciduous,
        heading: "Tree-planting program integration",
        body: "Every survey completion contributes to planting a tree. Simple and impactful.",
        image: null,
      },
      {
        icon: Clock,
        heading: "Real-time survey results",
        body: "Monitor survey responses as they come in, ensuring timely feedback analysis.",
        image: null,
      },
      {
        icon: Settings,
        heading: "Mobile-friendly design",
        body: "Ensure seamless user experiences with fully responsive surveys for any device.",
        image: null,
      },
      {
        icon: Monitor,
        heading: "Automated follow-ups",
        body: "Engage customers post-survey with automated emails and personalized recommendations.",
        image: null,
      },
    ],
  },
  pricing: {
    heading: "Pricing",
    subheading: "Choose a plan that works for you.",
  },
  frequentlyAskedQuestions: {
    heading: "Frequently asked questions",
    subheading:
      "Considering SurveySprout? Explore our FAQ section for answers to common questions.",
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
      {
        question: "What platforms does SurveySprout integrate with?",
        answer:
          "SurveySprout integrates with major e-commerce platforms like Shopify, WooCommerce, and Magento, as well as popular CRMs and analytics tools.",
      },
      {
        question: "How does the analytics dashboard work?",
        answer:
          "Our analytics dashboard provides detailed insights into survey responses, trends, and customer feedback, enabling you to make data-driven decisions.",
      },
      {
        question: "What types of surveys can I create?",
        answer:
          "SurveySprout supports various survey types, including multiple-choice, Likert scale, open-ended, and rating-based surveys, catering to diverse feedback needs.",
      },
      {
        question: "Is my customer data secure with SurveySprout?",
        answer:
          "Yes, we prioritize data security with end-to-end encryption and compliance with global privacy standards like GDPR and CCPA.",
      },
      {
        question: "How much does SurveySprout cost?",
        answer:
          "We offer flexible pricing plans tailored to your business size and needs. Visit our pricing page for detailed information on available options.",
      },
      {
        question: "Can I track the tree-planting impact of my surveys?",
        answer:
          "Yes, we provide detailed reports on the number of trees planted through your surveys, so you can see the environmental impact you're making.",
      },
      {
        question: "Do you offer customer support?",
        answer:
          "Absolutely! Our dedicated support team is available 24/7 to assist with any questions or issues you may have.",
      },
    ],
  },
};
