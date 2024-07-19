import Menu from "../models/menu.js";
import tryCatchHandler from "../utils/tryCatch.js";

const menuResolvers = {
    Query: {
        menu : tryCatchHandler(async () => {
            return await Menu.find()
        }),

        dish: tryCatchHandler(async (_, {dishId}) => {
            return await Menu.find(dish => dish._id === dishId)
        })
    },

    Mutation: {
        addMenuItems: tryCatchHandler(async (_, {menuInput}) => {
            const menuDish = new Menu({
                ...menuInput,
            })
            await menuDish.save()
            return menuDish
        }),

        deleteMenuItems: tryCatchHandler(async (_, {dishId}) => {
            const index = await Menu.findIndex(dish => dish._id === dishId)
            if (index !== -1) {
                const [deletedDish] = Menu.splice(index, 1)
                return deletedDish
            }
            return null
        }),
        updateMenuItems: tryCatchHandler(async (_, {dishId, updatedMenuItem}) => {
            const index = await Menu.findIndex(dish => dish._id === dishId)
            if (index !== -1) {
                Menu[index] = { ...Menu[index], ...updatedMenuItem }
                return Menu[index]
            }
            return null
        }),
        clearMenu: tryCatchHandler(() => {
            Menu.length = 0
            return []
        })
    }

}

export default menuResolvers