import { Button } from "@repo/ui/components/ui/button";
import GoogleLogo from "./google-logo";
import Link from "next/link";

export default function GoogleSignOn() {
  return (
    <Button className="w-full gap-3" variant="outline" asChild>
      <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL}`}>
        <GoogleLogo /> Sign in with Google
      </Link>
    </Button>
  );
}
