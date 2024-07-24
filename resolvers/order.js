import moment from "moment";
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
        }),
        todaysOrders: tryCatchHandler(async() => {
            const today = moment().startOf('day').format('MMMM DD, YYYY')
            console.log(today, "todays orders")
            return await Order.find({
                date: {$regex: new RegExp(`^${today}`)}
            })
       }),
       thisWeekOrders: async () => {
        const startOfWeek = moment().startOf('isoWeek').format('MMMM DD, YYYY');
        const endOfWeek = moment().endOf('isoWeek').format('MMMM DD, YYYY');

        return await Order.find({
            date: {
                $gte: startOfWeek,
                $lt: endOfWeek
            }
        });
    },
    thisMonthOrders: async () => {
        const startOfMonth = moment().startOf('month').format('MMMM DD, YYYY');
        const endOfMonth = moment().endOf('month').format('MMMM DD, YYYY');

        return await Order.find({
            date: {
                $gte: startOfMonth,
                $lt: endOfMonth
            }
        });
    },
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