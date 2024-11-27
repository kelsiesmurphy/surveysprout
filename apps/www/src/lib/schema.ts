import { z } from "zod";

export const SurveySchema = z.object({
  q1: z.object({
    answer: z.string().optional(),
    otherText: z.string().optional(),
  }),
  q2: z.object({
    answer: z.string().optional(),
    otherText: z.string().optional(),
  }),
  q3: z.object({
    answer: z.string().optional(),
    otherText: z.string().optional(),
  }),
  q4: z.object({
    answer: z.string().optional(),
    otherText: z.string().optional(),
  }),
  q5: z.object({
    answer: z.string().optional(),
    otherText: z.string().optional(),
  }),
  q6: z.object({
    answer: z.string().optional(),
    otherText: z.string().optional(),
  }),
});

export type SurveyForm = z.infer<typeof SurveySchema>;
