import { AppShell, Header } from '@mantine/core'
import { ReactNode } from 'react'
import HeaderContent from './HeaderContent'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppShell
      padding="xs"
      header={
        <Header height={60} p="xs">
          <HeaderContent />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],

          minHeight: '100vh'
        }
      })}>
      {children}
    </AppShell>
  )
}

export default Layout
