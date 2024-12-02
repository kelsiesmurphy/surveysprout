"use client";

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
import {
  ChevronDown,
  ChevronUp,
  FileEditIcon,
  Home,
  Settings,
  User2,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Survey, surveys } from "~/src/content/test-data/example-surveys";
import { generateSurveyUrl } from "~/src/lib/utils/navigation";

export function AppSidebar({ surveySlug }: { surveySlug: string }) {
  const router = useRouter();
  const pathname = usePathname();

  // TODO - remove and switch with real api calls
  const surveyName = surveys.find((survey) => {
    return survey.id === surveySlug;
  })?.name;

  const items = [
    {
      title: "Home",
      url: generateSurveyUrl(surveySlug),
      icon: Home,
    },
    {
      title: "Editor",
      url: generateSurveyUrl(surveySlug, "editor"),
      icon: FileEditIcon,
    },
    {
      title: "Survey Settings",
      url: generateSurveyUrl(surveySlug, "settings"),
      icon: Settings,
    },
  ];

  const handleSurveyChange = (surveySlug: string) => {
    const currentPage = pathname.split("/")[3] || "";
    const newPath = generateSurveyUrl(surveySlug, currentPage);
    router.push(newPath);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {surveyName ? surveyName : "Select Survey"}
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                {surveys.map((survey: Survey) => {
                  return (
                    <DropdownMenuItem
                      key={survey.id}
                      onClick={() => handleSurveyChange(survey.id)}
                    >
                      <span>{survey.name}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
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
        <SidebarGroupLabel>Survey ID: {surveySlug}</SidebarGroupLabel>
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
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
