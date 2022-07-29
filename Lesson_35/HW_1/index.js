const jsonString = '{"name": "Ben", "age": 24}';

const parseUser = (string) => {
  try {
    return JSON.parse(string);
  } catch (err) {
    return null;
  }
};

console.log(parseUser(jsonString));
