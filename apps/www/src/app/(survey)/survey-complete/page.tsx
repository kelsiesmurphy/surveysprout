import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey Complete! | SurveySprout",
};

export default function SurveyCompletePage() {
  return (
    <section className="min-h-screen text-primary flex justify-center items-center p-4">
      <div className="gap-6 flex-1 max-w-xl text-center flex flex-col items-center">
        <h1 className="text-xl md:text-2xl text-green-950 font-bold">
          Thank you for completing this survey
        </h1>
        <p className="text-muted-foreground">You may now close this page.</p>
      </div>
    </section>
  );
}
