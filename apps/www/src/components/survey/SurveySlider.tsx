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
        <FormItem>
          <FormLabel className="text-center">
            Slider: {JSON.stringify(form.getValues(question.fieldName))}
          </FormLabel>
          <FormControl>
            <Slider
              value={[Number(field.value)]}
              min={0}
              max={10}
              step={1}
              onValueChange={(value) => {
                form.setValue(
                  question.fieldName,
                  value[0] != undefined ? value[0] : 5,
                );
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
