import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.js";
import menuTypedef from "./menu.js";

const mergedTypedefs = mergeTypeDefs([userTypeDef, menuTypedef])

export default mergedTypedefs