const monthsOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthsOfLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/*
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
*/

const isLeapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};

const year2days = (date) => {
  let totalDays = 0;
  for (let year = 0; year < date.year; year++) {
    totalDays += isLeapYear(year) ? 366 : 365;
  }
  return totalDays;
};

const daysBetween = (from, to) => {
  const daysTo = year2days(to) + month2days(to) + to.day;
  const daysFrom = year2days(from) + month2days(from) + from.day;
  return daysTo - daysFrom;
};

module.exports = { daysBetween, isLeapYear };

const monthsForSpecificYear = (year) => {
  if (isLeapYear(year)) {
    return monthsOfLeapYear;
  } else {
    return monthsOfYear;
  }
};

const month2days = (date) => {
  const totalDays = monthsForSpecificYear(date.year).reduce(
    (acc, months, index) => {
      if (index + 1 < date.month) {
        return acc + months;
      } else {
        return acc;
      }
    },
    0
  );

  return totalDays;
};
