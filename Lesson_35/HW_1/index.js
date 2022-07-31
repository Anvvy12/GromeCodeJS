const jsonString = '{"name": "Ben", "age": 24}';

// export const parseUser = (string) => {
//   try {
//     return JSON.parse(string);
//   } catch (err) {
//     return null;
//   }
// };

console.log(parseUser(jsonString));

const incaps = (a) => {
  return a;
};
const incaps = (a, b) => {
  return a + b;
};
const incaps = (a, b, c) => {
  return a + b + c;
};

incaps(2);
incaps(2, 5);
incaps(2, 5, 10);
