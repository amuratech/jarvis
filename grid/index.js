import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './core/schema';
import resolvers from './core/resolvers';

// mongo congif and express server
mongoose.connect('mongodb://localhost/labs');
const Accounts = mongoose.model('accounts', { account_name: String, selldo_id: String, current_churn: Number, invoice: [], recommendations: [] });
const PORT = 3000;
const app = express();

// schema definition
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// routers
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Accounts } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
