import { useReactiveVar } from '@apollo/client'
import { useEffect } from 'react'
import { useGetCharactersQuery } from 'src/graphql/generated/generated'

/**
 * A wrapper hook for `useGetCharactersQuery`,
 * responsible for fetching characters and handling loading and error states.
 * @param page is the page number to fetch.
 *
 * @returns all necessary values and handlers for fetching characters.
 */
const useGetCharacters = (page: number) => {
  const { data, loading, error, refetch } = useGetCharactersQuery({
    variables: { page },
    notifyOnNetworkStatusChange: true
  })

  useEffect(() => {
    refetch({
      page
    })
  }, [page])

  return { data, loading, error }
}

export default useGetCharacters
