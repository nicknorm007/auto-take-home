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

test("Enter sample train times and destinations and verify cancel saves data", async ({
  page,
}) => {
  let from_location = "Lagos";
  let to_location = "Porto - Campanha";
  await buyTickets.enterFromTo(page, from_location, to_location);
  const from_date = dateUtils.getDateStringInFutureByNumberofDays(3);
  const to_date = dateUtils.getDateStringInFutureByNumberofDays(5);
  await buyTickets.enterFromToDates(page, from_date, to_date);
  await buyTickets.submit(page);
  await buyTickets.cancelAfterSubmit(page);

  page.setDefaultTimeout(3000);

  await expect(page.locator(buyTickets.from_input)).toHaveValue(from_location);
  await expect(page.locator(buyTickets.to_input)).toHaveValue(to_location);
});
