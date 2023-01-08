const URL = process.env.NODE_ENV === 'production' ? 'https://touristapp.vercel.app' : 'http://localhost:3000';

export const getAllHouse = async () => {
    const data = await fetch(`${URL}/api/house`, { method: 'GET', }).then(res => res.json()).then(data => data);
    return data
}

export const getHouse = async (id) => {
    const data = await fetch(`${URL}/api/house/${id}`, { method: 'GET' }).then(res => res.json()).then(data => data);
    return data.data
}

export const createHouse = async (createData) => {
    const data = await fetch(`${URL}/api/house`, {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(createData)
    })
    const json = await data.json();
    return json;
}