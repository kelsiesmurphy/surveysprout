import React, { createElement } from "react";
import { Question } from "~/src/content/survey-questions";
import { Card } from "@repo/ui/components/ui/card";

export default function SurveyHeader({
  currentQuestion,
}: {
  currentQuestion: Question;
}) {
  return (
    <>
      <Card className="p-3.5 border shadow-sm">
        {createElement(currentQuestion.icon)}
      </Card>
      <div className="space-y-2">
        <h2 className="font-semibold text-2xl">{currentQuestion.title}</h2>
        <p className="text-muted-foreground">{currentQuestion.subtitle}</p>
      </div>
    </>
  );
}
