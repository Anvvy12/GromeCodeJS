export const getAdults = (obj) => {
  const res = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }
  return res;
};

console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }));
