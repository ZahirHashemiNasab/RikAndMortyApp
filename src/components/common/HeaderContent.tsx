import {
  ActionIcon,
  Affix,
  Box,
  Button,
  Group,
  MediaQuery,
  Transition,
  useMantineColorScheme,
  useMantineTheme,
  Text
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import {
  IconArrowUp,
  IconMoonStars,
  IconSun
} from '@tabler/icons'
import { Link, useNavigate } from 'react-router-dom'

const HeaderContent = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()
  const isDark = colorScheme === 'dark'

  const navigate = useNavigate()

  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '95%'
      }}>
      <Box>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text size={theme.fontSizes.xl} color={theme.colors.indigo[5]}>
            Rick and Morty API
          </Text>
        </Link>
      </Box>

      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftIcon={<IconArrowUp size={16} />}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}>
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
      </MediaQuery>

      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Box>
          <Box>
            <Group position="right">
              <ActionIcon variant="outline" onClick={() => toggleColorScheme()}>
                {isDark ? (
                  <IconSun size={16} color="white" />
                ) : (
                  <IconMoonStars size={16} color="black" />
                )}
              </ActionIcon>
            </Group>
          </Box>
        </Box>
      </MediaQuery>
    </Box>
  )
}

export default HeaderContent
