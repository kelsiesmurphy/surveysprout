import { ThemeWrapper } from "@repo/ui/components/theme-wrapper";
import { surveys } from "@repo/shared/content/test-data/example-surveys";

export default function SurveyLayout({
  children,
  params,
}: {
  children: Readonly<React.ReactNode>;
  params: { survey_slug: string };
}) {
  const surveySlug = params.survey_slug;

  // TODO - remove and switch with real api calls
  const survey = surveys.find((survey) => {
    return survey.id === surveySlug;
  });

  return (
    <ThemeWrapper
      defaultTheme={survey ? survey.theme : { color: "zinc", radius: 0.5 }}
    >
      {children}
    </ThemeWrapper>
  );
}
