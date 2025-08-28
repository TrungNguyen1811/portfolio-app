import PrivateLayout from '@/layouts/private/PrivateLayout'
import PrivatePages from '@/pages/privatePages'
import Portfolio from '@/pages/privatePages/portfolio'
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

const privateRoutes = {
  path: '/management',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivateLayout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: <PrivatePages.PortfolioManagement />,
    },
    {
      path: '/management/education',
      element: <PrivatePages.EducationManagement />,
    },
    {
      path: '/management/experience',
      element: <PrivatePages.ExperienceManagement />,
    },
    {
      path: '/management/projects',
      element: <PrivatePages.ProjectManagement />,
    },
    {
      path: '/management/profile',
      element: <PrivatePages.ProfilePage />,
    },
  ],
}

export default privateRoutes
