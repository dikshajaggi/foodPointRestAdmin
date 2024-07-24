import { mergeResolvers } from "@graphql-tools/merge";
import RestaurantResolver from "./restaurant.js";
import menuResolvers from "./menu.js";
import orderResolvers from "./order.js";
import OffersResolver from "./offers.js";
import orderAnalyticsResolver from "./orderAnalytics.js";

const mergedResolvers = mergeResolvers([RestaurantResolver, menuResolvers, orderResolvers, OffersResolver, orderAnalyticsResolver])
export default mergedResolvers