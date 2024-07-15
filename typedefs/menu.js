const menuTypedef = `#graphql

    type RestaurantMenu {
        _id: ID!
        restId: ID!
        dishName: String!
        isAvailable: Boolean!
        image: String!
        price: Float!
        veg_classifier: String!
        offers: [String!]!
    }

    type Query {
        menu: [RestaurantMenu!]!
        dish(dishId: ID!): RestaurantMenu!
    }

    type Mutation {
        addMenuItems(menuInput: DishInput!): RestaurantMenu!
        deleteMenuItems(dishId: ID!): RestaurantMenu!
        updateMenuItems(dishId: ID!, updatedMenuItem: UpdateDishInput!) : RestaurantMenu!
        clearMenu: [RestaurantMenu!]!
    }

    input DishInput {
        restId: ID!
        dishName: String!
        isAvailable: Boolean!
        image: String!
        price: Float!
        veg_classifier: String!
        offers: [String!]!
    }

    input UpdateDishInput {
        restId: ID
        dishName: String
        isAvailable: Boolean
        image: String
        price: Float
        veg_classifier: String
        offers: [String!]
    }
`

export default menuTypedef