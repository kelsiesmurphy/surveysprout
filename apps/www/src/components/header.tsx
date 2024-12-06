import { Button } from "@repo/ui/components/ui/button";
import SurveySproutLogo from "./logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-6">
      <Button asChild variant="link">
        <Link href="/">
          <SurveySproutLogo />
        </Link>
      </Button>
      <nav className="flex gap-2">
        <Button variant="ghost" asChild>
          <Link href="#features">Features</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#pricing">Pricing</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#faq">FAQ</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="">Preview</Link>
        </Button>
        <Button asChild>
          <Link href="">Buy now</Link>
        </Button>
      </nav>
    </header>
  );
}
