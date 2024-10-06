import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';   


  export async function getStaticProps() {

    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });
      
      const authLink = setContext((_, { headers }) => {

        return {
          headers: {
            ...headers,
            authorization: `Bearer ${import.meta.env.variable.GITHUB_ACCESS_TOKKEN}`,
          }
        }
      });

      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
      });

    const { data } = await client.query({
        query: gql`
        {
            user(login: "MohamedSy1") {
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      url
                      description
                      stargazerCount
                    }
                  }
                }
              }
            }
            
          }`
      })

      const {user} = data
      const pinnedItems = user.pinnedItems.edges.map(({node}) => node)
      console.log(pinnedItems)
    return (
        {
            props: {}
        }
    )
  }
