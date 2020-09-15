export const typeDefs = `

type User {
    id: Int
    type: String
    description: String
    firstName: String
    lastName: String
    email: String
}

type Query {
    users(type: String): [User]
}

input ItemInput {
    type: String
    description: String,
    firstName: String
}

type Mutation {
    saveItem(user: ItemInput): User
    deleteItem(id: Int): Boolean
}

`;
