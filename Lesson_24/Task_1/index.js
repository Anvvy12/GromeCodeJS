const dayOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];

function getDayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  return new Date(dayInFuture).getDay();
}
const result = getDayOfWeek(new Date(2019, 0, 1), 14);
console.log(dayOfWeek[result]);
