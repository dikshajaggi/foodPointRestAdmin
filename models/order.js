import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    items: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    totalPrice: Number,
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
        default: 'Pending'
    }
})
    // used enum to make sure that any other status is not used except these given statuses

const Order = mongoose.model('Order', OrderSchema)
export default Order