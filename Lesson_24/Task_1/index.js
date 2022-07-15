const dayOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];

function getDayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  const result = new Date(dayInFuture).getDay();
  return dayOfWeek[result];
}
const result = getDayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
