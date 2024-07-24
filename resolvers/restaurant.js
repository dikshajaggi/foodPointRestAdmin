import Restaurant from "../models/restaurant.js"
import tryCatchHandler from "../utils/tryCatch.js";

const RestaurantResolver = {
    Query: {
        showDetails: tryCatchHandler(() => {
            return Restaurant.find()
        })
    },

    Mutation: {
        loginRest : tryCatchHandler(async(_, {email, password}) => {
            const user = Restaurant.findOne({email})
            if (!user || user.password !== password) {
                throw new Error('Invalid credentials');
            }
            return "success";
        }),
        registerRest: tryCatchHandler(async(_,{registerDetails}) =>  {
            const rest = new Restaurant({
                ...registerDetails
            })
            await rest.save()
            return rest
        }),
        updateRest : tryCatchHandler(async(_,{restId, updateDetails}) => {
            let rest = Restaurant.findOne({restId})
            if (!rest) {
                throw new Error('Restaurant not found')
            }
            Object.assign(rest, updateDetails)
            return rest
        }),
        updateRestActivity: tryCatchHandler(async(_, {restId, updatedStatus}) => {
            let rest = Restaurant.findOne({restId})
            if (!rest) {
                throw new Error('Restaurant not found')
            }
            rest.online = updatedStatus
            await rest.save()
            return rest
        })
    }

}

export default RestaurantResolver