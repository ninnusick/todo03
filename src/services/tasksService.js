import axios from "axios";

export function getTasksService() {
  return axios.get("/tasks").then((res) => res.data);
}
export function addTaskService(text) {
  return axios.post("/tasks", {
    text,
    completed: false,
  });
}
export function updateTaskService(id, completed) {
  return axios
    .patch(`/tasks/${id}`, {
      completed,
    })
    .then((res) => res.data);
}
export function removeTaskService(id, completed) {
  return axios.delete(`/tasks/${id}`).then((res) => res.data);
}
