import { apiCall } from "@repo/shared/lib/api";
import { Metadata } from "next";
import React from "react";
import Survey from "~/src/components/survey";

export const metadata: Metadata = {
  title: "Survey | SurveySprout",
};

export default async function SurveyPage({
  params,
}: {
  params: Promise<{ survey_id: string }>;
}) {
  const surveyId = (await params).survey_id;
  const survey = await apiCall<any>("GET", `/survey/${surveyId}`);
  return <Survey survey={survey} />;
}
