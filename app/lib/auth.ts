import crypto from "crypto";

export const SESSION_COOKIE_NAME = "cs_tutor_session";
const SESSION_TTL_DAYS = 30;

export function createSessionToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function getSessionExpiryDate(): Date {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + SESSION_TTL_DAYS);
  return expiresAt;
}
