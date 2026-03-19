import { describe, expect, it } from "vitest";
import { POST } from "../../app/api/auth/register/route";

describe("register route", () => {
  it("returns 400 for invalid payload", async () => {
    const req = new Request("http://localhost/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "invalid-email",
        password: "123",
      }),
    });

    const res = await POST(req);
    const body = (await res.json()) as { message?: string };

    expect(res.status).toBe(400);
    expect(typeof body.message).toBe("string");
    expect(body.message?.length).toBeGreaterThan(0);
  });
});
