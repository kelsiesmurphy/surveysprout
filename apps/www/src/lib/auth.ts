"use server";

import { BACKEND_URL } from "./constants";

export const refreshToken = async (oldRefreshToken: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: oldRefreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token" + response.statusText);
    }

    const { accessToken, refreshToken } = await response.json();
    const updateRes = await fetch(
      `${process.env.NEXT_PUBLIC_WWW_BASE_URL}/api/auth/update`,
      {
        method: "POST",
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
      },
    );
    if (!updateRes.ok) throw new Error("Failed to update the tokens");

    return accessToken;
  } catch (err) {
    console.error("Refresh Token failed:", err);
    return null;
  }
};
