export function getDiff(start, end) {
  const dateDif = (end - start) / 1000;
  const day = Math.round(dateDif / 60 / 60 / 24);
  const hour = Math.round((dateDif / 60 / 60) % 24);
  const minute = Math.round((dateDif / 60) % 60);
  const second = Math.round(dateDif % 60);
  return `${day}d ${hour}h ${minute}m ${second}s`;
}

const date1 = new Date(2001, 7, 17, 12, 0, 0);
const date2 = new Date(2001, 7, 17, 12, 61, 61);

const res = getDiff(date1, date2);
console.log(res);
