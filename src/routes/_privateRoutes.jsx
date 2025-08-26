import { Suspense } from 'react'

// const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
// const Profile = React.lazy(() => import('@/pages/Profile'));


// const ProtectedRoute = ({ children }) => {
//   const { user } = useSelector((state) => state.user)
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (user === null) {
//       navigate('/sign-in', { replace: true })
//     }
//   }, [user, navigate])
//   if (user) return children
// }

const privateRoutes = [
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {/* <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute> */}
      </Suspense>
    ),
  },
  {
    path: '/profile',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        {/* <ProtectedRoute>
          <Profile />
        </ProtectedRoute> */}
      </Suspense>
    ),
  },
]

export default privateRoutes
