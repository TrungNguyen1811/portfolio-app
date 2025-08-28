import { Col, Flex, Row, Typography } from 'antd'
import { DivContainer, DivBanner, StyleButton } from './styled'
import { useNavigate } from 'react-router-dom'
import HomeBanner from '@/assets/images/home/real-estate-websites.png'
import BgTop1 from '@/assets/images/home/bg-top-1.png'
import BgTop2 from '@/assets/images/home/bg-top-2.png'
import BgTop3 from '@/assets/images/home/bg-top-3.png'
import BgTop4 from '@/assets/images/home/dot-bg-top.svg'

const { Text, Title, Paragraph } = Typography

export default function HomePage() {
  const navigate = useNavigate()
  const handleOpenBlank = () => {
    navigate('/public/nguyn-nh-trung-metbb79k')
  }
  return (
    <DivContainer>
      <img alt='background-1' className='bg-top bg-top-1' src={BgTop1}></img>
      <img alt='background-2' className='bg-top bg-top-2' src={BgTop2}></img>
      <img alt='background-3' className='bg-top bg-top-3' src={BgTop3}></img>
      <img alt='background-4' className='bg-top dot-bg-top' src={BgTop4}></img>
      <DivBanner>
        <Row
          align='middle'
          gutter={[16, 32]}
        >
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
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
              <StyleButton
                color='primary'
                variant='outlined'
                onClick={handleOpenBlank}
              >
                Try Demo
              </StyleButton>
            </Flex>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <img src={HomeBanner} alt='home-banner' className='img-banner' />
          </Col>
        </Row>
      </DivBanner>
    </DivContainer>
  )
}
