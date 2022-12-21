import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  market: {
    type: String,
    require: true,
  },

});

export default mongoose.model('Product', productSchema);
