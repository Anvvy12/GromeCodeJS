export function getDiff(date1, date2) {
  let diff = (date2 - date1) / 1000;
  diff = Math.abs(Math.floor(diff));

  const days = Math.floor(diff / (24 * 60 * 60));
  let leftSec = diff - days * 24 * 60 * 60;

  const hrs = Math.floor(leftSec / (60 * 60));
  leftSec -= hrs * 60 * 60;

  const min = Math.floor(leftSec / 60);
  leftSec -= min * 60;

  return `${days}d ${hrs}h" ${min}m ${leftSec}s`;
}

// const date1 = new Date();
// const date2 = new Date("2015/07/30 21:59:00");
// console.log(getDiff(date1, date2));
