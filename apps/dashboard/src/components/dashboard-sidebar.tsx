import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@repo/ui/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/ui/sidebar";
import { ChevronUp, FileEditIcon, Home, Settings, User2 } from "lucide-react";
import { generateSurveyUrl } from "@repo/shared/lib/utils/navigation";
import { apiCall } from "@repo/shared/lib/api";
import DashboardSidebarDropdown from "./dashboard-sidebar-dropdown";
import { getSession } from "../lib/adapters/session-adapter";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export async function AppSidebar({ surveyId }: { surveyId: string }) {
  const session = await getSession();

  console.log({ session });
  const surveys = await apiCall<any>("GET", "/survey", session?.accessToken);

  const items = [
    {
      title: "Home",
      url: generateSurveyUrl(surveyId),
      icon: Home,
    },
    {
      title: "Editor",
      url: generateSurveyUrl(surveyId, "editor"),
      icon: FileEditIcon,
    },
    {
      title: "Survey Settings",
      url: generateSurveyUrl(surveyId, "survey-settings"),
      icon: Settings,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DashboardSidebarDropdown surveyId={surveyId} surveys={surveys} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroupLabel>Survey ID: {surveyId}</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button asChild variant="link">
                    <Link href="/api/auth/signout">Sign out</Link>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
