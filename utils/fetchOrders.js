import moment from "moment";
import Order from "../models/order.js";

const fetchOrders = async (startDate, endDate) => {
    const start = moment(startDate, "MMMM DD, YYYY").startOf('day');
    const end = moment(endDate, "MMMM DD, YYYY").endOf('day');
    const orders = await Order.find();
    return orders.filter(order => {
      const orderDate = moment(order.date, "MMMM DD, YYYY at hh:mm:ss A [GMT]Z");
      return orderDate.isBetween(start, end, null, '[]');
    });
  };
export default fetchOrders
