"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Slider } from "@repo/ui/components/ui/slider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@repo/ui/components/ui/form";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Button } from "@repo/ui/components/ui/button";

const surveySchema = z.object({
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

type SurveyForm = z.infer<typeof surveySchema>;

export default function Survey() {
  const form = useForm<SurveyForm>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      q6: 5,
    },
  });

  const onSubmit = (data: SurveyForm) => {
    console.log(data);
  };

  const options = [
    { name: "Today", order: 0 },
    { name: "In the past week", order: 1 },
    { name: "Over a week ago", order: 1 },
  ];

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Survey</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Question 1 */}
          <div>
            <label className="block font-semibold mb-2">Question 1</label>
            <div className="space-y-2">
              <ul className="w-full space-y-5">
                {options
                  .sort(
                    (a: { order: number }, b: { order: number }) =>
                      a.order - b.order,
                  )
                  .map((option, index: number) => {
                    const isSelected = form.watch("q1") === option.name;
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
                            form.setValue("q1", option.name);
                          }}
                        >
                          <p className="font-semibold">{option.name}</p>
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
                  })}
              </ul>

              <div className="w-full text-left space-y-1.5">
                <Textarea
                  maxLength={100}
                  placeholder="Other (specify)"
                  {...form.register("q1_other")}
                  className={`w-full p-4 border rounded-xl shadow-sm`}
                />
                <p className="text-sm text-muted-foreground">
                  {100 - (form.watch("q1_other")?.length || 0)} characters left
                </p>
              </div>
            </div>
            {form.formState.errors.q1 && (
              <p className="text-red-500">{form.formState.errors.q1.message}</p>
            )}
          </div>

          {/* Question 2 */}
          <div>
            <label className="block font-semibold mb-2">Question 2</label>
            <div className="w-full text-left space-y-1.5">
              <Textarea
                maxLength={100}
                placeholder="Other (specify)"
                {...form.register("q2")}
                className={`w-full p-4 border rounded-xl shadow-sm`}
              />
              <p className="text-sm text-muted-foreground">
                {100 - (form.watch("q2")?.length || 0)} characters left
              </p>
            </div>
            {form.formState.errors.q2 && (
              <p className="text-red-500">{form.formState.errors.q2.message}</p>
            )}
          </div>

          {/* Question 3 */}
          <div>
            <label className="block font-semibold mb-2">Question 3</label>
            <div className="space-y-2">
              <label>
                <input type="radio" value="Option 1" {...form.register("q3")} />{" "}
                Option 1
              </label>
              <label>
                <input type="radio" value="Option 2" {...form.register("q3")} />{" "}
                Option 2
              </label>
              <div className="w-full text-left space-y-1.5">
                <Textarea
                  maxLength={100}
                  placeholder="Other (specify)"
                  {...form.register("q3_other")}
                  className={`w-full p-4 border rounded-xl shadow-sm`}
                />
                <p className="text-sm text-muted-foreground">
                  {100 - (form.watch("q3_other")?.length || 0)} characters left
                </p>
              </div>
            </div>
            {form.formState.errors.q3 && (
              <p className="text-red-500">{form.formState.errors.q3.message}</p>
            )}
          </div>

          {/* Question 4 */}
          <div>
            <label className="block font-semibold mb-2">Question 4</label>
            <div className="space-y-2">
              <label>
                <input type="radio" value="Option 1" {...form.register("q4")} />{" "}
                Option 1
              </label>
              <label>
                <input type="radio" value="Option 2" {...form.register("q4")} />{" "}
                Option 2
              </label>
            </div>
            {form.formState.errors.q4 && (
              <p className="text-red-500">{form.formState.errors.q4.message}</p>
            )}
          </div>

          {/* Question 5 */}
          <div>
            <label className="block font-semibold mb-2">Question 5</label>
            <div className="space-y-2">
              <label>
                <input type="radio" value="Option 1" {...form.register("q5")} />{" "}
                Option 1
              </label>
              <label>
                <input type="radio" value="Option 2" {...form.register("q5")} />{" "}
                Option 2
              </label>
              <div className="w-full text-left space-y-1.5">
                <Textarea
                  maxLength={100}
                  placeholder="Other (specify)"
                  {...form.register("q5_other")}
                  className={`w-full p-4 border rounded-xl shadow-sm`}
                />
                <p className="text-sm text-muted-foreground">
                  {100 - (form.watch("q5_other")?.length || 0)} characters left
                </p>
              </div>
            </div>
            {form.formState.errors.q5 && (
              <p className="text-red-500">{form.formState.errors.q5.message}</p>
            )}
          </div>

          {/* Question 6 */}
          <div>
            <label className="block font-semibold mb-2">Question 6</label>
            <FormField
              control={form.control}
              name="q6"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Slider: {JSON.stringify(form.getValues("q6"))}
                  </FormLabel>
                  <FormControl>
                    <Slider
                      value={[field.value]}
                      min={0}
                      max={10}
                      step={1}
                      onValueChange={(value) => {
                        form.setValue(
                          "q6",
                          value[0] != undefined ? value[0] : 5,
                        );
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {form.formState.errors.q6 && (
              <p className="text-red-500">{form.formState.errors.q6.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
}
