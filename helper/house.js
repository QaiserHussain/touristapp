const URL = 'http://localhost:3000';

export const getAllHouse = async ()=>{
    const data = await fetch(`${URL}/api/house`,{method:'GET'}).then(res=>res.json()).then(data=> data);
    return data
}

export const getHouse = async (id)=>{
    const data = await fetch(`${URL}/api/house/${id}`,{method:'GET'}).then(res=>res.json()).then(data=> data);
    return data
}