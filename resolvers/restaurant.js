import Restaurant from "../models/restaurant.js"

const RestaurantResolver = {
    Query: {
        showDetails: () => {
            return Restaurant.find()
        }
    },

    Mutation: {
        loginRest : async(_, {email, password}) => {
            const user = Restaurant.findOne({email})
            if (!user || user.password !== password) {
                throw new Error('Invalid credentials');
            }
            return "success";
        },
        registerRest: async(_,{registerDetails}) =>  {
            const rest = new Restaurant({
                ...registerDetails
            })
            await rest.save()
            return rest
        },
        updateRest : async(_,{restId, updateDetails}) => {
            let rest = Restaurant.findOne({restId})
            if (!rest) {
                throw new Error('Restaurant not found')
            }
            Object.assign(rest, updateDetails)
            return rest
        }
    }

}

export default RestaurantResolver