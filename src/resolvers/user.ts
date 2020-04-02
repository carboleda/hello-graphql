import User from '../data/models/User';

export default {
    Query: {
        users: async () => {
            return await User.find();
        }
    },
    Mutation: {
        createUser: async (_: any, { input}: any) => {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        deleteUser: async (_: any, { _id }: any) => {
            return await User.findByIdAndDelete(_id);
        },
        updateUser: async (_: any, { _id, input }: any) => {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }
};