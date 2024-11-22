export default function SurveyPagination({
  steps,
  currentStep,
}: {
  steps: {}[];
  currentStep: number;
}) {
  return (
    <ul className="flex justify-center gap-4">
      {steps.map((_, index) => {
        return (
          <li key={index}>
            <div
              className={`rounded-full w-2.5 aspect-square ${currentStep === index ? "bg-primary" : "bg-secondary"}`}
            />
          </li>
        );
      })}
    </ul>
  );
}
