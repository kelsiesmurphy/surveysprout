import { Question } from "~/src/content/survey-questions";

export default function SurveyPagination({
  questions,
  currentQuestion,
}: {
  questions: Question[];
  currentQuestion: Question;
}) {
  return (
    <ul className="flex justify-center gap-4">
      {questions.map((_, index) => {
        return (
          <li key={index}>
            <div
              className={`rounded-full w-2.5 aspect-square ${currentQuestion.id === index ? "bg-primary" : "bg-secondary"}`}
            />
          </li>
        );
      })}
    </ul>
  );
}
