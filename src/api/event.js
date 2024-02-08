export const getEvent = async (id) => {
    const response = await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/event', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const event = await response.json();
    return event;
}

export const getLastEvent = async (id) => {
    const response = await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/last/event', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const lastEvent = await response.json();
    return lastEvent;
}

export const getFavoriteEvent = async (id) => {
    const response = await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/favorite/event', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const favoriteEvent = await response.json();
    return favoriteEvent;
}

export const getTypeEventUser = async (id) => {
    const response = await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/type/event/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(id)
        }
    )
    const favoriteEvent = await response.json();
    return favoriteEvent;
}

export const getTypeEvent = async () => {
    const response = await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/type/event', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        }
    )
    const typeEvent = await response.json();
    return typeEvent;
}

export const addEvent = async (event) => {
    await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/event/insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(event)
        }
    )
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}

// export const uploadImage = async (image) => {
//     await fetch(
//         'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/upload', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': image.type
//             },
//             body: image
//         }
//     )
// }