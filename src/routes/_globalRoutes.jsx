
import About from '@/components/about'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Project } from '@/components/project'
import Layout from '@/layouts/public/homeLayout'
import PortfolioLayout from '@/layouts/public/portfolioLayout/PortfolioLayout'
import React, { Suspense } from 'react'

const HomePage = React.lazy(() => import('@/pages/globalPages/homePage/index'))
const NotFound = React.lazy(() => import('@/pages/globalPages/notFound/index'))

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

