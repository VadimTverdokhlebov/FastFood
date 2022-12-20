import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema({
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

export const Product = mongoose.model('Product', productSchema);