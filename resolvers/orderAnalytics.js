import moment from "moment";
import tryCatchHandler from "../utils/tryCatch.js";
import fetchOrders from "../utils/fetchOrders.js";

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

    pendingOrdersCount: tryCatchHandler(async() => {}),
    confirmedOrdersCount: tryCatchHandler(async() => {}),
    preparingOrdersCount: tryCatchHandler(async() => {}),
    OutforDeliveryOrdersCount: tryCatchHandler(async() => {}),
    deliveredOrdersCount: tryCatchHandler(async() => {}),
    cancelledOrdersCount: tryCatchHandler(async() => {})
  }
};

export default orderAnalyticsResolver;
