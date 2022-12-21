import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Additive from '../models/additive.js';
import connectToDataBase from '../connectToDataBase.js';

const dir = dirname(fileURLToPath(import.meta.url));

async function seedAdditives() {
  try {
    const dataProduct = fs.readFileSync(path.resolve(dir, 'data.json'));
    const product = JSON.parse(dataProduct);

    for (const category in product.additives) {
      for (const additive of product.additives[category]) {
        const dataAdditive = {
          category: additive.category,
          name: additive.name,
          image: additive.image,
          description: additive.description,
          price: additive.price,
        };

        const insertAdditive = new Additive(dataAdditive);
        await insertAdditive.save();
        console.log(`Insert additive:${insertAdditive.name}`);
      }
    }
    console.log('Write sucсess');
  } catch (e) {
    console.error(e);
  }
}

connectToDataBase();
seedAdditives();
