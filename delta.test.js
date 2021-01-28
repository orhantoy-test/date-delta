const { test, expect } = require("@jest/globals");
const { daysBetween } = require("./delta");

test("calculates days between dates in same month", () => {
  const from = { year: 2020, month: 10, day: 2 };
  const to = { year: 2020, month: 10, day: 10 };

  expect(daysBetween(from, to)).toBe(8);
});

/*

TODO: Calculate the following blocks into individual Jest tests.

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
