const orderAnalyticsTypedef = `#graphql
    type cartItem {
        name: String!
        price: Float!
        quantity: Int!
    }

    type Order {
        _id: ID!
        orderId: ID!
        items: [cartItem!]!
        totalPrice: Float!
        status: String!
        date: String!
    }

    type Query {
        todaysOrders: [Order!]!
        thisWeekOrders: [Order!]!
        thisMonthOrders: [Order!]!
        thisYearOrders: [Order!]!

        todaysRevenue: Float!
        thisWeekRevenue: Float!
        thisMonthRevenue: Float!
        thisYearRevenue: Float!

        pendingOrdersCount: Int!
        confirmedOrdersCount: Int!
        preparingOrdersCount: Int!
        OutforDeliveryOrdersCount: Int!
        deliveredOrdersCount: Int!
        cancelledOrdersCount: Int!
        
    }
`
   

export default orderAnalyticsTypedef