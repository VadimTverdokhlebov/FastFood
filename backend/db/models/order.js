import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    new Schema({
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
      additives: [
        new Schema({
          additive: {
            type: Schema.Types.ObjectId,
            ref: 'Additive',
          },
        })],
      quantity: {
        type: Number,
        require: true,
      },
      sum: {
        type: Number,
        require: true,
      },
    })],
  status: {
    type: Boolean,
    require: true,
  },
  sumOrder: {
    type: Number,
    require: true,
  },

}, { timestamps: true });

orderSchema.plugin(mongoosePaginate);

export default mongoose.model('Order', orderSchema);
