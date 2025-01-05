"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constants";
import { createSession } from "./session";

export async function signUp(
  email: string,
  password: string,
): Promise<{ message?: string; error?: string }> {
  // Simple validation of input (could add more checks if needed)
  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // Send email and password directly
  });

  if (response.ok) {
    // If successful, return a success message or perform other actions as needed
    return {};
  } else {
    // Handle errors based on response status
    return {
      error:
        response.status === 409
          ? "The user already exists!"
          : response.statusText,
    };
  }
}

export async function signIn(
  email: string, // Accept email directly
  password: string, // Accept password directly
): Promise<{ message?: string; error?: string }> {
  // Validate the fields if necessary, assuming you're using zod on the client already
  const validationResponse = validateLoginFields(email, password);
  if (!validationResponse.isValid) {
    return {
      error: validationResponse.error,
    };
  }

  const response = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // Send email and password directly
  });

  if (response.ok) {
    const result = await response.json();
    // Create a session with the returned user data
    await createSession({
      user: {
        id: result.id,
        name: result.name,
        role: result.role,
      },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
    redirect("/"); // Redirect to the homepage (or wherever you'd like)
  } else {
    return {
      message:
        response.status === 401 ? "Invalid Credentials!" : response.statusText,
    };
  }
}

function validateLoginFields(email: string, password: string) {
  // You can add more specific validation if needed (e.g., regex for email)
  if (!email || !password) {
    return { isValid: false, error: "Both email and password are required." };
  }
  return { isValid: true, error: "" };
}

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
    // update session with new tokens
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
