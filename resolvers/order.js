import Order from "../models/order.js"
import tryCatchHandler from "../utils/tryCatch.js"


const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};


const orderResolvers = {
    Query: {
        allOrders: tryCatchHandler(async() => {
            return await Order.find()
        })
    },

    Mutation: {
        addOrder: tryCatchHandler(async(_, {orderDetails}) => {
            const date = new Date()
            const order = new Order({
                ...orderDetails,
                date: date.toLocaleString('en-US', options)
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