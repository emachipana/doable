import { token_key } from "../config";
import apiFetch from "./api-fetch";

export async function login(credentials) {
  const { token } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(token_key, token);
  
  return token;
}

export function getUser() {
  const token = sessionStorage.getItem(token_key);

  return Promise.resolve(token);
}

export async function signup(data) {
  const { token } = await apiFetch("signup", { body: data });
  sessionStorage.setItem(token_key, token);

  return token;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(token_key);
}
