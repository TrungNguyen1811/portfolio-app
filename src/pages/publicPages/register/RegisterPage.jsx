import { StyleCard } from './styled'
import { Grid, Typography } from 'antd'

const { useBreakpoint } = Grid
const { Text, Title, Link } = Typography
import { getWidthCard } from '@/utils/getWidthCard'

const RegisterPage = () => {
  const screens = useBreakpoint()
  const widthCard = getWidthCard(screens)

  return (
    <StyleCard $width={widthCard}>
      <Title>Sign in</Title>
      <Text>
        Welcome back to Portfolio Web App! Please enter your details below to sign in.
      </Text>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </StyleCard>
  )
}

export default RegisterPage
