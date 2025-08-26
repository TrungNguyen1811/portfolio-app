import { Suspense } from 'react'

// const Login = React.lazy(() => import('@/pages/Login'));
// const Register = React.lazy(() => import('@/pages/Register'));


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

const publicRoutes = [
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {/* <AuthRoute> */}
          {/* <Login /> */}
        {/* </AuthRoute> */}
      </Suspense>
    ),
  },
  // {
  //   path: '/register',
  //   element: (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <AuthRoute>
  //         <Register />
  //       </AuthRoute>
  //     </Suspense>
  //   ),
  // },
]

export default publicRoutes
