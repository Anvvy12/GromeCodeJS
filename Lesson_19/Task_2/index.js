const getOwnProps = (obj) => {
  const resArr = [];
  for (let element in obj) {
    if (obj.hasOwnProperty(element) && typeof obj[element] !== "function") {
      resArr.push(element);
    }
  }

  return resArr;
};

const denser = {
  loveDancing: true,
};

const obj = {
  name: "John",
  job: "driver",
  sleep() {
    console.log("Go to sleep");
  },
  __proto__: denser,
};

console.log(getOwnProps(obj));
