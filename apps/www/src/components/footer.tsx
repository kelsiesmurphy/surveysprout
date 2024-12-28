import { Button } from "@repo/ui/components/ui/button";
import { Instagram, Twitter } from "lucide-react";
import { footerColumns, FooterColumn } from "../content/footer";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="container max-w-5xl space-y-12 pt-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {footerColumns.map((column: FooterColumn, index: number) => {
          return (
            <div key={index} className="space-y-2">
              <h4 className="font-semibold">{column.title}</h4>
              <ul>
                {column.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <Button
                        className="text-muted-foreground px-0 w-full justify-start"
                        asChild
                        variant="link"
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div>
        <hr />
        <div className="py-8 text-sm text-muted-foreground flex justify-between items-center">
          <p>© {new Date().getFullYear()} SurveySprout.</p>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Twitter size={20} />
            </Button>
            <Button size="icon" variant="ghost">
              <Instagram size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
