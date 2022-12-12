import fs from 'fs';

let dataProduct = fs.readFileSync('data.json');
let product = JSON.parse(dataProduct);

export function getProduct(req, res) {
    res.json(product);
}