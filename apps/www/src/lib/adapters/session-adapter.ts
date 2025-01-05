import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createSession as sharedCreateSession,
  getSession as sharedGetSession,
  deleteSession as sharedDeleteSession,
} from "@repo/shared/lib/session";

const sessionSecret = process.env.SESSION_SECRET_KEY;

export async function createSession(payload: any) {
  const cookieStore = cookies();
  if (!sessionSecret) {
    throw new Error("SESSION_SECRET_KEY is not defined");
  }
  return sharedCreateSession(
    payload,
    sessionSecret,
    (await cookieStore).set.bind(cookieStore),
  );
}

export async function getSession() {
  const cookieStore = cookies();
  const cookie = (await cookieStore).get("session")?.value || null;
  if (!sessionSecret) {
    throw new Error("SESSION_SECRET_KEY is not defined");
  }
  return sharedGetSession(cookie, sessionSecret);
}

export async function deleteSession() {
  const cookieStore = cookies();
  return sharedDeleteSession((await cookieStore).delete.bind(cookieStore));
}

export async function redirectToLogin() {
  redirect("/login");
}
