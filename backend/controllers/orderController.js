import mongoose from 'mongoose';
import { getProducts, getAdditives } from '../db/requests/productRequests.js';
import { createOrder, getOrders } from '../db/requests/orderRequests.js';

export default class OrderController {
  static async addOrder(req, res) {
    try {
      const userId = req.user.id;
      const { products } = req.body;
      const menu = await getProducts();
      const allAdditives = await getAdditives();
      let indexProductOrder = 0;

      const order = {
        user: mongoose.Types.ObjectId(userId),
        products: [],
        status: true,
        sumOrder: 0,
      };

      for (const product of products) {
        const currentProduct = menu.find((elem) => elem.id === product.id);

        order.sumOrder += Number(product.amount) * Number(currentProduct.price);

        order.products.push({
          product: mongoose.Types.ObjectId(product.id),
          quantity: product.amount,
          sum: currentProduct.price,
          additives: [],
        });

        for (const additiveId of product.additives) {
          const currentAdditive = allAdditives.find((elem) => elem.id === additiveId);

          order.sumOrder += Number(product.amount) * Number(currentAdditive.price);
          order.products[indexProductOrder].sum += Number(currentAdditive.price);

          order.products[indexProductOrder].additives.push({
            additive: mongoose.Types.ObjectId(additiveId),
          });
        }

        indexProductOrder += 1;
      }

      await createOrder(order);

      return res.json({ message: 'The order added', order });
    } catch (e) {
      console.log(e);
      return res.json({ message: 'The order not added' });
    }
  }

  static async getOrders(req, res) {
    try {
      const userId = req.user.id;
      const orders = await getOrders(userId);

      return res.json({ message: 'The list of orders is loaded', orders });
    } catch (e) {
      return res.json({ message: 'Failed to load order list' });
    }
  }
}
