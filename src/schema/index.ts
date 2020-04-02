import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers';

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.gql'), { encoding: 'utf8' });
export default makeExecutableSchema({
    typeDefs,
    resolvers
});