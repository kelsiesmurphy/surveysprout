import { apiCall } from "@repo/shared/lib/api";

export default async function DefaultLayout() {
  const data = await apiCall<any>("GET", "/survey");

  if (!data) {
    return <div>Error: Failed to fetch survey data</div>;
  }

  return (
    <div>
      <h1>Survey Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
