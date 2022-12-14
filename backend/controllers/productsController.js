import fs from 'fs';

export function getProduct(req, res) {
    const dataProduct = fs.readFileSync('data.json');
    const product = JSON.parse(dataProduct);

    return res.json(product);
}