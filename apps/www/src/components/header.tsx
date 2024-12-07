import { Button } from "@repo/ui/components/ui/button";
import SurveySproutLogo from "./logo";
import Link from "next/link";
import NavItems from "./nav-items";
import { MobileNav } from "./mobile-nav";

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-6">
      <Button asChild variant="link">
        <Link href="/">
          <SurveySproutLogo />
        </Link>
      </Button>
      <nav className="hidden md:flex gap-2">
        <NavItems />
      </nav>
      <MobileNav />
    </header>
  );
}
