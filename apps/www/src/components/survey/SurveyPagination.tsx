import { Step } from "~/src/app/survey/page";

export default function SurveyPagination({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: Step;
}) {
  return (
    <ul className="flex justify-center gap-4">
      {steps.map((_, index) => {
        return (
          <li key={index}>
            <div
              className={`rounded-full w-2.5 aspect-square ${currentStep.id === index ? "bg-primary" : "bg-secondary"}`}
            />
          </li>
        );
      })}
    </ul>
  );
}
