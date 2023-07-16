import { ReactNode } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import DashboardView from 'src/views/DashboardView'
import NotFoundView from 'src/views/NotFoundView'

type RouterProviderProps = {
  children: ReactNode
}

/**
 * Provides the application with a router.
 */
const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/characters" element={<DashboardView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>

      {children}
    </HashRouter>
  )
}

export default RouterProvider
