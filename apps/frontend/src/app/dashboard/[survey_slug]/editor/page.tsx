import { Button } from "@repo/ui/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Survey Editor | SurveySprout",
};

export default async function DashboardEditorPage({
  params,
}: {
  params: Promise<{ survey_slug: string }>;
}) {
  const surveySlug = (await params).survey_slug;
  return (
    <>
      <p>Dashboard Survey Editor</p>
      <Button asChild>
        <Link href={`/survey/${surveySlug}`}>Go to Survey</Link>
      </Button>
    </>
  );
}
