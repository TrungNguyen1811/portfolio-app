import Home from '@/pages/globalPages/homePage'
import About from '@/components/about'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Project } from '@/components/project'
import React from 'react'
import { Suspense } from 'react'
import Layout from '@/layouts/index'
import HomePage from '@/pages/globalPages/homePage'

const PortfolioLayout = React.lazy(() => import('@/layouts/public/portfolioLayout/PortfolioLayout'))
const NotFound = React.lazy(() => import('@/pages/globalPages/notFound'))

const globalRoutes = {
  path: '/',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      element: <PortfolioLayout />,
      children: [
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
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
}

export default globalRoutes
