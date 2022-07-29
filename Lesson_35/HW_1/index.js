const jsonString = '{"name": "Ben", "age": 24}';

export const parseUser = (string) => {
  try {
    return JSON.parse(string);
  } catch (err) {
    return null;
  }
};

console.log(parseUser(jsonString));
