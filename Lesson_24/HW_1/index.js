export function getDiff(startDate, endDate) {
  const dateDif = (endDate - startDate) / 1000;
  let res;
  if (dateDif > 0) {
    const day = Math.floor(dateDif / 60 / 60 / 24);
    const hour = Math.floor((dateDif / 60 / 60) % 24);
    const minute = Math.floor((dateDif / 60) % 60);
    const second = Math.floor(dateDif % 60);
    res = day + "d " + hour + "h " + minute + "m " + second + "s";
  } else {
    const day = Math.ceil(dateDif / 60 / 60 / 24);
    const hour = Math.ceil((dateDif / 60 / 60) % 24);
    const minute = Math.ceil((dateDif / 60) % 60);
    const second = Math.ceil(dateDif % 60);
    res = day + "d " + hour + "h " + minute + "m " + second + "s";
  }

  return endDate - startDate;
}

const date1 = new Date("September 1 2011 13:13");
const date2 = new Date("September 14 2011 13:12");

const res = getDiff(date1, date2);
console.log(res);
