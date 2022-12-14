import fs from 'fs';

export function getProduct(req, res) {

    const dataProduct = fs.readFileSync('./db/seeders/data.json');
    const product = JSON.parse(dataProduct);
    
    return res.json(product);
}