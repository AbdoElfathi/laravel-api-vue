import api from "./api";

const reqource = "/tasks";

export const allTasks = () => api.get(reqource);

export const createTask = (task) => api.post(reqource, task);

export const updateTask = (id, task) => api.put(`${reqource}/${id}`, task);

export const removeTask = (id) => api.delete(`${reqource}/${id}`);

export const completeTask = (id) => api.patch(`${reqource}/${id}/complete`);
