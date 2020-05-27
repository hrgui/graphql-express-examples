const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const gql = require('graphql-tag');

const schema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      greeting: String
    }
  `,
  resolvers: {
    Query: {
      greeting: () => "Hello World"
    }
  }
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(3521, () => {
    console.info('Listening on http://localhost:3521/graphql');
});