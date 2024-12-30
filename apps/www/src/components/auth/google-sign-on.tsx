"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/components/ui/button";
import GoogleLogo from "./google-logo";
import Link from "next/link";

export default function GoogleSignOn() {
  const router = useRouter();

  const signInWithGoogle = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(
      process.env.DASHBOARD_BASE_URL ? process.env.DASHBOARD_BASE_URL : "/",
    );
  };

  return (
    <Button className="w-full gap-3" variant="outline" asChild>
      <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL}`}>
        <GoogleLogo /> Sign in with Google
      </Link>
    </Button>
  );
}
