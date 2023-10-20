import { home } from "./home";

export const buyTickets = {
  page: home.page + "buy-tickets",
  title: "Buy Train Tickets Online | CP - Comboios de Portugal",
  from_input: "input[name=textBoxPartida]",
  to_input: "input[name=textBoxChegada]",
  date_from_input: "#datepicker-first",
  date_to_input: "#datepicker-second",
  submit_button: "input[type=submit]",
  enterFromTo: async (page, from: string, to: string) => {
    await page.locator(buyTickets.from_input).fill(from);
    await page.locator(buyTickets.to_input).fill(to);
  },
  enterFromToDates: async (page, from: string, to: string) => {
    await page.locator(buyTickets.date_from_input).fill(from);
    await page.locator(buyTickets.date_to_input).fill(to);
  },
  submit: async (page) => {
    await page.locator(buyTickets.submit_button).click();
  },
} as const;
