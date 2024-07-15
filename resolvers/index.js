import { mergeResolvers } from "@graphql-tools/merge";
import userResolvers from "./user.js";
import menuResolvers from "./menu.js";

const mergedResolvers = mergeResolvers([userResolvers, menuResolvers])
export default mergedResolvers