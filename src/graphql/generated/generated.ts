import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Character = {
  __typename?: 'Character'
  gender: Scalars['String']
  id: Scalars['ID']
  image: Scalars['String']
  location: Scalars['String']
  name: Scalars['String']
  species: Scalars['String']
  status: Scalars['String']
  type: Scalars['String']
}

export type Characters = {
  __typename?: 'Characters'
  info: any
  results: Array<Character>
}

export type DefaultCharacterFragment = {
  __typename?: 'Character'
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  location: string
  image: string
}

export type GetCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>
  filter?: InputMaybe<any>
}>

export type GetCharactersQuery = {
  __typename?: 'Query'
  characters: {
    __typename?: 'Characters'
    info: { __typename?: 'PageInfo'; count: number; pages: number }
    results: Array<{
      __typename?: 'Character'
      id: string
      name: string
      status: string
      species: string
      type: string
      gender: string
      location: string
      image: string
    }>
  }
}

export const GetCharactersDocument = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`

export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  )
}
export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  )
}
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharactersQuery,
  GetCharactersQueryVariables
>
