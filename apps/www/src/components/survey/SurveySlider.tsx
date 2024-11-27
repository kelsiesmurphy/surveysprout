import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@repo/ui/components/ui/form";
import { Slider } from "@repo/ui/components/ui/slider";
import { UseFormReturn } from "react-hook-form";
import { Question } from "~/src/content/SurveyQuestions";
import { SurveyForm } from "~/src/lib/schema";

export default function SurveySlider({
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
        <FormItem className="h-full flex flex-col gap-8 justify-center">
          <p className="text-center flex justify-center w-full text-3xl font-semibold">
            {form.getValues(`${question.fieldName}.answer`)}
          </p>
          <FormControl>
            <Slider
              value={[Number(field.value.answer)]}
              min={0}
              max={10}
              step={1}
              onValueChange={(value) => {
                form.setValue(question.fieldName, {
                  ...form.watch(question.fieldName),
                  answer: value[0]?.toString(),
                });
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
