import mongoose from 'mongoose';
import { getProduct, getAdditive } from '../db/requests/productRequests.js';
import { createOrder, getOrders } from '../db/requests/orderRequests.js';

class OrderController {
  async addOrder(req, res) {
    try {
      const userId = req.user.id;
      const { products } = req.body;
      let indexProductOrder = 0;

      const order = {
        user: mongoose.Types.ObjectId(userId),
        products: [],
        status: true,
        sum: 0,
      };

      for (const product of products) {
        const currentProduct = await getProduct(product.id);

        order.sum += Number(product.amount) * Number(currentProduct.price);

        order.products.push({
          product: mongoose.Types.ObjectId(product.id),
          quantity: product.amount,
          additives: [],
        });

        for (const id of product.additives) {
          const currentAdditive = await getAdditive(id);

          order.sum += Number(product.amount) * Number(currentAdditive.price);

          order.products[indexProductOrder].additives.push({
            additive: mongoose.Types.ObjectId(id),
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

  async getOrders(req, res) {
    try {
      const userId = req.user.id;
      const orders = await getOrders(userId);

      return res.json({ message: 'The list of orders is loaded', orders });
    } catch (e) {
      return res.json({ message: 'Failed to load order list' });
    }
  }
}

export default new OrderController();
