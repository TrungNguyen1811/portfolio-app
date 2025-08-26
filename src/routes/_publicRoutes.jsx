import AuthLayout from '@/layouts/public/authLayout/AuthLayout'
import React, { Suspense } from 'react'

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
      <AuthLayout />
    </Suspense>
  ),
  children: [
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ],
}

export default publicRoutes
