import { authFetch } from "~/src/lib/authFetch";
import { BACKEND_URL } from "~/src/lib/constants";
import { deleteSession } from "~/src/lib/session";
import { redirect, RedirectType } from "next/navigation";

import { NextRequest } from "next/server";

// eslint-disable-next-line no-unused-vars
export async function GET(req: NextRequest) {
  const respone = await authFetch(`${BACKEND_URL}/auth/signout`, {
    method: "POST",
  });
  if (respone.ok) {
    /* empty */
  }
  await deleteSession();

  redirect("/", RedirectType.push);
}
