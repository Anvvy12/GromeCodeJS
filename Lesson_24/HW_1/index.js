export function getDiff(start, end) {
  const day = Math.round((end - start) / 1000 / 60 / 60 / 24);
  const hour = Math.round(((end - start) / 1000 / 60 / 60) % 24);
  const minute = Math.round(((end - start) / 1000 / 60) % 60);
  const second = Math.round(((end - start) / 1000) % 60);
  return `${day}d ${hour}h ${minute}m ${second}s`;
}
