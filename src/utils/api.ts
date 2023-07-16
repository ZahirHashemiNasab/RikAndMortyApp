import { GRAPHQL_ENDPOINT } from 'src/constants'

/**
 * Gets the GraphQL endpoint based on the current Node environment.
 *
 * @returns the GraphQL endpoint.
 */
const getAPIEndpoint = () => {
  return GRAPHQL_ENDPOINT
}

export default getAPIEndpoint
