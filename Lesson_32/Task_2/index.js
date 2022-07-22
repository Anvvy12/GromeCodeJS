const urlPull = [
  "https://server.com/us/userId",
  "https://server.com/eu/userId",
  "https://server.com/au/userId",
];

const getRandomNumber = (from, to) => {
  const res = from + Math.random() * (to - from);
  console.log(res);
  return res;
};
const request = (url) =>
  new Promise((resolve, reject) => {
    const randomeRelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: { name: "Tom", age: 17 },
        source: url,
      });
    }, randomeRelay);
  });

export const getUserASAP = (userId) => {
  const userUrls = urlPull.map((serverUrl) => `${serverUrl}/user/${userId}`);
  const requests = userUrls.map((userUrl) => request(userUrl));
  return Promise.race(requests);
};

getUserASAP("user-id:/12").then((value) => console.log(value));
