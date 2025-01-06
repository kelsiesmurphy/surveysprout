import { apiCall } from "@repo/shared/lib/api";
import { redirect } from "next/navigation";
import ErrorPage from "../components/error-page";
import { getSession, redirectToLogin } from "../lib/adapters/session-adapter";

export default async function DefaultLayout() {
  const session = await getSession();
  if (!session) {
    redirectToLogin();
  }

  console.log({ session });

  const surveys = await apiCall<any>("GET", "/survey", session?.accessToken);
  if (!surveys) {
    return <ErrorPage message="Error: Failed to fetch survey data" />;
  }

  redirect(`${surveys[0].id}`);
}
