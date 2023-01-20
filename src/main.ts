import { ApolloServer } from "npm:@apollo/server@^4.1";
import { startStandaloneServer } from "npm:@apollo/server@^4.1/standalone";

import { Location } from "./graphql/location.ts";
import { Character } from "./graphql/character.ts";
import { Episode } from "./graphql/episode.ts";
import { Query } from "./graphql/query.ts";
import { typeDefs } from "./graphql/schema.ts";

const resolvers = {
    Query,
    Character,
    Location,
    Episode
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const{ url } = await startStandaloneServer(server, {
    listen: { port: 8000},
});

console.log(`Server running on: ${url}`)