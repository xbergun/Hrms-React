import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
  //  authorization: `bearer <GITHUB_ACCESS_TOKEN>`,
  },
});