export function getDiff(endTime) {
  let delta = Math.floor((endTime - new Date()) / 1000);
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  const seconds = delta % 60;
  const dateStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return dateStr;
}

const endTime = new Date("2017-12-31T23:59:59.999");

const r = getDiff(endTime);
console.log(r);
