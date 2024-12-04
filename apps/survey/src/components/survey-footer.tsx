import { Button } from "@repo/ui/components/ui/button";

import React from "react";
import { Question, questions } from "~/src/content/survey-questions";
import SurveyPagination from "./survey-pagination";
import Link from "next/link";

export default function SurveyFooter({
  currentQuestion,
  canContinue,
  next,
}: {
  currentQuestion: Question;
  canContinue: boolean;
  next: Function;
}) {
  return (
    <div className="fixed bg-background px-4 bottom-0 w-full max-w-sm text-center flex flex-col gap-4 md:gap-8 pb-5 md:pb-24">
      <div className="w-full h-4 -mt-4 bg-gradient-to-t from-background" />
      <Button
        disabled={!canContinue}
        className="w-full"
        onClick={(e) => next(e)}
      >
        Continue
      </Button>
      <SurveyPagination
        questions={questions}
        currentQuestion={currentQuestion}
      />
      {process.env.WWW_BASE_URL ? (
        <p className="text-xs text-muted-foreground">
          Powered by{" "}
          <Button
            className="text-green-900 font-medium p-0 h-min text-xs"
            variant="link"
            asChild
          >
            <Link href={process.env.WWW_BASE_URL}>SurveySprout</Link>
          </Button>
        </p>
      ) : null}
    </div>
  );
}
