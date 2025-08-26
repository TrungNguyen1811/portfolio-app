import { useRoutes } from 'react-router-dom'
import privateRoutes from './_privateRoutes'
import publicRoutes from './_publicRoutes'
import globalRoutes from './_globalRoutes'

function AppRoutes() {
  return useRoutes([privateRoutes, publicRoutes, globalRoutes])
}

export default AppRoutes
