import User from "../models/user";

export const resolvers = {
    Query: {
       
        async Users() {
            return await User.find();
        },
        // async getUser(_, {_id}) {
        //     return await User.findById(_id);
        // }
    },
    Mutation: {
        async createUser(_, { input }) {
            return await User.create(input);
        },
        async updateUser(_, {_id, input}) {
            return await User.findByIdAndUpdate(_id, input, {new: true});
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id);
        }
    }
};