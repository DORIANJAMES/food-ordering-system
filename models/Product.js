import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        productImage: {
            type: String,
        },
        productName: {
            type: String,
        },
        productDescription: {
            type: String,
        },
        productCategory: {
            type: String,
        },
        productPrices: {
            type: [Number],
        },
        productExtras: {
            type: [
                {
                    text: {type: String},
                    price: {type: Number}
                }
            ]
        }
    },
    {timestamps: true}
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
