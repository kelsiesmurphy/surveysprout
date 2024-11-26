import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { Question } from "~/src/content/SurveyQuestions";
import { SurveyForm } from "~/src/lib/schema";

export default function SurveyText({
  form,
  question,
}: {
  form: UseFormReturn<SurveyForm, any, undefined>;
  question: Question;
}) {
  return (
    <FormField
      control={form.control}
      name={question.fieldName}
      render={({ field }) => (
        <FormItem>
          <FormControl className="w-full text-left space-y-1.5">
            <Textarea
              className="rounded-xl"
              maxLength={100}
              placeholder="e.g. I saw an advert on Instagram for this product"
              {...field}
            />
          </FormControl>
          <FormDescription>
            {100 - (field.value?.toString().length || 0)} characters left
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
