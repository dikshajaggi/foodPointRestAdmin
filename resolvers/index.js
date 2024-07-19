import { mergeResolvers } from "@graphql-tools/merge";
import RestaurantResolver from "./restaurant.js";
import menuResolvers from "./menu.js";
import orderResolvers from "./order.js";

const mergedResolvers = mergeResolvers([RestaurantResolver, menuResolvers, orderResolvers])
export default mergedResolvers