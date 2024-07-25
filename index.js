import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mergedTypedefs from "./typedefs/index.js";
import mergedResolvers from "./resolvers/index.js";
import connectDB from "./db.js";
import DateScalar from "./utils/DateScalar.js";

const server = new ApolloServer({
    typeDefs: mergedTypedefs,
    resolvers: {
        ...mergedResolvers,
        Date: DateScalar,
    }
})

async function startServer() {
    try {
        await connectDB()
        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });
        console.log(`Server ready at ${url}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

startServer();