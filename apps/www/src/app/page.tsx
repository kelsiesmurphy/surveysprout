import { NewsletterForm } from "../components/NewsletterForm";

export default function Page() {
  return (
    <section className="min-h-screen text-primary flex justify-center items-center p-4">
      <div className="gap-10 flex-1 max-w-xl text-center flex flex-col items-center">
        <h1 className="text-4xl font-nord md:text-7xl font-bold transition-all duration-300 text-left">
          Offline
          <br />
          Collective
        </h1>
        <p className="text-muted-foreground font-nord">
          Coming soon. Join our waitlist to be first in the know.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
