const orderTypedef = `#graphql
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
        allOrders: [Order!]!
    }

    type Mutation {
        addOrder(orderDetails: OrderDetailsInput!): Order!
        changeOrderStatus(orderId: ID!, orderStatus: String!): Order!
    }

    input CartItemInput {
        name: String!
        price: Float!
        quantity: Int!
    }

    input OrderDetailsInput {
        orderId: ID!
        items: [CartItemInput!]!
        totalPrice: Float!
        status: String!
    }
`
   

export default orderTypedef