import { apiCall } from "@repo/shared/lib/api";
import { redirect } from "next/navigation";
import ErrorPage from "../components/error-page";

export default async function DefaultLayout() {
  const surveys = await apiCall<any>("GET", "/survey");

  if (!surveys) {
    return <ErrorPage message="Error: Failed to fetch survey data" />;
  }

  redirect(`${surveys[0].id}`);
}
