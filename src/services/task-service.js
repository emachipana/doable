import apiFetch from "./api-fetch";

export async function getTasks() {
  return await apiFetch("tasks");
}

export async function createTask(data) {
  return await apiFetch("tasks", { body: data });
}

export async function updateTask(id, data) {
  return await apiFetch(`tasks/${id}`, { method: "PATCH", body: data });
}
