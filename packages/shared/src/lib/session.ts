import { jwtVerify, SignJWT } from "jose";

export type Session = {
  user: {
    id: string;
    name: string;
    role: string; // Adjust type as needed
  };
  accessToken: string;
  refreshToken: string;
};

export async function createSession(
  payload: Session,
  secretKey: string,
  // eslint-disable-next-line no-unused-vars
  setCookie: (key: string, value: string, options: any) => void,
) {
  const encodedKey = new TextEncoder().encode(secretKey);
  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);

  setCookie("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiredAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession(cookie: string | null, secretKey: string) {
  if (!cookie) return null;

  try {
    const encodedKey = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(cookie, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as Session;
  } catch (err) {
    console.error("Failed to verify the session", err);
    return null;
  }
}

// eslint-disable-next-line no-unused-vars
export async function deleteSession(deleteCookie: (key: string) => void) {
  deleteCookie("session");
}
