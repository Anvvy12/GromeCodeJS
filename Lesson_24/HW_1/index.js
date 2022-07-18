export const getDiff = (startDate, endDate) => {
  console.log(startDate - endDate);
  const dateDif = (startDate - endDate) / 1000;
  console.log(dateDif);

  const day = Math.trunc(dateDif / 60 / 60 / 24);
  const hour = Math.trunc((dateDif / 60 / 60) % 24);
  const minute = Math.trunc((dateDif / 60) % 60);
  const second = Math.trunc(dateDif % 60);
  return `${day}d ${hour}h ${minute}m ${second}s`;
};

const date1 = new Date("September 17 2011 13:13");
const date2 = new Date("September 14 2011 13:13");

const res = getDiff(date1, date2);
console.log(res);
