import { Button } from "@repo/ui/components/ui/button";
import SurveySproutLogoMark from "./logomark";
import Link from "next/link";
import NavItems from "./nav-items";
import { MobileNav } from "./mobile-nav";

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-6">
      <Button asChild variant="link" className="px-0">
        <Link href="/">
          <SurveySproutLogoMark />
        </Link>
      </Button>
      <nav className="hidden md:flex gap-2">
        <NavItems />
      </nav>
      <MobileNav />
    </header>
  );
}
