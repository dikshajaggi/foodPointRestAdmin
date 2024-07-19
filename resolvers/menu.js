import Menu from "../models/menu.js";

const menuResolvers = {
    Query: {
        menu : async () => {
            return await Menu.find()
        },

        dish: async (_, {dishId}) => {
            return await Menu.find(dish => dish._id === dishId)
        }
    },

    Mutation: {
        addMenuItems: async (_, {menuInput}) => {
            const menuDish = new Menu({
                ...menuInput,
            })
            await menuDish.save()
            return menuDish
        },

        deleteMenuItems: async (_, {dishId}) => {
            const index = await Menu.findIndex(dish => dish._id === dishId)
            if (index !== -1) {
                const [deletedDish] = Menu.splice(index, 1)
                return deletedDish
            }
            return null
        },
        updateMenuItems: async (_, {dishId, updatedMenuItem}) => {
            const index = await Menu.findIndex(dish => dish._id === dishId)
            if (index !== -1) {
                Menu[index] = { ...Menu[index], ...updatedMenuItem }
                return Menu[index]
            }
            return null
        },
        clearMenu: () => {
            Menu.length = 0
            return []
        }
    }

}

export default menuResolvers