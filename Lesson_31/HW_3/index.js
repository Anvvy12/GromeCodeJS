export const delay = (millisec) => {
  const falsePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millisec);
  });

  return falsePromise;
};

delay(3000).then(() => console.log("Done"));
