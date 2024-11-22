"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import { useState } from "react";
import { FormDataSchema } from "~/src/lib/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import SurveyPagination from "~/src/components/survey/SurveyPagination";
import { z } from "zod";

type Inputs = z.infer<typeof FormDataSchema>;

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: "Step 1",
      name: "Personal Information",
      fields: ["firstName", "lastName", "email"],
    },
    {
      id: "Step 2",
      name: "Address",
      fields: ["country", "state", "city", "street", "zip"],
    },
    { id: "Step 3", name: "Complete" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep]?.fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    console.log(output)

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setCurrentStep((step) => step + 1);
      console.log(currentStep);
    }
  };

  return (
    <section className="min-h-screen text-primary flex justify-center py-12 md:pt-40">
      <form className="gap-10 flex-1 px-4 min-h-[1000px] max-w-sm text-center flex flex-col">
        <div className="flex-1 bg-red-400 mb-32 md:mb-52">
          <p>hi: {JSON.stringify(currentStep)}</p>
          <p>steps: {JSON.stringify(steps)}</p>
        </div>
      </form>
      <div className="fixed bg-background px-4 bottom-0 w-full max-w-sm text-center flex flex-col gap-4 pb-5 md:pb-24">
        <div className="w-full h-4 -mt-4 bg-gradient-to-t from-background" />
        <Button className="w-full" onClick={next}>
          Continue
        </Button>
        <SurveyPagination steps={steps} currentStep={currentStep} />
        <p className="text-xs text-muted-foreground">
          Powered by{" "}
          <Button
            className="text-green-900 font-medium p-0 text-xs"
            variant="link"
          >
            SurveySprout
          </Button>
        </p>
      </div>
    </section>
  );
}
