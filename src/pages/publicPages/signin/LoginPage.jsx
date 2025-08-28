import { StyleCard, StyleForm } from '@/pages/publicPages/register/styled'
import { Button, Grid, Typography, Form, Input } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { getWidthCard } from '@/utils/getWidthCard'
import useRegister from '@/hooks/useRegister'
import useLogIn from '@/hooks/useLogin'

const { useBreakpoint } = Grid
const { Text, Title, Link } = Typography
const { Item } = Form

const LoginPage = () => {
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
  const { formik, loading, getInputStatus, getFieldProps } = useLogIn()

  return (
    <StyleCard $width={widthCard}>
      <Title>Sign In</Title>
      <Text>Welcome back to Portfolio Web App! Please enter your details below to sign in.</Text>

      <StyleForm onFinish={formik.handleSubmit} labelCol={{ span: 6 }}>
        {fields.map((field) => {
          const InputComponent =
            field.type === 'password' ? Input.Password : Input
          return (
            <Item
              key={field.name}
              {...getFieldProps(field.name)}
            >
              <InputComponent
                name={field.name}
                value={formik.values[field.name]}
                prefix={field.icon}
                type={field.type || 'text'}
                size='medium'
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                statue={getInputStatus(field.name)}
              />
            </Item>
          )
        })}

        <Button
          htmlType='submit'
          type='primary'
          disabled={loading}
          loading={loading}
          block
          size='medium'
        >
          {loading ? 'Submitting...' : 'Sign in'}
        </Button>
      </StyleForm>
      <div>
        <Text>Don't have an account?</Text>
        <Link href='/register'> Sign up now</Link>
      </div>
    </StyleCard>
  )
}

export default LoginPage
