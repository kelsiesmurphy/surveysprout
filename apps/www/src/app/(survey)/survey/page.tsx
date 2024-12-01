import { Metadata } from "next";
import React from "react";
import Survey from "~/src/components/survey/survey";

export const metadata: Metadata = {
  title: "Survey | SurveySprout",
};

export default function SurveyPage() {
  return <Survey />;
}
