import { mergeTypeDefs } from "@graphql-tools/merge";
import restaurantTypedef from "./restaurant.js";
import menuTypedef from "./menu.js";
import orderTypedef from "./order.js"
import offersTypedef from "./offers.js";
import orderAnalyticsTypedef from "./orderAnalytics.js";

const mergedTypedefs = mergeTypeDefs([restaurantTypedef, menuTypedef, orderTypedef, offersTypedef, orderAnalyticsTypedef])

export default mergedTypedefs