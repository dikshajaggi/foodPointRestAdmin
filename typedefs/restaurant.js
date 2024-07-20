const restaurantTypedef = `#graphql
    type Restaurant {
        name: String!
        thumbnail: String!
        cuisines: [String!]!
        priceForTwo: Float!
        deliveryTime: Int!
        deliveryCharge: Float!
        deals: String!
        contact: [Int!]!
        outlets: [String!]!
        ownerId: [String!]!
        password: String!
        username: String!
        email: String!
        # pics of aadhar card/ gst etc.
    }

    type Query {
        showDetails: Restaurant!
    }

    type Mutation {
        loginRest(email: String! password: String!): Restaurant!
        registerRest(registerDetails: registrationDetailsInput!): Restaurant!
        updateRest(restId: ID!, updateDetails: UpdatedDetailsInput!) : Restaurant!
        # update rest is for restaurant settings
    }

    input registrationDetailsInput {
        name: String!
        thumbnail: String!
        cuisines: [String!]!
        priceForTwo: Float!
        deliveryTime: Int!
        deliveryCharge: Float!
        deals: [String!]
        contact: [Int!]!
        outlets: [String!]!
        ownerId: [String!]!
        password: String!
        username: String!
        email: String!
    }

    input UpdatedDetailsInput {
        thumbnail: String
        cuisines: [String!]
        priceForTwo: Float
        deliveryTime: Int
        deliveryCharge: Float
        deals: [String!]
    }
`
export default restaurantTypedef