const restaurantTypedef = `#graphql
    type Restaurant {
        name: String!
        thumbnail: String!
        cuisines: [String!]!
        priceForTwo: Float!
        deliveryTime: Int!
        deliveryCharge: Float!
        contact: [Int!]!
        outlets: [String!]!
        ownerId: [String!]!
            # pics of aadhar card/ gst etc.
        password: String!
        username: String!
        email: String!
        online: Boolean!
        working_days: [String!]!
        opening_time: String!
        closing_time: String!
        menu_type: String!
    }
    type Query {
        showDetails: Restaurant!
    }

    type Mutation {
        loginRest(email: String! password: String!): Restaurant!
        registerRest(registerDetails: registrationDetailsInput!): Restaurant!
        updateRest(restId: ID!, updateDetails: UpdatedDetailsInput!) : Restaurant!
        updateRestActivity(restId: ID!, updatedStatus: Boolean!) : Restaurant!
        # update rest is for restaurant settings
    }

    input registrationDetailsInput {
        name: String!
        thumbnail: String!
        cuisines: [String!]!
        priceForTwo: Float!
        deliveryTime: Int!
        deliveryCharge: Float!
        contact: [Int!]!
        outlets: [String!]!
        ownerId: [String!]!
        password: String!
        username: String!
        email: String!
        online: Boolean!
        working_days: [String!]!
        opening_time: String!
        closing_time: String!
        menu_type: String!
    }

    input UpdatedDetailsInput {
        thumbnail: String
        cuisines: [String!]
        priceForTwo: Float
        deliveryTime: Int
        deliveryCharge: Float
        online: Boolean!
        working_days: [String!]
        opening_time: String
        closing_time: String
        outlets: [String!]
        menu_type: String
    }
`
export default restaurantTypedef