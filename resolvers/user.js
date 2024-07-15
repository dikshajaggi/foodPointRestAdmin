import { users } from "../assets/sampleData.js"

const userResolvers = {

    Query : {
        users : () => {
            return users
        },

        user: (_, {userId}) => {
            return users.find(user => user._id === userId)
        }
    },

    Mutation: {
        deleteUser: (_, {id}) => {
            const index = users.findIndex(user => user._id === id)
            if (index !== -1) {
                const [deleteduser] = users.splice(index, 1);
                return deleteduser;
            }
            return null
        },

        addUser: (_, {userDetails}) => {
            const newUser = {
                ...userDetails,
                _id : Math.floor(Math.random())
            }
            users.push(newUser)
            return newUser
        },

        updateUser: (_, {id, updateDetails}) => {
            const index = users.findIndex(user => user._id === id)
            if (index !== -1) {
                users[index] = { ...users[index], ...updateDetails };
                return users[index];
            }
            return null
        }
    }
}

export default userResolvers