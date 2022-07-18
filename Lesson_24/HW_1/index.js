export const getDiff = (startDate, endDate) => {
  console.log(endDate - startDate);
  const dateDif = (endDate - startDate) / 1000;
  console.log(dateDif);

  const day = Math.floor(dateDif / 60 / 60 / 24);
  const hour = Math.floor((dateDif / 60 / 60) % 24);
  const minute = Math.floor((dateDif / 60) % 60);
  const second = Math.floor(dateDif % 60);
  return `${day}d ${hour}h ${minute}m ${second}s`;
};

const date1 = new Date("September 1 2011 13:13");
const date2 = new Date("September 14 2011 13:13:12");

const res = getDiff(date1, date2);
console.log(res);
