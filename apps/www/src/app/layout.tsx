import "@repo/ui/globals.css";
import "@repo/ui/themes.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@repo/ui/components/ui/toaster";
import { ThemeProvider } from "@repo/shared/components/theme-provider";
import DevTools from "@repo/shared/components/dev-tools";
import Header from "../components/header";
import { AuthProvider } from "@repo/shared/context/auth-provider";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex flex-col min-h-screen">
              <Header />
              {children}
            </main>
            <Toaster />
            <DevTools />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
