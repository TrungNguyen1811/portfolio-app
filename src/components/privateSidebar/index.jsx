import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  LogoutOutlined,
  StrikethroughOutlined,
  BookOutlined,
  InboxOutlined,
  IdcardOutlined,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { signOut } from '@/sagas/users/userSlice'

import { useSelector } from 'react-redux'
import { SideBarLogoStyle, SideBarStyle } from './styled'

const { Sider } = Layout

const PrivateSidebar = ({ collapsed, setCollapsed }) => {
  // const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const handleMenuClick = ({ key }) => {
    if (key === 'signout') {
      dispatch(signOut())
      localStorage.removeItem('user')
      navigate('/sign-in')
    } else {
      navigate(key)
    }
  }

  const sidebarList = [
    {
      key: '/management',
      label: 'Portfolio Management',
      icon: <IdcardOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: '/management/education',
      label: 'Education',
      icon: <BookOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: '/management/experience',
      label: 'Experience',
      icon: <ReadOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: '/management/projects',
      label: 'Projects',
      icon: <InboxOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: '/management/profile',
      label: 'My Profile',
      icon: <UserOutlined style={{ fontSize: 20 }} />,
    },
    {
      type: 'divider',
    },
    {
      key: 'signout',
      label: 'Sign out',
      icon: <LogoutOutlined style={{ fontSize: 20 }} />,
    },
  ]

  return (
    <SideBarStyle collapsed={collapsed} onCollapse={setCollapsed} width={250}>
      <SideBarLogoStyle>
        <StrikethroughOutlined
          className={`sidebar__logo-icon ${collapsed ? 'collapsed' : ''}`}
        />
        {!collapsed && 'ĐTT Portfolio'}
      </SideBarLogoStyle>

      <Menu
        theme='light'
        mode='inline'
        selectedKeys={[location.pathname]}
        items={sidebarList}
        onClick={handleMenuClick}
      />
    </SideBarStyle>
  )
}

export default PrivateSidebar
