import React from 'react'
import { Suspense } from 'react'
// const Home = React.lazy(() => import('@/pages/Home'));
const NotFound = React.lazy(() => import('@/pages/notFound'))

const globalRoutes = {
  element: <Suspense fallback={<div>Loading...</div>}>{/* layout */}</Suspense>,
  children: [
    {
      path: '*',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <NotFound />
        </Suspense>
      ),
    },
  ],
}

export default globalRoutes
