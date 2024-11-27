"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form } from "@repo/ui/components/ui/form";

import { useEffect, useRef, useState } from "react";
import SurveyStart from "~/src/components/survey/SurveyStart";
import Lenis from "lenis";
import SurveyOptions from "~/src/components/survey/SurveyOptions";
import SurveyText from "~/src/components/survey/SurveyText";
import SurveySlider from "~/src/components/survey/SurveySlider";
import { Question, questions } from "~/src/content/SurveyQuestions";
import { SurveyForm, SurveySchema } from "~/src/lib/schema";
import SurveyFooter from "~/src/components/survey/SurveyFooter";
import SurveyHeader from "~/src/components/survey/SurveyHeader";
import SurveyError from "~/src/components/survey/SurveyError";

export default function SurveyPage() {
  const router = useRouter();
  const lenisRef = useRef<Lenis | null>(null);

  const [canContinue, setCanContinue] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const form = useForm<SurveyForm>({
    resolver: zodResolver(SurveySchema),
    defaultValues: {
      q1: null,
      q1_other: "",
      q2: "",
      q3: null,
      q3_other: "",
      q4: null,
      q5: null,
      q5_other: "",
      q6: 5,
    },
    mode: "onChange",
  });

  const processForm: SubmitHandler<SurveyForm> = (data) => {
    console.log(data);
    form.reset();
  };

  const next = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (currentQuestion != null) {
      const nextQuestion = questions[currentQuestion.id + 1];
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
      } else {
        console.log("Submitting form...");
        await form.handleSubmit(processForm)();
        router.push("/survey-complete");
      }

      lenisRef.current?.scrollTo(0);
    }
  };

  return (
    <Form {...form}>
      <p className="fixed">
        form: {JSON.stringify(form.watch())}
        <br />
        <br />
        currentQuestion: {JSON.stringify(currentQuestion?.fieldName)}
      </p>
      <section className="min-h-screen text-primary flex justify-center py-12 md:pt-40">
        <form className="gap-10 flex-1 px-4 max-w-sm text-center flex flex-col">
          {currentQuestion ? (
            <>
              <div className="flex-1 mb-32 md:mb-60 flex flex-col items-center space-y-6">
                <SurveyHeader currentQuestion={currentQuestion} />
                {questions.map((question: Question) => {
                  if (question === currentQuestion)
                    switch (question.questionType) {
                      case "Options":
                        return (
                          <div
                            className="w-full text-left space-y-5"
                            key={question.id}
                          >
                            <SurveyOptions form={form} question={question} />
                          </div>
                        );
                      case "Text":
                        return (
                          <div
                            className="w-full text-left space-y-5"
                            key={question.id}
                          >
                            <SurveyText form={form} question={question} />
                          </div>
                        );
                      case "Slider":
                        return (
                          <div
                            className="w-full text-left space-y-5"
                            key={question.id}
                          >
                            <SurveySlider form={form} question={question} />
                          </div>
                        );
                      default:
                        <div className="w-full text-left space-y-5" key="Error">
                          <SurveyError />
                        </div>;
                    }
                })}
              </div>
              <SurveyFooter
                canContinue={canContinue}
                currentQuestion={currentQuestion}
                next={next}
              />
            </>
          ) : (
            <SurveyStart
              question={questions[0]}
              setCurrentQuestion={setCurrentQuestion}
            />
          )}
        </form>
      </section>
    </Form>
  );
}
