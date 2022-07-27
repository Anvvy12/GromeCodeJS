const baseUrl = "https://crudcrud.com/api/49dffa4295624360a73c57391a105b71";

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => {
    response.json();
  });
};

export const createTasks = (taskData) => {
  return fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTasks = (taskId, updatedTasksData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTasksData),
  });
};
