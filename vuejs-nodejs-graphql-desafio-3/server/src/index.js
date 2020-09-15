import { ApolloServer } from "apollo-server";
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';


const port = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(port, () => console.log(`Server on http://localhost:${port}`));
