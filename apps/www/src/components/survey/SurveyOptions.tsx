/* eslint-disable @next/next/no-img-element */
import { Button } from "@repo/ui/components/ui/button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
} from "@repo/ui/components/ui/form";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { Question } from "~/src/content/SurveyQuestions";
import { SurveyForm } from "~/src/lib/schema";

export default function SurveyOptions({
  form,
  question,
}: {
  form: UseFormReturn<SurveyForm, any, undefined>;
  question: Question;
}) {
  return (
    <>
      <FormField
        control={form.control}
        name={question.fieldName}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <ul className="w-full space-y-5">
                {question.options &&
                  question.options
                    .sort(
                      (a: { order: number }, b: { order: number }) =>
                        a.order - b.order,
                    )
                    .map(
                      (
                        option: { name: string; image?: string; order: number },
                        index: number,
                      ) => {
                        const isSelected = field.value === option.name;
                        return (
                          <li key={index}>
                            <Button
                              variant="outline"
                              size="lg"
                              className={`shadow-sm w-full justify-between h-auto rounded-xl flex items-center gap-3 py-6 px-5 ${
                                isSelected &&
                                "bg-primary/5 hover:bg-primary/10 border-primary"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                if (
                                  form.watch(question.fieldName) === option.name
                                ) {
                                  form.setValue(question.fieldName, null);
                                } else {
                                  form.setValue(
                                    question.fieldName,
                                    option.name,
                                  );
                                }
                              }}
                            >
                              <div className="flex gap-3 items-center">
                                {option.image && (
                                  <img
                                    className="h-8 w-8"
                                    alt={`Logo for ${option.name}`}
                                    src={option.image}
                                  />
                                )}
                                <p className="font-semibold">{option.name}</p>
                              </div>
                              <div
                                className={`h-4 w-4 rounded-full flex justify-center items-center transition-colors duration-200 ${
                                  isSelected ? "bg-primary" : "border"
                                }`}
                              >
                                {isSelected && (
                                  <div className="rounded-full h-1.5 w-1.5 bg-background" />
                                )}
                              </div>
                            </Button>
                          </li>
                        );
                      },
                    )}
              </ul>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {question.allowOther && (
        <FormField
          control={form.control}
          name={`${question.fieldName}_other` as keyof SurveyForm}
          render={({ field }) => (
            <FormItem>
              <FormControl className="w-full text-left space-y-1.5">
                <Textarea
                  className="rounded-xl"
                  maxLength={100}
                  placeholder="Other (specify)"
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
      )}
    </>
  );
}
