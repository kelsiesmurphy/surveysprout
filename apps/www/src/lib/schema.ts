import { z } from "zod";

export const FormDataSchema = z.object({
  socialOption: z.string().min(1, "Please select an option or specify 'Other'"),
});
