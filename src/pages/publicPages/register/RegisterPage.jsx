import { StyleCard, StyleForm } from './styled'
import { Button, Grid, Typography, Form, Input } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { getWidthCard } from '@/utils/getWidthCard'
import useRegister from '@/hooks/useRegister'

const { useBreakpoint } = Grid
const { Text, Title, Link } = Typography
const { Item } = Form

const RegisterPage = () => {
  const screens = useBreakpoint()
  const widthCard = getWidthCard(screens)
  const fieldInput = [
    {
      name: 'fullname',
      icon: <UserOutlined />,
      placeholder: 'Full Name',
    },
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
    {
      name: 'confirmPassword',
      icon: <LockOutlined />,
      placeholder: 'Confirm Password',
      type: 'password',
    },
  ]
  const { formik, getFieldProps, getInputStatus, loading } = useRegister()

  return (
    <StyleCard $width={widthCard}>
      <Title>Sign up</Title>
      <Text>Join us! Create an account to get started.</Text>

      <StyleForm onFinish={formik.handleSubmit} labelCol={{ span: 6 }}>
        {fieldInput.map((field) => {
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
          disabled={loading || !formik.dirty}
          loading={loading}
          block
          size='medium'
        >
          {loading ? 'Submitting...' : 'Sign up'}
        </Button>
      </StyleForm>
      <div>
        <Text>Already have an account?</Text>
        <Link href='/login'> Sign in</Link>
      </div>
    </StyleCard>
  )
}

export default RegisterPage
