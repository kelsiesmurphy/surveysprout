import "@repo/ui/globals.css";
import "@repo/ui/themes.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@repo/ui/components/ui/toaster";
import { ThemeProvider } from "@repo/shared/components/theme-provider";
import DevTools from "@repo/shared/components/dev-tools";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SurveySprout",
  description:
    "SurveySprout is a post-purchase survey tool with a focus on sustainability.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className + " min-w-72"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster />
          <DevTools />
        </ThemeProvider>
      </body>
    </html>
  );
}
