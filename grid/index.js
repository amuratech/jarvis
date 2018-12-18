import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { Accounts, Tickets } from './config/mongo';

import routes from './routes/routes';
import typeDefs from './core/schema';
import resolvers from './core/resolvers';

const PORT = 3000;
const app = express();

// schema definition
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// routers
app.use('/api/', routes);
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Accounts, Tickets } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
