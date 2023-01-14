const URL = process.env.NODE_ENV === 'production' ? 'https://touristapp.vercel.app' : 'http://localhost:3000';

export const getUsers = async () => {
    const data = await fetch(`${URL}/api/user`, { method: 'GET', }).then(res => res.json()).then(data => data);
    return data
}

export const getUser = async (id) => {
    const data = await fetch(`${URL}/api/user/${id}`, { method: 'GET' }).then(res => res.json()).then(data => data);
    return data.data
}

export const updateUser = async (user) => {
    const { id } = user;
    console.log(id);
    const data = await fetch(`${URL}/api/user/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => data);
    return data
}

export const createUser = async (createData) => {
    const data = await fetch(`${URL}/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(createData)
    })
    const json = await data.json();
    return json;
}

export const loginUser = async (loginData) => {
    const data = await fetch(`${URL}/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(loginData)
    })
    const json = await data.json();
    return json;
}