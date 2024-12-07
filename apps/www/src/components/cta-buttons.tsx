import { Button } from "@repo/ui/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function CTAButtons({
  isLargeButtons,
}: {
  isLargeButtons?: boolean;
}) {
  return (
    <div className="flex flex-col w-full sm:w-min sm:flex-row gap-4">
      <Button
        size={isLargeButtons ? "lg" : "default"}
        variant="secondary"
        asChild
      >
        <Link href="" className="gap-2">
          <Eye /> Preview
        </Link>
      </Button>
      <Button size={isLargeButtons ? "lg" : "default"} asChild>
        <Link href="">Create account</Link>
      </Button>
    </div>
  );
}
