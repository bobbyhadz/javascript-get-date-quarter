// EXAMPLE 1 - Get the Quarter from a Date using JavaScript

/**
 * January 1st - March 31st  = First Quarter
 * April 1st - June 30th = Second Quarter
 * July 1st - September 30th = Third Quarter
 * October 1st - December 31st = Fourth Quarter
 */

function getQuarter(date = new Date()) {
  return Math.floor(date.getMonth() / 3 + 1);
}

console.log(getQuarter()); // 👉️ current quarter ✅
console.log(getQuarter(new Date('2023-01-24'))); // 👉️ 1
console.log(getQuarter(new Date('2023-02-24'))); // 👉️ 1
console.log(getQuarter(new Date('2023-03-24'))); // 👉️ 1
console.log(getQuarter(new Date('2023-04-24'))); // 👉️ 2
console.log(getQuarter(new Date('2023-05-24'))); // 👉️ 2
console.log(getQuarter(new Date('2023-06-24'))); // 👉️ 2
console.log(getQuarter(new Date('2023-07-24'))); // 👉️ 3
console.log(getQuarter(new Date('2023-08-24'))); // 👉️ 3
console.log(getQuarter(new Date('2023-09-24'))); // 👉️ 3
console.log(getQuarter(new Date('2023-10-24'))); // 👉️ 4
console.log(getQuarter(new Date('2023-11-24'))); // 👉️ 4
console.log(getQuarter(new Date('2023-12-24'))); // 👉️ 4

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the number of days left in a Quarter

// function getQuarter(date = new Date()) {
//   return Math.floor(date.getMonth() / 3 + 1);
// }

// function daysLeftInQuarter(date = new Date()) {
//   const quarter = getQuarter(date);

//   const nextQuarter = new Date();

//   if (quarter === 4) {
//     nextQuarter.setFullYear(date.getFullYear() + 1, 0, 1);
//   } else {
//     nextQuarter.setFullYear(date.getFullYear(), quarter * 3, 1);
//   }

//   const ms1 = date.getTime();
//   const ms2 = nextQuarter.getTime();

//   return Math.floor((ms2 - ms1) / (24 * 60 * 60 * 1000));
// }

// console.log(daysLeftInQuarter(new Date())); // 👉️ current date til next quarter
// console.log(daysLeftInQuarter(new Date('2022-03-01'))); // 👉️ 31
// console.log(daysLeftInQuarter(new Date('2022-03-29'))); // 👉️ 3
// console.log(daysLeftInQuarter(new Date('2022-12-30'))); // 👉️ 2
// console.log(daysLeftInQuarter(new Date('2022-12-31'))); // 👉️ 1
// console.log(daysLeftInQuarter(new Date('2022-03-31'))); // 👉️ 1
