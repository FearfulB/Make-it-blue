export const setUserSession = async (user) => {
    await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/setUserSession', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }
    )
}


export const getUserSession = async () => {
    const response = await fetch(
        'https://codesandbox.io/p/github/NattanGTech/Backend-MIB/main?workspaceId=b8f4b372-d0d3-4f67-98d0-abac6f626da6/getUserSession', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }
    )
    const user = await response.json();
    return user;
}