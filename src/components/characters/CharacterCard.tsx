import { Card, createStyles, Text } from '@mantine/core'
import React from 'react'
import { DefaultCharacterFragment } from 'src/graphql/generated/generated'

type CharacterCardProps = {
  character: DefaultCharacterFragment | null
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const useStyles = createStyles((theme) => ({
    card: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: theme.shadows.md
      }
    }
  }))

  const { classes } = useStyles()
  console.log('characters', character)
  return (
    <Card shadow="sm" p="lg" radius="md" className={classes.card} withBorder>
      <Text size="sm" color="dimmed" data-cy={`species-text-${character?.id}`}>
        name: {character?.name}
      </Text>
    </Card>
  )
}

export default CharacterCard
