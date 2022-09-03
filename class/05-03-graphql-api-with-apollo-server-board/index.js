import { ApolloServer, gql } from 'apollo-server';

// The GraphQL schema
const typeDefs = gql`
  type Query {
    fetchboards: String
  }
  `;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchboards: () => {
        return '첫 연습'},
  },

  Mutation: {
    createBoard: (parent, args, context, info) => {


      



    }
  }



};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3050).then(() => {

    console.log("서버 프로그램")

});
;