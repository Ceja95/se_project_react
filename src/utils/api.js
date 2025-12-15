import { baseUrl } from "./constants";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: $(res.status)`);
};

function getItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

function createNewItem(item, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}

function deleteItem(_id, token) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function addCardLike(_id, token) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function removeCardLike(_id, token) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { getItems, createNewItem, deleteItem, addCardLike, removeCardLike };
