import { expect, test } from "@playwright/test";

test("can navigate to register page from top banner", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Register" }).click();

  await expect(page).toHaveURL(/\/register/);
  await expect(page.getByRole("heading", { name: "Create your account" })).toBeVisible();
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
});
