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
  });

  const onSubmit = (data: SurveyForm) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Survey</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Question 1 */}
          <div>
            <label className="block font-semibold mb-2">Question 1</label>
            <div className="space-y-2">
              <label>
                <input type="radio" value="Option 1" {...form.register("q1")} />{" "}
                Option 1
              </label>
              <label>
                <input type="radio" value="Option 2" {...form.register("q1")} />{" "}
                Option 2
              </label>
              <label>
                <input type="radio" value="Option 3" {...form.register("q1")} />{" "}
                Option 3
              </label>
              <textarea
                placeholder="Other (specify)"
                {...form.register("q1_other")}
                className="border w-full p-2"
              />
            </div>
            {form.formState.errors.q1 && (
              <p className="text-red-500">{form.formState.errors.q1.message}</p>
            )}
          </div>

          {/* Question 2 */}
          <div>
            <label className="block font-semibold mb-2">Question 2</label>
            <textarea {...form.register("q2")} className="border w-full p-2" />
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
              <textarea
                placeholder="Other (specify)"
                {...form.register("q3_other")}
                className="border w-full p-2"
              />
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
              <textarea
                placeholder="Other (specify)"
                {...form.register("q5_other")}
                className="border w-full p-2"
              />
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
                  <FormLabel>Slider</FormLabel>
                  <FormControl>
                    <Slider
                      value={[field.value]}
                      onValueChange={(value) => {
                        form.setValue("q6", value[0] ? value[0] : 5);
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
