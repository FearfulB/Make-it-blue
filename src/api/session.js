export const setUserSession = async (user) => {
    await fetch(
        'https://leguyader.alwaysdata.net/setUserSession', {
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
        'https://leguyader.alwaysdata.net/getUserSession', {
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