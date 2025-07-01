const baseUrl = "http://localhost:3001";

function getItems(){
    return fetch(`${baseUrl}/items`)
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
}

function newItem(){
    console.log(newItem);
    return fetch(`${baseUrl}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            weather: weather,
            link: imageUrl,
            _id: Date.now(),
        }),
    }).then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
}

function deleteItem() {
    return fetch(`${baseUrl}/items/${_id}`)
    .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    });
}
export { getItems, newItem, deleteItem };