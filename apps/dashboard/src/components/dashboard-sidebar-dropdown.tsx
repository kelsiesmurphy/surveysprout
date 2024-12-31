"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@repo/ui/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@repo/ui/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { redirect } from "next/navigation";

interface Survey {
  id: string;
  title: string;
}

interface DashboardSidebarDropdownProps {
  surveyId: string;
  surveys: Survey[];
}

export default function DashboardSidebarDropdown({
  surveyId,
  surveys,
}: DashboardSidebarDropdownProps) {
  const handleSurveyChange = (surveyId: string) => {
    redirect(`/${surveyId}`);
  };

  const surveyName = surveys.find((survey: { id: string }) => {
    return survey.id === surveyId;
  })?.title;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton>
          {surveyName ? surveyName : "Select Survey"}
          <ChevronDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
        {surveys.map((survey) => {
          return (
            <DropdownMenuItem
              key={survey.id}
              onClick={() => handleSurveyChange(survey.id)}
            >
              <span>{survey.title}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
