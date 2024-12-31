import { Metadata } from "next";
import LandingPage from "../components/landing-page";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Home | SurveySprout",
  description:
    "SurveySprout is a post-purchase survey tool with a focus on sustainability.",
};

export default function LandingPageWrapper() {
  return (
    <>
      <LandingPage />
      <Footer />
    </>
  );
}
