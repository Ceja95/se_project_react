const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: $(res.status)`);
};

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
};

function createNewItem(itemData) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  }).then(checkResponse);
};

function deleteItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then(checkResponse);
};

export { getItems, createNewItem, deleteItem };