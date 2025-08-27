import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { useState } from 'react'

import PrivateHeader from '@/components/privateHeader/index'
import PrivateSidebar from '@/components/privateSidebar/index'
import { ContentStyle, PrivateLayoutStyle } from './styled'
import { Typography } from 'antd'
import { Divider } from 'antd'
import { useLocation } from 'react-router-dom'

const LIST_TITLE = [
  {
    title: 'Portfolio Management',
    path: '/management',
  },
  {
    title: 'Education',
    path: '/management/education',
  },
  {
    title: 'Experience',
    path: '/management/experience',
  },
  {
    title: 'Projects',
    path: '/management/projects',
  },
  {
    title: 'My Profile',
    path: '/management/profile',
  },
]

function PrivateLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = useLocation().pathname

  const currentPath = LIST_TITLE.find((item) => item.path === pathname)

  return (
    <PrivateLayoutStyle>
      <PrivateSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <PrivateHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content className='home-layout__content'>
          <ContentStyle>
            <Typography.Title level={3}>{currentPath?.title}</Typography.Title>
            <Divider />
            <Outlet />
          </ContentStyle>
        </Layout.Content>
      </Layout>
    </PrivateLayoutStyle>
  )
}
export default PrivateLayout

