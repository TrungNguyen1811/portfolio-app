import Home from '@/pages/globalPages/home'
import React from 'react'
import { Suspense } from 'react'
const NotFound = React.lazy(() => import('@/pages/globalPages/notFound'))
import { Outlet } from 'react-router-dom'

const globalRoutes = {
  element: (
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
}

export default globalRoutes
