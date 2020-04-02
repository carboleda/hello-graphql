import examples from './examples';
import user from './user';

export const resolvers = {
    Query: {
        ...examples.Query,
        ...user.Query
    },
    Mutation: {
        ...examples.Mutation,
        ...user.Mutation
    }
};