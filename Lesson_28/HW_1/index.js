export const shmoment = (startDate) => {
  const inputDate = startDate;

  const options = {
    add(type, number) {
      switch (type) {
        case "milliseconds":
          inputDate.setMilliseconds(inputDate.getMilliseconds() + number);
          break;
        case "seconds":
          inputDate.setSeconds(inputDate.getSeconds() + number);
          break;
        case "minutes":
          inputDate.setMinutes(inputDate.getMinutes() + number);
          break;
        case "hours":
          inputDate.setHours(inputDate.getHours() + number);
          break;
        case "days":
          inputDate.setDate(inputDate.getDate() + number);
          break;
        case "months":
          inputDate.setMonth(inputDate.getMonth() + number);
          break;
        case "years":
          inputDate.setFullYear(inputDate.getFullYear() + number);
          break;

        default:
          console.log("Invalid input");
          break;
      }
      return this;
    },
    subtract(type, number) {
      switch (type) {
        case "milliseconds":
          inputDate.setMilliseconds(inputDate.getMilliseconds() - number);
          break;
        case "seconds":
          inputDate.setSeconds(inputDate.getSeconds() - number);
          break;
        case "minutes":
          inputDate.setMinutes(inputDate.getMinutes() - number);
          break;
        case "hours":
          inputDate.setHours(inputDate.getHours() - number);
          break;
        case "days":
          inputDate.setDate(inputDate.getDate() - number);
          break;
        case "months":
          inputDate.setMonth(inputDate.getMonth() - number);
          break;
        case "years":
          inputDate.setFullYear(inputDate.getFullYear() - number);
          break;

        default:
          console.log("Invalid input");
          break;
      }
      return this;
    },
    result() {
      return inputDate;
    },
  };

  return options;
};

// trst data
const res = shmoment(new Date("September, 11, 11"))
  .add("days", 12)
  .subtract("months", 4)
  .result();

console.log(res);
