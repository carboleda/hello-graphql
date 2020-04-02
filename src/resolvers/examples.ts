import { tasks } from '../data/sample';

export default {
    Query: {
        hello: () => 'Hello world with GraphQL',
        greet: (_: any, { name }: any, ctx: any): string => {
            console.log(ctx);
            return `Hello ${name}!`;
        },
        tasks: () => {
            return tasks;
        }
    },
    Mutation: {
        createTask: (_: any, { input }: any): any => {
            input._id = tasks.length + 1;
            tasks.push(input);
            return input;
        }
    }
};