import { mergeTypeDefs } from "@graphql-tools/merge";
import restaurantTypedef from "./restaurant.js";
import menuTypedef from "./menu.js";
import orderTypedef from "./order.js"

const mergedTypedefs = mergeTypeDefs([restaurantTypedef, menuTypedef, orderTypedef])

export default mergedTypedefs