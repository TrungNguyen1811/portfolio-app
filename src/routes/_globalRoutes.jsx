import Home from '@/pages/globalPages/home'
import About from '@/components/about'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Project } from '@/components/project'
import React from 'react'
import { Suspense } from 'react'

const DefaultLayout = React.lazy(() => import('@/layouts/default'))
const NotFound = React.lazy(() => import('@/pages/globalPages/notFound'))

const globalRoutes = {
  path: '/',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <DefaultLayout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'test',
      element: <div>Test Route Works!</div>,
    },
    {
      path: 'experience',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Experience />
        </Suspense>
      ),
    },
    {
      path: 'education',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Education />
        </Suspense>
      ),
    },
    {
      path: 'projects',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Project />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
}

export default globalRoutes

