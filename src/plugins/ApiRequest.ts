

export const getData = async (url:string,limit:number = 10) => {
    const data = await fetch(`https://dragonball-api.com/api/${url}?limit=${limit}`, {
        method: 'GET',
        headers: {}
    }).then(resp => resp.json()).catch(err => console.log(err))
    console.log(data);
    return data;
}
