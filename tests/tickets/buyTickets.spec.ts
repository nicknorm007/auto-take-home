import { test, expect } from "@playwright/test";
import { buyTickets } from "../pages/buyTickets";
import { dateUtils } from "../common/dateUtils";

test.beforeEach(async ({ page }) => {
  await page.goto(buyTickets.page);
});

test("Verify buy tickets page title", async ({ page }) => {
  const pageTitle = await page.title();
  expect(pageTitle).toBe(buyTickets.title);
});

test("Enter sample train times and destinations", async ({ page }) => {
  await buyTickets.enterFromTo(page, "Lagos", "Porto - Campanha");
  await page.waitForTimeout(3000); // remove these

  const from_date = dateUtils.getDateStringInFutureByNumberofDays(3);
  const to_date = dateUtils.getDateStringInFutureByNumberofDays(5);
  await buyTickets.enterFromToDates(page, from_date, to_date);

  await page.waitForTimeout(3000); // remove these

  await buyTickets.submit(page);

  await page.waitForTimeout(3000); // remove these
});
