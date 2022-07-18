function getDiff(start, end) {
  const day = Math.round((end - start) / 1000 / 60 / 60 / 24);
  const hour = Math.round(((end - start) / 1000 / 60 / 60) % 24);
  const minute = Math.round(((end - start) / 1000 / 60) % 60);
  const second = Math.round(((end - start) / 1000) % 60);
  return `${day}d ${hour}h ${minute}m ${second}s`;
}
const startDate = new Date(1994, 2, 12, 4, 0, 0);
const endDate = new Date(1995, 12, 10, 2, 1, 1);

console.log(getDiff(startDate, endDate));
