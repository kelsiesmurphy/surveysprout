"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import { useEffect, useState } from "react";
import { FormDataSchema } from "~/src/lib/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import SurveyPagination from "~/src/components/survey/SurveyPagination";
import { z } from "zod";
import {
  Banana,
  Ear,
  Key,
  LucideIcon,
  MessageCircleQuestion,
  Phone,
  Users,
} from "lucide-react";
import React from "react";
import Lenis from "lenis";

type Inputs = z.infer<typeof FormDataSchema>;

export type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  fields: string[];
};

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const steps: Step[] = [
    {
      id: 0,
      title: "How did you hear about us?",
      subtitle: "Select one option",
      icon: Key,
      fields: ["other"],
    },
    {
      id: 1,
      title: "Conditional Follow Up",
      subtitle: "Select one option",
      icon: Phone,
      fields: ["other"],
    },
    {
      id: 2,
      title: "What about our products appeal to you?",
      subtitle: "Select one option",
      icon: Banana,
      fields: ["other"],
    },
    {
      id: 3,
      title: "When did you first hear about us?",
      subtitle: "Select one option",
      icon: Ear,
      fields: ["other"],
    },
    {
      id: 4,
      title: "Who is this purchase for?",
      subtitle: "Select one option",
      icon: MessageCircleQuestion,
      fields: ["other"],
    },
    {
      id: 5,
      title: "Would you recommend us to a friend?",
      subtitle: "Select one option",
      icon: Users,
      fields: ["other"],
    },
  ];

  const [currentStep, setCurrentStep] = useState<Step>(steps[0]!);

  const { handleSubmit, reset, trigger } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  const next = async () => {
    if (!currentStep) return;

    const fields = steps[currentStep.id]?.fields;
    const isValid = await trigger(fields as (keyof Inputs)[], {
      shouldFocus: true,
    });

    if (!isValid) return;

    const nextStep = steps[currentStep.id + 1];
    if (nextStep) {
      setCurrentStep(nextStep);
    } else {
      console.log("Submitting form...");
      await handleSubmit(processForm)();
    }
  };

  return (
    <section className="min-h-screen text-primary flex justify-center py-12 md:pt-40">
      <form className="gap-10 flex-1 px-4 min-h-[1000px] max-w-sm text-center flex flex-col">
        <div className="flex-1 mb-32 md:mb-52 flex flex-col items-center space-y-6">
          <div className="p-3.5 rounded-xl border shadow-sm">
            {React.createElement(currentStep.icon)}
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-2xl">{currentStep.title}</h2>
            <p className="text-muted-foreground">{currentStep.subtitle}</p>
          </div>
        </div>
      </form>
      <div className="fixed bg-background px-4 bottom-0 w-full max-w-sm text-center flex flex-col gap-4 md:gap-8 pb-5 md:pb-24">
        <div className="w-full h-4 -mt-4 bg-gradient-to-t from-background" />
        <Button className="w-full" onClick={next}>
          Continue
        </Button>
        <SurveyPagination steps={steps} currentStep={currentStep} />
        <p className="text-xs text-muted-foreground">
          Powered by{" "}
          <Button
            className="text-green-900 font-medium p-0 h-min text-xs"
            variant="link"
          >
            SurveySprout
          </Button>
        </p>
      </div>
    </section>
  );
}
