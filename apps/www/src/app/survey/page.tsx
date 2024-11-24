"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { FormDataSchema } from "~/src/lib/schema";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import SurveyPagination from "~/src/components/survey/SurveyPagination";
import { z } from "zod";
import {
  Banana,
  Ear,
  LucideIcon,
  MessageCircleQuestion,
  Phone,
  Squirrel,
  Users,
} from "lucide-react";
import React from "react";
import Lenis from "lenis";
import SocialOptions from "~/src/components/survey/SocialOptions";
import Link from "next/link";
import Options from "~/src/components/survey/Options";
import TextAreaOther from "~/src/components/survey/TextAreaOther";
import SliderScreen from "~/src/components/survey/Slider";
import { useRouter } from "next/navigation";
import SurveyStart from "~/src/components/survey/SurveyStart";

type Inputs = z.infer<typeof FormDataSchema>;

export type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  fields: string[];
};

export default function SurveyPage() {
  const router = useRouter();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

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
      icon: Squirrel,
      fields: ["other"],
    },
    {
      id: 1,
      title: "Could you give more details?",
      subtitle: "Tell us more about how you found us?",
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
      subtitle: "Move the slider between 1 and 10",
      icon: Users,
      fields: ["other"],
    },
  ];
  const [currentStep, setCurrentStep] = useState<Step | null>(null);

  const methods = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    methods.reset();
  };

  const next = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (currentStep != null) {
      const fields = steps[currentStep.id]?.fields;
      const isValid = await methods.trigger(fields as (keyof Inputs)[], {
        shouldFocus: true,
      });

      if (!isValid) return;

      const nextStep = steps[currentStep.id + 1];
      if (nextStep) {
        setCurrentStep(nextStep);
      } else {
        console.log("Submitting form...");
        await methods.handleSubmit(processForm)();
        router.push("/survey-complete");
      }

      lenisRef.current?.scrollTo(0);
    }
  };

  return (
    <FormProvider {...methods}>
      <section className="min-h-screen text-primary flex justify-center py-12 md:pt-40">
        <form className="gap-10 flex-1 px-4 max-w-sm text-center flex flex-col">
          {currentStep ? (
            <>
              <div className="flex-1 mb-32 md:mb-60 flex flex-col items-center space-y-6">
                <div className="p-3.5 rounded-xl border shadow-sm">
                  {React.createElement(currentStep.icon)}
                </div>
                <div className="space-y-2">
                  <h2 className="font-semibold text-2xl">
                    {currentStep.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {currentStep.subtitle}
                  </p>
                </div>
                {currentStep.id === 0 && <SocialOptions />}
                {currentStep.id === 1 && (
                  <TextAreaOther
                    tallTextArea
                    setSelectedOption={undefined}
                    customOtherFieldText="e.g. I saw an advert on Instagram for this product"
                  />
                )}
                {currentStep.id === 2 && (
                  <Options
                    options={[
                      { name: "Our mission", order: 0 },
                      { name: "Our shipping options", order: 1 },
                    ]}
                    includeOtherField
                  />
                )}
                {currentStep.id === 3 && (
                  <Options
                    options={[
                      { name: "Today", order: 0 },
                      { name: "In the past week", order: 1 },
                      { name: "Over a week ago", order: 1 },
                    ]}
                  />
                )}
                {currentStep.id === 4 && (
                  <Options
                    options={[
                      { name: "Myself", order: 0 },
                      { name: "Friend or family", order: 1 },
                      { name: "Coworker or client", order: 1 },
                    ]}
                    includeOtherField
                    customOtherFieldText="None of these? Let us know"
                  />
                )}
                {currentStep.id === 5 && <SliderScreen />}
              </div>
              <div className="fixed bg-background px-4 bottom-0 w-full max-w-sm text-center flex flex-col gap-4 md:gap-8 pb-5 md:pb-24">
                <div className="w-full h-4 -mt-4 bg-gradient-to-t from-background" />
                <Button className="w-full" onClick={(e) => next(e)}>
                  Continue
                </Button>
                <SurveyPagination steps={steps} currentStep={currentStep} />
                <p className="text-xs text-muted-foreground">
                  Powered by{" "}
                  <Button
                    className="text-green-900 font-medium p-0 h-min text-xs"
                    variant="link"
                    asChild
                  >
                    <Link href="/">SurveySprout</Link>
                  </Button>
                </p>
              </div>
            </>
          ) : (
            <SurveyStart step={steps[0]} setCurrentStep={setCurrentStep} />
          )}
        </form>
      </section>
    </FormProvider>
  );
}
