
import { StyleLayout } from '@/layouts/public/authLayout/styled';

const AuthLayout = ({children}) => {
  return (
     <StyleLayout>
      <div className="auth-left-banner">{/* ảnh, slogan */}</div>
      <div className="auth-form-wrapper">{children}</div>
    </StyleLayout>
  )
}

export default AuthLayout