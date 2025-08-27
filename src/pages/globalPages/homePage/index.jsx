import { Flex } from 'antd'
import { Button, Typography } from 'antd'
import { DivContainer, DivBanner, StyleButton } from './styled'
import { useNavigate } from 'react-router-dom'
import HomeBanner from '@/assets/images/projects/real-estate-websites.png'
import { Col, Row } from 'antd'

const { Text, Title, Link, Paragraph } = Typography

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <DivContainer>
      <img alt="background-1" class="bg-top bg-top-1" src="https://static.vietcv.io/top-page/bg-top-1.png"></img>
      <img alt="background-2" class="bg-top bg-top-2" src="https://static.vietcv.io/top-page/bg-top-2.png"></img>
      <img alt="background-3" class="bg-top bg-top-3" src="https://static.vietcv.io/top-page/bg-top-3.png"></img>
      <img alt="background-3" class="bg-top dot-bg-top" src="https://static.vietcv.io/top-page/dot-bg-top.svg"></img>
      <DivBanner>
        <Flex align='center'>
          <div span={12}>
            <Title>
              A Successful Career Starts with{' '}
              <span className='text-highline'>a Great Portfolio</span>
            </Title>
            <Text>
              The leading online portfolio builder, accessible on both laptop
              and mobile
            </Text>
            <Paragraph>
              Easily create a stunning portfolio that impresses recruiters and
              helps you land your dream job.
            </Paragraph>
            <Flex gap={16}>
              <StyleButton
                color='primary'
                variant='solid'
                onClick={() => navigate('/login')}
              >
                Create Portfolio Now
              </StyleButton>
              <StyleButton color='primary' variant='outlined'>
                Try Demo
              </StyleButton>
            </Flex>
          </div>
          <div span={12}>
            <img src={HomeBanner} alt='home-banner' className='img-banner' />
          </div>
        </Flex>
      </DivBanner>
    </DivContainer>
  )
}
