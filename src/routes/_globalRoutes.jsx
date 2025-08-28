import Home from '@/pages/globalPages/homePage'
import About from '@/components/about'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Project } from '@/components/project'
import React from 'react'
import { Suspense } from 'react'
import Layout from '@/layouts/index'
import HomePage from '@/pages/globalPages/homePage'

const PortfolioLayout = React.lazy(() =>
  import('@/layouts/public/portfolioLayout/PortfolioLayout')
)
const NotFound = React.lazy(() => import('@/pages/globalPages/notFound'))

const portfolioRoute = {
  path: '/public/:slug',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioLayout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: <About />,
    },
    {
      path: 'experience',
      element: <Experience />,
    },
    {
      path: 'education',
      element: <Education />,
    },
    {
      path: 'projects',
      element: <Project />,
    },
  ],
}

const staticRoutes = {
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
      path: '*',
      element: <NotFound />,
    },
  ],
}

const globalRoutes = [staticRoutes, portfolioRoute]

export default globalRoutes

