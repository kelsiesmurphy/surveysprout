import { Button } from "@repo/ui/components/ui/button";
import { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import Link from "next/link";
import { surveys } from "@repo/shared/content/test-data/example-surveys";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Home | SurveySprout",
  description:
    "SurveySprout is a post-purchase survey tool with a focus on sustainability.",
};

export default function Page() {
  const firstSurvey = surveys[0];
  return (
    <section className="min-h-screen text-primary flex justify-center items-center p-4">
      <div className="gap-10 flex-1 max-w-xl text-center flex flex-col items-center">
        <h1
          className={
            montserratAlternates.className +
            " text-4xl md:text-7xl text-green-950 font-bold transition-all duration-300 text-left"
          }
        >
          SurveySprout
        </h1>
        <p className="text-muted-foreground">
          Coming soon. Join our waitlist to be first in the know.
        </p>
        <Button asChild>
          <Link href={`${process.env.SURVEY_BASE_URL}/${firstSurvey?.id}`}>Go to Test Survey</Link>
        </Button>
      </div>
    </section>
  );
}
