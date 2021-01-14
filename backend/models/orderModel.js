import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                image: { type: String, required: true },
                title: { type: String, required: true },
                quantity: {type: Number, required: true},
                productcode: { type: String, required: true },
                price: { type: String, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                }
            }
        ],
        shippingAddress: [
            {
                firstName: { type: String, required: true },
                lastName: { type: String, required: true },
                email: { type: String, required: true },
                phone: { type: String, required: true },
                deliveryService: { type: String, required: true },
                city: { type: String, required: true },
                address: { type: String, required: true },
                department: { type: String, required: true },
                payment: { type: String, required: true }
            }
        ],
        itemsPrice: { type: Number, required: true },
        shippingPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true }
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;