import { StyleCard, StyleForm } from '@/pages/publicPages/register/styled'
import { Button, Grid, Typography, Form, Input } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { getWidthCard } from '@/utils/getWidthCard'
import useLogIn from '@/hooks/useLogin'
import FormItemControl from '@/components/common/formItemControl'
import {useNavigate} from 'react-router-dom'

const { useBreakpoint } = Grid
const { Text, Title, Link } = Typography

const LoginPage = () => {
  const navigate = useNavigate()
  const screens = useBreakpoint()
  const widthCard = getWidthCard(screens)
  const fields = [
    {
      name: 'email',
      icon: <MailOutlined />,
      placeholder: 'Email',
      type: 'email',
    },
    {
      name: 'password',
      icon: <LockOutlined />,
      placeholder: 'Password',
      type: 'password',
    },
  ]
  const { formik, loading } = useLogIn()

  return (
    <StyleCard $width={widthCard}>
      <Title>Sign In</Title>
      <Text>
        Welcome back to Portfolio Web App! Please enter your details below to
        sign in.
      </Text>

      <StyleForm onFinish={formik.handleSubmit} labelCol={{ span: 6 }}>
        {fields.map((field) => {
          const InputComponent =
            field.type === 'password' ? Input.Password : Input
          return (
            <FormItemControl key={field.name} name={field.name} formik={formik}>
              <InputComponent
                name={field.name}
                value={formik.values[field.name]}
                type={field.type}
                size='large'
                prefix={field.icon}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormItemControl>
          )
        })}

        <Button
          htmlType='submit'
          type='primary'
          loading={loading}
          block
          size='medium'
        >
          {loading ? 'Submitting...' : 'Sign in'}
        </Button>
      </StyleForm>
      <div>
        <Text>Don't have an account?</Text>
        <Link onClick={() => navigate("/register")}> Sign up now</Link>
      </div>
    </StyleCard>
  )
}

export default LoginPage
