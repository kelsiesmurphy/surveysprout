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
import { redirect } from "next/navigation";
// import { usePathname, useRouter } from "next/navigation";
// import { Survey } from "@repo/shared/content/test-data/example-surveys";
import { generateSurveyUrl } from "@repo/shared/lib/utils/navigation";
import { apiCall } from "@repo/shared/lib/api";
import DashboardSidebarDropdown from "./dashboard-sidebar-dropdown";

export async function AppSidebar({ surveySlug }: { surveySlug: string }) {
  // const router = useRouter();
  // const pathname = usePathname();

  const surveys = await apiCall<any>("GET", "/survey");

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
      url: generateSurveyUrl(surveySlug, "survey-settings"),
      icon: Settings,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DashboardSidebarDropdown
              surveySlug={surveySlug}
              surveys={surveys}
            />
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
