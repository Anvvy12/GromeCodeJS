export const getDiff = (startDate, endDate) => {
  const dateDif = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;

  const day = Math.ceil(dateDif / 60 / 60 / 24);
  const hour = Math.ceil((dateDif / 60 / 60) % 24);
  const minute = Math.ceil((dateDif / 60) % 60);
  const second = Math.ceil(dateDif % 60);
  return day + "d " + hour + "h " + minute + "m " + second + "s";
};

const date1 = new Date("September 1 2011 13:13");
const date2 = new Date("September 14 2011 13:12");

const res = getDiff(date1, date2);
console.log(res);

// =========================

// export function getDiff(date1, date2) {
//   let diff = (date2 - date1) / 1000;
//   diff = Math.abs(Math.floor(diff));

//   const days = Math.floor(diff / (24 * 60 * 60));
//   let leftSec = diff - days * 24 * 60 * 60;

//   const hrs = Math.floor(leftSec / (60 * 60));
//   leftSec -= hrs * 60 * 60;

//   const min = Math.floor(leftSec / 60);
//   leftSec -= min * 60;

//   return days + "d " + hrs + "h " + min + "m " + leftSec + "s";
// }

// const date1 = new Date();
// const date2 = new Date("2015/07/30 21:59:00");
// console.log(getDiff(date1, date2));
