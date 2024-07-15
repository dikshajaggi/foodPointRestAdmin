import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mergedTypedefs from "./typedefs/index.js";
import mergedResolvers from "./resolvers/index.js";

const server = new ApolloServer({
    typeDefs: mergedTypedefs,
    resolvers: mergedResolvers
})

const {url} = await startStandaloneServer(server)
console.log("server ready at", url)