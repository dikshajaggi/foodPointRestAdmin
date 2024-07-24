import moment from "moment";
import tryCatchHandler from "../utils/tryCatch.js";
import fetchOrders from "../utils/fetchOrders.js";
import Order from "../models/order.js";

const orderAnalyticsResolver = {
  Query: {
    todaysOrders: tryCatchHandler(async () => {
      const today = moment().startOf('day').format('MMMM DD, YYYY');
      const tomorrow = moment().add(1, 'days').startOf('day').format('MMMM DD, YYYY');
      return await fetchOrders(today, tomorrow);
    }),

    thisWeekOrders: tryCatchHandler(async () => {
        const startOfWeek = moment().startOf('isoWeek').format('MMMM DD, YYYY');
        const endOfWeek = moment().endOf('isoWeek').format('MMMM DD, YYYY');
        return await fetchOrders(startOfWeek, endOfWeek);
      }),

    thisMonthOrders: tryCatchHandler(async () => {
        const startOfMonth = moment().startOf('month').format('MMMM DD, YYYY');
        const endOfMonth = moment().endOf('month').format('MMMM DD, YYYY');
        return await fetchOrders(startOfMonth, endOfMonth);
      }),

    thisYearOrders: tryCatchHandler(async () => {
        const startOfYear = moment().startOf('year').format('MMMM DD, YYYY');
        const endOfYear = moment().endOf('year').format('MMMM DD, YYYY');
        console.log(startOfYear, endOfYear, "yearorders")
        return await fetchOrders(startOfYear, endOfYear);
      }),

    todaysRevenue: tryCatchHandler(async () => {
      const orders = await fetchOrders(
        moment().startOf('day').format('MMMM DD, YYYY'),
        moment().add(1, 'days').startOf('day').format('MMMM DD, YYYY')
      );
      return orders.reduce((totalPrice, order) => order.totalPrice + totalPrice, 0);
    }),

    thisWeekRevenue: tryCatchHandler(async () => {
        const orders = await fetchOrders(
          moment().startOf('isoWeek').format('MMMM DD, YYYY'),
          moment().endOf('isoWeek').format('MMMM DD, YYYY')
        );
        return orders.reduce((totalPrice, order) => order.totalPrice + totalPrice, 0);
      }),

    thisMonthRevenue: tryCatchHandler(async () => {
        const orders = await fetchOrders(
          moment().startOf('month').format('MMMM DD, YYYY'),
          moment().endOf('month').format('MMMM DD, YYYY')
        );
        return orders.reduce((totalPrice, order) => order.totalPrice + totalPrice, 0);
      }),

    thisYearRevenue: tryCatchHandler(async () => {
        const orders = await fetchOrders(
          moment().startOf('year').format('MMMM DD, YYYY'),
          moment().endOf('year').format('MMMM DD, YYYY')
        );
        return orders.reduce((totalPrice, order) => order.totalPrice + totalPrice, 0);
      }),

    pendingOrdersCount: tryCatchHandler(async() => {
      const result = await Order.aggregate([
        { $match: { status: "Pending" } },
        { $count: "pendingOrders" }
      ]);
    return result.length > 0 ? result[0].pendingOrders : 0
    }),
    confirmedOrdersCount: tryCatchHandler(async() => {
        const result = await Order.aggregate([
            { $match: { status: "Confirmed" } },
            { $count: "confirmedOrders" }
          ]);
        return result.length > 0 ? result[0].confirmedOrders : 0
    }),
    preparingOrdersCount: tryCatchHandler(async() => {
      const result = await Order.aggregate([
        { $match: { status: "Preparing" } },
        { $count: "preparingOrders" }
      ]);
    return result.length > 0 ? result[0].preparingOrders : 0
    }),
    OutforDeliveryOrdersCount: tryCatchHandler(async() => {
      const result = await Order.aggregate([
        { $match: { status: "Out for Delivery" } },
        { $count: "outForDeliveryOrders" }
      ]);
    return result.length > 0 ? result[0].outForDeliveryOrders : 0
    }),
    deliveredOrdersCount: tryCatchHandler(async() => {
      const result = await Order.aggregate([
        { $match: { status: "Delivered" } },
        { $count: "deliveredOrders" }
      ]);
    return result.length > 0 ? result[0].deliveredOrders : 0
    }),
    cancelledOrdersCount: tryCatchHandler(async() => {
      const result = await Order.aggregate([
        { $match: { status: "Cancelled" } },
        { $count: "cancelledOrders" }
      ]);
    return result.length > 0 ? result[0].cancelledOrders : 0
    })
  }
};

export default orderAnalyticsResolver;
