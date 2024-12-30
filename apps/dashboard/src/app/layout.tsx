import "@repo/ui/globals.css";
import "@repo/ui/themes.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@repo/ui/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import DevTools from "@repo/shared/components/dev-tools";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SurveySprout",
  description:
    "SurveySprout is a post-purchase survey tool with a focus on sustainability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className + " min-w-72"}>
        <ThemeProvider
          attribute="data-theme"
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
