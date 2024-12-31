import {
  SidebarProvider,
  SidebarTrigger,
} from "@repo/ui/components/ui/sidebar";
import { AppSidebar } from "~/src/components/dashboard-sidebar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ survey_id: string }>;
}) {
  const surveyId = (await params).survey_id;
  return (
    <SidebarProvider>
      <AppSidebar surveyId={surveyId} />
      <main className="flex-1 flex flex-col">
        <SidebarTrigger />
        <section className="flex-1 container py-16">{children}</section>
      </main>
    </SidebarProvider>
  );
}
