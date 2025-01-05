import { Metadata } from "next";
import LandingPage from "../components/landing-page";
import Footer from "../components/footer";
import { getSession, redirectToLogin } from "../lib/adapters/session-adapter";

export const metadata: Metadata = {
  title: "Home | SurveySprout",
  description:
    "SurveySprout is a post-purchase survey tool with a focus on sustainability.",
};

export default async function LandingPageWrapper() {
  const session = await getSession();
  if (!session) {
    redirectToLogin();
  }
  console.log({ session });

  return (
    <>
      <LandingPage />
      <Footer />
    </>
  );
}
