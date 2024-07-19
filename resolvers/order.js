import Order from "../models/order.js"

const orderResolvers = {
    Query: {
        allOrders: async() => {
            return await Order.find()
        }
    },

    Mutation: {
        addOrder: async(_, orderDetails) => {
            const order = new Order({
                ...orderDetails
            })

            await order.save()
            return order
        },
        changeOrderStatus: async(_, {orderId, orderStatus}) => {
            const order = await Order.findOne({ orderId: mongoose.Types.ObjectId(orderId) })
            if (!order) throw new Error('order not found')
            order.status = orderStatus
            const updatedOrder = await order.save()
            return updatedOrder
        }
    }
}

export default orderResolvers