const { test, expect } = require("@jest/globals");
const { daysBetween } = require("./delta");

test("calculates days between dates in same month", () => {
  const from = { year: 2020, month: 10, day: 2 };
  const to = { year: 2020, month: 10, day: 10 };

  expect(daysBetween(from, to)).toBe(8);
});

test("calculates days between year-long period containing leap year", () => {
  const from = { year: 2018, month: 1, day: 2 };
  const to = { year: 2021, month: 2, day: 3 };

  expect(daysBetween(from, to)).toBe(1128);
});

test("calculates days between year and subsequent leap year", () => {
  const from = { year: 2019, month: 12, day: 31 };
  const to = { year: 2020, month: 1, day: 2 };
  expect(daysBetween(from, to)).toBe(2);
});

/*

TODO: Convert the following blocks into individual Jest tests.

{
  const from = { year: 2020, month: 1, day: 20 };
  const to = { year: 2020, month: 2, day: 3 };

  console.log(`days: ${daysBetween(from, to)} (should be 14)`);
}

{
  const from = { year: 2019, month: 12, day: 20 };
  const to = { year: 2020, month: 1, day: 2 };

  console.log(`days: ${daysBetween(from, to)} (should be 13)`);
}

{
  const from = { year: 2020, month: 4, day: 20 };
  const to = { year: 2020, month: 5, day: 2 };

  console.log(`days: ${daysBetween(from, to)} (should be 12)`);
}

{
  const from = { year: 2019, month: 2, day: 25 };
  const to = { year: 2019, month: 3, day: 2 };

  console.log(`days: ${daysBetween(from, to)} (should be 5)`);
}

{
  const from = { year: 2020, month: 2, day: 25 };
  const to = { year: 2020, month: 3, day: 2 };

  console.log(`days: ${daysBetween(from, to)} (should be 6)`);
  console.log(`isLeapYear: ${isLeapYear(from)} (should be yes)`);
}
*/
