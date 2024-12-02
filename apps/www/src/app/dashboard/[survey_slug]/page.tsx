import { Metadata } from "next";
import { DashboardTable } from "~/src/components/dashboard/dashboard-table";

export const metadata: Metadata = {
  title: "Dashboard | SurveySprout",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Home</h1>
      <DashboardTable />
    </div>
  );
}
