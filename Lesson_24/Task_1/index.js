const toatalDay = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];

export function dayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  const result = new Date(dayInFuture).getDay();
  return toatalDay[result];
}
const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
