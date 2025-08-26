import { Suspense } from 'react'

// const Home = React.lazy(() => import('@/pages/Home'));
// const NotFound = React.lazy(() => import('@/pages/NotFound'));

const globalRoutes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Home /> */}
      </Suspense>
    ),
  },
  // {
  //   path: '*',
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <NotFound />
  //     </Suspense>
  //   ),
  // },
]

export default globalRoutes
