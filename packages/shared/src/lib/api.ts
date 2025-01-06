export async function apiCall<T>(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  endpoint: string,
  token?: string,
  data?: any,
): Promise<T | null> {
  // eslint-disable-next-line no-undef
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`;

  console.log(token);

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API call failed", error);
    return null;
  }
}
