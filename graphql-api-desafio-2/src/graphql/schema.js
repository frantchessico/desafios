import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
       
        Users: [User]
        getUser(_id: ID): User
    }

    
    type User {
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        phoneNumber: String!
       
    }

    type Mutation {
       
        createUser(input: UserInput): User
        updateUser(_id: ID!, input: UserInput): User
        deleteUser(_id: ID!): User
    }

    

    input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        phoneNumber: String!
    }

`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})