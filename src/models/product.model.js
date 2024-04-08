import mongoose from "mongoose";

// Definir el esquema del producto
const productSchema = new mongoose.Schema({
    barcode: {
        type: String,
        required: true,
        unique: true,
        match: /^\d+$/,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    expiredDate: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        enum: [0, 1],
        required: true,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
},
    {versionKey: false}

);

// Definir el modelo de Producto
const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
