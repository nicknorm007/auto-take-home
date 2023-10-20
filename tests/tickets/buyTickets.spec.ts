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

const destinations = [
  { from: "Lagos", to: "Porto - Campanha", start_in_days: 3, end_in_days: 5 },
];
for (const destination of destinations) {
  test(`Enter sample train times and destinations ${destination} and verify cancel preserves form data`, async ({
    page,
  }) => {
    await buyTickets.enterFromTo(page, destination.from, destination.to);
    const from_date = dateUtils.getDateStringInFutureByNumberofDays(
      destination.start_in_days
    );
    const to_date = dateUtils.getDateStringInFutureByNumberofDays(
      destination.end_in_days
    );
    await buyTickets.enterFromToDates(page, from_date, to_date);
    await buyTickets.submit(page);
    await buyTickets.cancelAfterSubmit(page);
    await expect(page.locator(buyTickets.from_input)).toHaveValue(
      destination.from
    );
    await expect(page.locator(buyTickets.to_input)).toHaveValue(destination.to);
    await expect(page.locator(buyTickets.date_from_input)).toHaveValue(
      from_date
    );
    await expect(page.locator(buyTickets.date_to_input)).toHaveValue(to_date);
  });
}
