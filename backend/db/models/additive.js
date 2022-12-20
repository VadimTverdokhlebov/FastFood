import mongoose from 'mongoose';

export const additiveSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    category: {
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

});

export const Additive = mongoose.model('Additive', additiveSchema);
