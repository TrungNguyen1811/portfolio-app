import { Header } from '@/components/common/header'
import { SideBar } from '@/components/common/sidebar'
import { Outlet } from 'react-router-dom'
import { StyledLayout } from '../../styled'

export default function PortfolioLayout() {
  return (
    <StyledLayout>
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </StyledLayout>
  )
}
