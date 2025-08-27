import { StyleLayout } from '@/layouts/public/authLayout/StyleLayout.style'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <StyleLayout>
      <div className="auth-left-banner">{/* ảnh, slogan */}</div>
      <div className="auth-form-wrapper">
        <Outlet /> 
      </div>
    </StyleLayout>
  )
}

export default AuthLayout
