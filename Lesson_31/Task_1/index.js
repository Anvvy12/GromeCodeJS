/*
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = (userId) => {
  // put your code here
  const promise = new Promise((resolve, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          userId,
          email: "userid777@example.com",
        });
      }, 1000);
    }
  });

  return promise;
};

const res = requestUserData("userid777");
res.catch((error) => console.log(error));
res.then((date) => console.log(date));
