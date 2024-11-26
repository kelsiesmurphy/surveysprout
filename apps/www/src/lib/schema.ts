import { z } from "zod";

export const SurveySchema = z.object({
  q1: z.string().optional(),
  q1_other: z.string().optional(),
  q2: z.string().optional(),
  q3: z.string().optional(),
  q3_other: z.string().optional(),
  q4: z.string().optional(),
  q5: z.string().optional(),
  q5_other: z.string().optional(),
  q6: z.number().min(1).max(10, "Please rate between 1 and 10"),
});

export type SurveyForm = z.infer<typeof SurveySchema>;
