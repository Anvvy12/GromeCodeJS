const urlPull = [
  "https://server.com/us/userId",
  "https://server.com/eu/userId",
  "https://server.com/au/userId",
];

const getRandomNumber = (from, to) => from + Math.random() * (to - from);
const request = (url) =>
  new Promise((resolve, reject) => {
    const randomeRelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userDate: { name: "Tom", age: 14 },
        course: url,
      });
    }, randomeRelay);
  });

const getUserASAP = (userId) => {
  const userUrls = urlPull.map((serverUrl) => `${serverUrl}/user/${userId}`);
  const requests = userUrls.map((userUrl) => request(userUrl));
  return Promise.race(requests);
};

getUserASAP("user-id:/12").then((value) => console.log(value));
