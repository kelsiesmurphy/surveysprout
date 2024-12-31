import { Button } from "@repo/ui/components/ui/button";
import React from "react";

export default function SurveyStart({
  question,
  setCurrentQuestion,
  survey,
}: any) {
  return (
    <div className="flex-1 space-y-12">
      <h1 className="font-semibold text-2xl">Survey Start Page</h1>
      <p>survey: {JSON.stringify(survey)}</p>
      <Button onClick={() => setCurrentQuestion(question)}>Start Survey</Button>
    </div>
  );
}
