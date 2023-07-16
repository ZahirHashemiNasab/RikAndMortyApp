import {
  ActionIcon,
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  MediaQuery,
  Pagination,
  Text
} from '@mantine/core'
import { IconFilter, IconX, IconZoomCancel } from '@tabler/icons'
import { useState } from 'react'
import { Outlet, useParams } from 'react-router'
import CharacterCard from 'src/components/characters/CharacterCard'
import CustomError from 'src/components/common/CustomError'
import CustomLoading from 'src/components/common/CustomLoading'
import MobilePagination from 'src/components/pagination/MobilePagination'
import useGetCharacters from 'src/hooks/characters/useGetCharacters'
import View from './View'

const DashboardView = () => {
  const { id } = useParams()
  const [page, setPage] = useState(1)

  const { data, loading, error } = useGetCharacters(page)

  const characters = data?.characters?.results
  const numberOfPages = Math.floor(Number(data?.characters?.info?.count) / 20) + 1 || 0
  const charactersFound = characters?.length !== 0
  return (
    <View>
      <Box>
        {!id ? (
          <Container>
            {error && <CustomError />}
            {charactersFound ? (
              <>
                <Grid data-testid="characters-container" data-cy="characters-container">
                  {loading ? (
                    <CustomLoading />
                  ) : (
                    characters?.map((character: any) => (
                      <Grid.Col lg={4} xs={6} key={character?.id}>
                        <CharacterCard character={character} />
                      </Grid.Col>
                    ))
                  )}
                </Grid>

                <Center style={{ marginTop: 24, marginBottom: 24 }}>
                  <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Pagination page={page} onChange={setPage} total={numberOfPages} size="xl" />
                  </MediaQuery>

                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <MobilePagination page={page} onChange={setPage} total={numberOfPages} />
                  </MediaQuery>
                </Center>
              </>
            ) : (
              <Center style={{ display: 'flex' }}>
                <IconZoomCancel />
                <Text ml={5}>No characters found with current filters</Text>
              </Center>
            )}
          </Container>
        ) : (
          <Outlet />
        )}
      </Box>
    </View>
  )
}

export default DashboardView
