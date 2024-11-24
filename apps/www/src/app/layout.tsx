import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import { Toaster } from "@repo/ui/components/ui/toaster";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SurveySprout",
  description: "We are SurveySprout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={montserratAlternates.className + " min-w-72"}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
