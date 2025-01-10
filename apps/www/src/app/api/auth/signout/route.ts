import { authFetch } from "~/src/lib/authFetch";
import { BACKEND_URL } from "~/src/lib/constants";
import { redirect, RedirectType } from "next/navigation";

import { NextRequest } from "next/server";
import { deleteSession } from "~/src/lib/adapters/session-adapter";

// eslint-disable-next-line no-unused-vars
export async function GET(req: NextRequest) {
  const response = await authFetch(`${BACKEND_URL}/auth/signout`, {
    method: "POST",
  });
  if (response.ok) {
    /* empty */
  }
  await deleteSession();

  redirect("/", RedirectType.push);
}
