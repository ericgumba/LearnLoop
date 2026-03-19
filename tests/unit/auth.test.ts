import { describe, expect, it } from "vitest";
import { createSessionToken, getSessionExpiryDate } from "../../app/lib/auth";

describe("auth helpers", () => {
  it("creates a hex session token", () => {
    const token = createSessionToken();
    expect(token).toMatch(/^[a-f0-9]{64}$/);
  });

  it("creates different tokens each time", () => {
    const a = createSessionToken();
    const b = createSessionToken();
    expect(a).not.toBe(b);
  });

  it("returns an expiry date in the future", () => {
    const expiresAt = getSessionExpiryDate();
    expect(expiresAt.getTime()).toBeGreaterThan(Date.now());
  });
});
