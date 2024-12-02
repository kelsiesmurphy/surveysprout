import {
  SidebarProvider,
  SidebarTrigger,
} from "@repo/ui/components/ui/sidebar";
import { AppSidebar } from "~/src/components/dashboard/dashboard-sidebar";

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
      <main className="flex-1 flex flex-col">
        <SidebarTrigger />
        <section className="flex-1 container py-16">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
