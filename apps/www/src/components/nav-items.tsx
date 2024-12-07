import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import React from "react";
import CTAButtons from "./cta-buttons";

export default function NavItems() {
  return (
    <>
      <Button variant="ghost" asChild>
        <Link href="#features">Features</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="#pricing">Pricing</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="#faq">FAQ</Link>
      </Button>
      <CTAButtons />
    </>
  );
}
