export function getDiff(start, end) {
  const dateDif = (end - start) / 1000;
  const day = Math.round(dateDif / 60 / 60 / 24);
  const hour = Math.round((dateDif / 60 / 60) % 24);
  const minute = Math.round((dateDif / 60) % 60);
  const second = Math.round(dateDif % 60);
  //   return `${day}d ${hour}h ${minute}m ${second}s`;
  return day + "d " + hour + "h " + minute + "m " + second + "s";
}

const date1 = new Date("September 12 2011 13:13");
const date2 = new Date("September 14 2011 13:13");

const res = getDiff(date1, date2);
console.log(res);
