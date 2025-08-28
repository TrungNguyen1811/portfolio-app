import AuthLayout from '@/layouts/public/authLayout/AuthLayout'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RegisterPage = React.lazy(() =>
  import('@/pages/publicPages/register/RegisterPage')
)
const LoginPage = React.lazy(() =>
  import('@/pages/publicPages/signin/LoginPage')
)

const AuthRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user)
  if (user) {
    return <Navigate to="/management" replace />
  }
  return children
}

const publicRoutes = {
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthRoute>
        <AuthLayout />
      </AuthRoute>
    </Suspense>
  ),
  children: [
    { path: '/login', element: <LoginPage /> },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ],
}

export default publicRoutes

