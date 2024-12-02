"use client";

import { cn } from "@repo/ui/lib/utils";
import { useConfig } from "@repo/ui/hooks/use-config";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: { color: string; radius: number };
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useConfig();

  return (
    <div
      className={cn(
        `theme-${defaultTheme?.color || config.theme}`,
        "w-full",
        className,
      )}
      style={
        {
          "--radius": `${defaultTheme?.radius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
