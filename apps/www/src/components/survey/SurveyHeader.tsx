import React, { createElement } from "react";
import { Question } from "~/src/content/SurveyQuestions";

export default function SurveyHeader({
  currentQuestion,
}: {
  currentQuestion: Question;
}) {
  return (
    <>
      <div className="p-3.5 rounded-xl border shadow-sm">
        {createElement(currentQuestion.icon)}
      </div>
      <div className="space-y-2">
        <h2 className="font-semibold text-2xl">{currentQuestion.title}</h2>
        <p className="text-muted-foreground">{currentQuestion.subtitle}</p>
      </div>
    </>
  );
}
