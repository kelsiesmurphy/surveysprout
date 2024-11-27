import {
  Banana,
  Ear,
  LucideIcon,
  MessageCircleQuestion,
  Phone,
  Squirrel,
  Users,
} from "lucide-react";
import { SurveyForm } from "../lib/schema";

export type SurveyFormFieldName = keyof SurveyForm;

export type Question = {
  id: number;
  fieldName: SurveyFormFieldName;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  questionType: "Options" | "Text" | "Slider";
  options?: { name: string; image?: string; order: number }[];
  allowOther: boolean;
};

export const questions: Question[] = [
  {
    id: 0,
    fieldName: "q1",
    title: "How did you hear about us?",
    subtitle: "Select one option",
    icon: Squirrel,
    questionType: "Options",
    options: [
      {
        name: "Instagram",
        image:
          "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/instagram.svg?t=2024-11-23T13%3A36%3A29.899Z",
        order: 0,
      },
      {
        name: "Facebook",
        image:
          "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/facebook.svg?t=2024-11-23T13%3A36%3A50.510Z",
        order: 1,
      },
      {
        name: "X (formerly Twitter)",
        image:
          "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/x.svg?t=2024-11-23T13%3A37%3A35.875Z",
        order: 2,
      },
      {
        name: "TikTok",
        image:
          "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/tiktok.svg?t=2024-11-23T13%3A37%3A53.585Z",
        order: 3,
      },
      {
        name: "LinkedIn",
        image:
          "https://cothfwilejjjgulziyfd.supabase.co/storage/v1/object/public/social_logos/linkedin.svg?t=2024-11-23T13%3A38%3A21.065Z",
        order: 4,
      },
    ],
    allowOther: true
  },
  {
    id: 1,
    fieldName: "q2",
    title: "Could you give more details?",
    subtitle: "Tell us more about how you found us?",
    icon: Phone,
    questionType: "Text",
    allowOther: false
  },
  {
    id: 2,
    fieldName: "q3",
    title: "What about our products appeal to you?",
    subtitle: "Select one option",
    icon: Banana,
    questionType: "Options",
    options: [
      { name: "Our mission", order: 0 },
      { name: "Our shipping options", order: 1 },
    ],
    allowOther: true
  },
  {
    id: 3,
    fieldName: "q4",
    title: "When did you first hear about us?",
    subtitle: "Select one option",
    icon: Ear,
    questionType: "Options",
    options: [
      { name: "Today", order: 0 },
      { name: "In the past week", order: 1 },
      { name: "Over a week ago", order: 2 },
    ],
    allowOther: true
  },
  {
    id: 4,
    fieldName: "q5",
    title: "Who is this purchase for?",
    subtitle: "Select one option",
    icon: MessageCircleQuestion,
    questionType: "Options",
    options: [
      { name: "Myself", order: 0 },
      { name: "Friend or family", order: 1 },
      { name: "Coworker or client", order: 1 },
    ],
    allowOther: true
  },
  {
    id: 5,
    fieldName: "q6",
    title: "Would you recommend us to a friend?",
    subtitle: "Move the slider between 1 and 10",
    icon: Users,
    questionType: "Slider",
    allowOther: false
  },
];
