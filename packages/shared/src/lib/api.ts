export async function apiCall<T>(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  endpoint: string,
  data?: any,
): Promise<T | null> {
  const url = `http://localhost:3333${endpoint}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "x-api-key":
      "kOhCGX0kt1faJfjVEIWfeyC5AURnoICDUwt7TaMd2B36xLvYxaOb3Jnx166DCmPM",
  };

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
