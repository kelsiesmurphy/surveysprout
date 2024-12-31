import { Button } from "@repo/ui/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SurveyStart({
  question,
  setCurrentQuestion,
  survey,
}: any) {
  return (
    <div className="flex-1 space-y-12">
      <h1 className="font-semibold text-xl md:text-2xl">{survey.title}</h1>
      <div className="flex flex-col items-center gap-3">
        <Image
          src={survey.metadata.productImage}
          alt={`Product image for ${survey.metadata.productName}`}
          width={200}
          height={200}
          priority
          className="rounded-3xl sm:w-full border"
        />
        <div>
          <p className="text-center font-semibold md:text-lg">
            {survey.metadata.productName}
          </p>
          <p className="text-center text-muted-foreground text-xs">
            {survey.metadata.productSize}
          </p>
        </div>
      </div>
      <Button className="w-full" onClick={() => setCurrentQuestion(question)}>
        Start Survey
      </Button>
      {process.env.NEXT_PUBLIC_WWW_BASE_URL ? (
        <p className="text-xs text-muted-foreground">
          Powered by{" "}
          <Button
            className="text-green-900 font-medium p-0 h-min text-xs"
            variant="link"
            asChild
          >
            <Link href={process.env.NEXT_PUBLIC_WWW_BASE_URL}>
              SurveySprout
            </Link>
          </Button>
        </p>
      ) : null}
    </div>
  );
}
