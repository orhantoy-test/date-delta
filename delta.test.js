const { test, expect } = require("@jest/globals");
const { daysBetween, isLeapYear } = require("./delta");

test("calculates days between dates in same month", () => {
  const from = { year: 2020, month: 10, day: 2 };
  const to = { year: 2020, month: 10, day: 10 };
  expect(daysBetween(from, to)).toBe(8);
});

test("Calculates days between two consecutive months", () => {
  const from = { year: 2020, month: 1, day: 20 };
  const to = { year: 2020, month: 2, day: 3 };
  expect(daysBetween(from, to)).toBe(14);
});

test("Calculates days between two years", () => {
  const from = { year: 2019, month: 12, day: 31 };
  const to = { year: 2020, month: 1, day: 2 };
  expect(daysBetween(from, to)).toBe(2);
});

test("Calculates days between two months April & May", () => {
  const from = { year: 2020, month: 4, day: 20 };
  const to = { year: 2020, month: 5, day: 2 };
  expect(daysBetween(from, to)).toBe(12);
});

test("Calculates days between non leap year's months Feb & Mar", () => {
  const from = { year: 2019, month: 2, day: 25 };
  const to = { year: 2019, month: 3, day: 2 };
  expect(daysBetween(from, to)).toBe(5);
});

test("Calculates days between leap year's months Feb & Mar", () => {
  const from = { year: 2020, month: 2, day: 25 };
  const to = { year: 2020, month: 3, day: 2 };
  expect(daysBetween(from, to)).toBe(6);
  expect(isLeapYear(from.year)).toBe(true);
});

test("calculates days between year-long period containing leap year", () => {
  const from = { year: 2018, month: 1, day: 2 };
  const to = { year: 2021, month: 2, day: 3 };
  expect(daysBetween(from, to)).toBe(1128);
});
