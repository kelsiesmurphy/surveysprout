import { ThemeWrapper } from "@repo/ui/components/theme-wrapper";
import { apiCall } from "@repo/shared/lib/api";

export default async function SurveyLayout({
  children,
  params,
}: {
  children: Readonly<React.ReactNode>;
  params: Promise<{ survey_id: string }>;
}) {
  const surveyId = (await params).survey_id;
  const survey = await apiCall<any>("GET", `/survey/${surveyId}`);

  return (
    <ThemeWrapper
      defaultTheme={survey ? survey.theme : { color: "zinc", radius: 0.5 }}
    >
      <div className="bg-background">{children}</div>
    </ThemeWrapper>
  );
}
