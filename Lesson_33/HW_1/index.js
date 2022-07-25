const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

export function getTasksList() {
  // put your code here
  return fetch(baseUrl).then((data) => data.json());
}

export function getTaskById(taskId) {
  const resArr = fetch(baseUrl).then((date) => {
    date.json().filter((obj) => obj.id === taskId);
  });
  return resArr[0];
}

// examples;
getTasksList().then((tasksList) => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById("2").then((taskData) => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
