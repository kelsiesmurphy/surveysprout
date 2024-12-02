import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | SurveySprout",
};

export default function DashboardSettingsPage() {
  return (
    <section className="min-h-screen text-primary flex justify-center items-center p-4">
      <div className="gap-10 flex-1 max-w-xl text-center flex flex-col items-center">
        <p className="text-muted-foreground">Dashboard Settings</p>
      </div>
    </section>
  );
}
