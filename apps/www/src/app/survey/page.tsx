"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form } from "@repo/ui/components/ui/form";

import { useEffect, useState } from "react";
import SurveyStart from "~/src/components/survey/SurveyStart";
import SurveyOptions from "~/src/components/survey/SurveyOptions";
import SurveyText from "~/src/components/survey/SurveyText";
import SurveySlider from "~/src/components/survey/SurveySlider";
import { Question, questions } from "~/src/content/SurveyQuestions";
import { SurveyForm, SurveySchema } from "~/src/lib/schema";
import SurveyFooter from "~/src/components/survey/SurveyFooter";
import SurveyHeader from "~/src/components/survey/SurveyHeader";
import SurveyError from "~/src/components/survey/SurveyError";
import useLenis from "~/src/hooks/useLenis";

export default function SurveyPage() {
  const lenisRef = useLenis();
  const router = useRouter();

  const [canContinue, setCanContinue] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  const form = useForm<SurveyForm>({
    resolver: zodResolver(SurveySchema),
    defaultValues: {
      q1: {
        answer: "",
        otherText: "",
      },
      q2: {
        answer: "",
      },
      q3: {
        answer: "",
        otherText: "",
      },
      q4: {
        answer: "",
        otherText: "",
      },
      q5: {
        answer: "",
        otherText: "",
      },
      q6: {
        answer: "5",
      },
    },
    mode: "onChange",
  });

  const processForm: SubmitHandler<SurveyForm> = (data) => {
    console.log(data);
    form.reset();
  };

  const handleNextQuestion = () => {
    if (!currentQuestion) return;
    const nextQuestion = questions[currentQuestion.id + 1];
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      lenisRef.current?.scrollTo(0);
    } else {
      console.log("Submitting form...");
      form.handleSubmit(processForm)();
      router.push("/survey-complete");
    }
  };

  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleNextQuestion();
  };

  useEffect(() => {
    const subscription = form.watch((values) => {
      if (!currentQuestion?.fieldName) {
        setCanContinue(false);
        return;
      }

      const isValid = !!(
        values[currentQuestion.fieldName]?.answer ||
        values[currentQuestion.fieldName]?.otherText
      );
      setCanContinue(isValid);
    });

    return () => subscription.unsubscribe();
  }, [currentQuestion, form]);

  return (
    <Form {...form}>
      <section className="min-h-screen text-primary flex justify-center py-12 md:pt-40">
        <form className="gap-10 flex-1 max-w-sm text-center flex flex-col">
          {currentQuestion ? (
            <>
              <div className="flex-1 px-4 mb-32 md:mb-60 flex flex-col items-center space-y-6">
                <SurveyHeader currentQuestion={currentQuestion} />
                <div className="w-full h-full text-left space-y-5">
                  {(() => {
                    switch (currentQuestion.questionType) {
                      case "Options":
                        return (
                          <SurveyOptions
                            form={form}
                            question={currentQuestion}
                          />
                        );
                      case "Text":
                        return (
                          <SurveyText form={form} question={currentQuestion} />
                        );
                      case "Slider":
                        return (
                          <SurveySlider
                            form={form}
                            question={currentQuestion}
                          />
                        );
                      default:
                        return <SurveyError />;
                    }
                  })()}
                </div>
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
