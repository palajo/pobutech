import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    category: { type: String },
    image: { type: String, required: true },
    title: { type: String, required: true },
    productcode: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
