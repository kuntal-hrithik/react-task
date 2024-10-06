import type { User } from "./types/user";

export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = (await response.json()) as User[];
  return data;
}

export function updateUser(id: number, data: User) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
}

export function deleteUser(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  });
}

export function createUser(data: User) {
  return fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
}
