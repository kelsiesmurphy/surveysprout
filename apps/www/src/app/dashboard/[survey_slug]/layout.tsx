import {
  SidebarProvider,
  SidebarTrigger,
} from "@repo/ui/components/ui/sidebar";
import { AppSidebar } from "~/src/components/dashboard/app-sidebar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ survey_slug: string }>;
}) {
  const surveySlug = (await params).survey_slug;
  return (
    <SidebarProvider>
      <AppSidebar surveySlug={surveySlug} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
