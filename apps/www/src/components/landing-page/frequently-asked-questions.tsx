import { FAQSection } from "~/src/content/landing-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/ui/accordion";

export default function FrequentlyAskedQuestions({
  content,
}: {
  content: FAQSection;
}) {
  return (
    <section className="container text-center flex flex-col gap-16 items-center py-16 md:py-24">
      <div className="max-w-2xl space-y-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-6xl font-semibold">
          {content.heading}
        </h2>
        <p className="text-muted-foreground md:text-xl max-w-md">
          {content.subheading}
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <Accordion type="single" collapsible className="w-full text-left">
          {content.questions.map((question, index) => {
            return (
              <AccordionItem key={index} value={question.question}>
                <AccordionTrigger className="text-left outline-brand">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
