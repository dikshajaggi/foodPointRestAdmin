import { menuItems } from "../assets/sampleData.js"

const menuResolvers = {
    Query: {
        menu : () => {
            return menuItems
        },

        dish: (_, {dishId}) => {
            return menuItems.find(dish => dish._id === dishId)
        }
    },

    Mutation: {
        deleteMenuItems: (_, {dishId}) => {
            const index = menuItems.findIndex(dish => dish._id === dishId);
            if (index !== -1) {
                const [deletedDish] = menuItems.splice(index, 1);
                return deletedDish;
            }
            return null;
        },
        updateMenuItems: (_, {dishId, updatedMenuItem}) => {
            const index = menuItems.findIndex(dish => dish._id === dishId);
            if (index !== -1) {
                menuItems[index] = { ...menuItems[index], ...updatedMenuItem };
                return menuItems[index];
            }
            return null;
        },
        clearMenu: () => {
            menuItems.length = 0
            return []
        }
    }

}

export default menuResolvers