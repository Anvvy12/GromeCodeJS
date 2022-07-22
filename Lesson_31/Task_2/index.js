const asyncCalculator = (number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${number}`);
      resolve(number);
    }, 500);
  })
    .then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const res = data ** 2;
            console.log(`Squared value: ${res}`);
            resolve(res);
          }, 500);
        })
    )
    .then(
      (data) =>
        new Promise((resolve) => {
          const res = data * 2;
          console.log(`Doubled value: ${res}`);
          resolve(res);
        })
    );

const resCalc = asyncCalculator(5);
