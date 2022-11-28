export async function getDataProduct() {

    const url = 'http://localhost:3000/api';
    const response = await fetch(url);
    const json = await response.json();
    
    return json;
}
