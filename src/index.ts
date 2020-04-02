import express from 'express';
import graphqlHTTP, { Options } from 'express-graphql';
import schema from './schema';
import database from './data/database';

const port = process.env.PORT || 3000;
const app = express();
database.connect();

const options: Options = {
    graphiql: true,
    schema,
    context: {
        messageId: 'test'
    }
};

app.use('/graphql', graphqlHTTP(options));

app.listen(port, () => console.log(`Server started on port ${port}`));