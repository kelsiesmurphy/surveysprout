"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const SurveySproutLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const textColor =
    resolvedTheme === "light" ? "#052E16" : "hsl(var(--foreground))";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        fill="#064E3B"
        fillRule="evenodd"
        d="M20.301 13.72a1.5 1.5 0 0 1 .498 2.062c-.62 1.013-.776 2.063-.717 3.238.03.6.114 1.215.22 1.875l.079.487c.082.503.17 1.038.233 1.555.17 1.386.217 2.988-.52 4.54-.752 1.58-2.19 2.858-4.459 3.889a1.5 1.5 0 1 1-1.243-2.731c1.861-.845 2.637-1.705 2.989-2.445.365-.768.402-1.67.253-2.89-.055-.45-.129-.897-.208-1.382-.03-.178-.06-.361-.09-.552a20.46 20.46 0 0 1-.253-2.197c-.078-1.558.122-3.264 1.154-4.951a1.502 1.502 0 0 1 2.064-.498Z"
        clipRule="evenodd"
      />
      <path
        fill="#065F46"
        fillRule="evenodd"
        d="M30.028 4.5s.017 1.147-.002 1.565c-.162 3.729-1.162 6.07-2.99 7.896-.04.039-.08.076-.124.11-1.81 1.448-4.242 2.265-7.315 2.427a1.502 1.502 0 0 1-1.58-1.45 11.992 11.992 0 0 1 1.888-6.856c.044-.07.094-.135.149-.195.774-.86 1.756-1.713 3.145-2.362 1.38-.645 3.086-1.053 5.272-1.134.419-.015 1.557-.001 1.557-.001Z"
        clipRule="evenodd"
      />
      <path
        fill="#022C22"
        fillRule="evenodd"
        d="M9.008 30a1.5 1.5 0 0 1 1.502-1.5h15.014a1.5 1.5 0 1 1 0 3H10.51A1.5 1.5 0 0 1 9.008 30Z"
        clipRule="evenodd"
      />
      <path
        fill="#047857"
        fillRule="evenodd"
        d="M5.742 11.423c4.504-.803 7.347-.03 9.404 1.464 2.048 1.488 3.222 3.972 3.995 6.289a1.5 1.5 0 0 1-1.13 1.945c-3.098.619-5.777.702-8.193-.59-2.27-1.142-4.122-3.497-5.249-7.194-.125-.41-.44-1.712-.44-1.712s1.19-.126 1.613-.202Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SurveySproutLogo;
