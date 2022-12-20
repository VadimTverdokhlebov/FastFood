import mongoose from 'mongoose';

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
                ref: 'Product'
            },
            additives: [
                new Schema({
                    additive: {
                        type: Schema.Types.ObjectId,
                        ref: 'Additive'
                    }
                })],
            quantity: {
                type: Number,
                require: true,
            }
        })],
    status:{
        type: Boolean,
        require: true,
    },
    sum:{
        type: Number,
        require: true,
    }

}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);

