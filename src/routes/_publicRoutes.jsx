import AuthLayout from '@/layouts/public/authLayout/AuthLayout'
import Home from '@/pages/globalPages/home'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
// const LoginPage = React.lazy(() => import('@/pages/publicPages/signin/LoginPage'));
const RegisterPage = React.lazy(() =>
  import('@/pages/publicPages/register/RegisterPage')
)

// const AuthRoute = ({ children }) => {
//   const { user } = useSelector((state) => state.user)
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (user) {
//       navigate('/', { replace: true })
//     }
//   }, [user, navigate])
//   if (!user) return children
// }

const publicRoutes = {
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
      path: '/register',
      element: <RegisterPage />,
    },
  ],
}

export default publicRoutes
