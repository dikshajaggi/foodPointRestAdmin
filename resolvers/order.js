import Order from "../models/order.js"
import tryCatchHandler from "../utils/tryCatch.js"

const orderResolvers = {
    Query: {
        allOrders: tryCatchHandler(async() => {
            return await Order.find()
        })
    },

    Mutation: {
        addOrder: tryCatchHandler(async(_, {orderDetails}) => {
            const order = new Order({
                ...orderDetails
            })

            await order.save()
            return order
        }),
        changeOrderStatus: tryCatchHandler(async(_, {orderId, orderStatus}) => {
            const order = await Order.findOne({orderId})
            if (!order) throw new Error('order not found')
            order.status = orderStatus
            const updatedOrder = await order.save()
            return updatedOrder
        })
    }
}

export default orderResolvers