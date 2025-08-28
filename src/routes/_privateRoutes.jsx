import PrivateLayout from '@/layouts/private/PrivateLayout'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const PortfolioManagement = React.lazy(() => import('@/pages/privatePages/portfolio/index'));
const EducationManagement = React.lazy(() => import('@/pages/privatePages/education/index'));
const ExperienceManagement = React.lazy(() => import('@/pages/privatePages/experience/index'));
const ProjectManagement = React.lazy(() => import('@/pages/privatePages/project/index'));
const ProfilePage = React.lazy(() => import('@/pages/privatePages/profile/index'));


const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user)
    if (user === null) {
      return <Navigate to='/login' replace />
    }
  return children ?? null
}

const privateRoutes = {
  path: '/management',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <ProtectedRoute>
        <PrivateLayout />
      </ProtectedRoute>
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: <PortfolioManagement />,
    },
    {
      path: '/management/education',
      element: <EducationManagement />,
    },
    {
      path: '/management/experience',
      element: <ExperienceManagement />,
    },
    {
      path: '/management/projects',
      element: <ProjectManagement />,
    },
    {
      path: '/management/profile',
      element: <ProfilePage />,
    },
  ],
}

export default privateRoutes
