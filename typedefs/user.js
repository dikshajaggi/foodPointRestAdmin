const userTypeDef = `#graphql
    type User {
        _id: ID!
        username: String!
        name: String!
        password: String!
        gender: String!
        profilePic: String!
    }

    type Query {
        users: [User!]
        user(userId: ID!) : User!
    }

    type Mutation {
        deleteUser(id: ID!): [User!],
        addUser(userDetails: createUser!) : User!,
        updateUser(id: ID!, updateDetails: updateUser!): User!
    }

    input createUser {
        username: String!
        name: String!
        password: String!
        gender: String!
        profilePic: String!
    }

    input updateUser {
        username: String
        name: String
        password: String
        gender: String
        profilePic: String
    }
`
export default userTypeDef
