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
            authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
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
                  languages: languages(first: 5) {
                    nodes {
                      languageName: name
                    }
                  }
                }
              }
            }
          }
        }
      }
      `
      })

      const {user} = data
      const pinnedItems = user.pinnedItems.edges.map((node) => node.node)

    return (
        {
            props: {
              pinnedItems
            }
        }
    )
  }

