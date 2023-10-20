export const dateUtils = {
  getDateStringInFutureByNumberofDays: (numDays) => {
    const date = new Date();
    date.setDate(date.getDate() + numDays);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    //return a date in the needed format - i.e. 20 October, 2023
    return `${day} ${month}, ${year}`;
  },
} as const;
