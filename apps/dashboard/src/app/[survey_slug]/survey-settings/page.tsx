import { ThemeCustomizer } from "@repo/ui/components/theme-customiser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | SurveySprout",
};

export default function DashboardSettingsPage() {
  return (
    <>
      <p>Dashboard Settings</p>
      <ThemeCustomizer />
    </>
  );
}
