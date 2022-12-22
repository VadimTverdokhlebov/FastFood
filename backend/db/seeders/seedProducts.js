import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/products.js';
import connectToDataBase from '../connectToDataBase.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function seedAdditives() {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, 'data.json'));
    const products = JSON.parse(data);

    for (const product of products.menu) {
      const dataProduct = {
        name: product.name,
        category: product.category,
        image: product.image,
        description: product.description,
        price: product.price,
      };
      const insertProduct = new Product(dataProduct);
      await insertProduct.save();
      console.log(`Insert product:${insertProduct.name}`);
    }

    console.log('Write sucсess');
  } catch (e) {
    console.error(e);
  }
}

connectToDataBase();
seedAdditives();
