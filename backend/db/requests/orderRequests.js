import Order from '../models/order.js';

export async function createOrder(dataOrder) {
  const order = new Order(dataOrder);

  await order.save();
}

export async function getOrders(userId) {
  const orders = await Order.find({ user: userId })
    .populate('products.product').populate('products.additives.additive');

  return orders;
}
