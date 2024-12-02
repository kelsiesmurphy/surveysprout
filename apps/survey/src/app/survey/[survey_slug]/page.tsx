import { Metadata } from "next";
import React from "react";
import Survey from "~/src/components/survey";

export const metadata: Metadata = {
  title: "Survey | SurveySprout",
};

export default async function SurveyPage({
  params,
}: {
  params: Promise<{ survey_slug: string }>;
}) {
  const surveySlug = (await params).survey_slug;
  return <Survey surveySlug={surveySlug} />;
}
