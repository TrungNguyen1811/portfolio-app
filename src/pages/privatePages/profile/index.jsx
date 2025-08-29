import {
  Button,
  Card,
  Flex,
  Col,
  Row,
  Form,
  Input,
  Select,
  Popconfirm,
} from 'antd'
import useProfile from '@/hooks/useProfile'
import { StyleCard, StyleFormItemControl } from './styled'
import { ProfileAvatarStyle } from '@/components/privateHeader/styled'
import { Spin } from 'antd'

const ProfilePage = () => {
  const {
    user,
    formik,
    loading,
    actionLoading,
    handPublicPortfolio,
    handleNavigatePortfolio,
  } = useProfile()

  const confirmTitle = user.isPublic
    ? 'Confirm set private portfolio'
    : 'Confirm set public portfolio'

  const confirmMessage = user.isPublic
    ? 'Are you sure you want to set your portfolio to private?'
    : 'Are you sure you want to set your portfolio to public?'

  const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]

  const handleSelect = (value) => {
    formik.setFieldValue('genre', value)
  }

  return (
    <Row gutter={24}>
      <Col xs={{ span: 24, order: 2 }} lg={{ span: 16, order: 1 }}>
        <Card title='General information'>
          <Form onFinish={formik.handleSubmit} layout='vertical'>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <StyleFormItemControl
                  label='Full Name'
                  name='fullname'
                  formik={formik}
                >
                  <Input
                    size='large'
                    placeholder='Full Name'
                    name='fullname'
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </StyleFormItemControl>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <StyleFormItemControl
                  label='Nick Name'
                  name='nickName'
                  formik={formik}
                >
                  <Input
                    size='large'
                    placeholder='Nick Name'
                    name='nickName'
                    value={formik.values.nickName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </StyleFormItemControl>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <StyleFormItemControl
                  label='Birthday'
                  name='birthday'
                  formik={formik}
                >
                  <Input
                    size='large'
                    placeholder='Birthday'
                    name='birthday'
                    type='date'
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </StyleFormItemControl>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <StyleFormItemControl
                  label='Genre'
                  name='genre'
                  formik={formik}
                >
                  <Select
                    size='large'
                    placeholder='Genre'
                    name='genre'
                    value={formik.values.genre}
                    onChange={handleSelect}
                    options={options}
                  />
                </StyleFormItemControl>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <StyleFormItemControl
                  label='Email'
                  name='email'
                  formik={formik}
                >
                  <Input
                    size='large'
                    placeholder='Email'
                    name='email'
                    type='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </StyleFormItemControl>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <StyleFormItemControl
                  label='Phone'
                  name='phone'
                  formik={formik}
                >
                  <Input
                    size='large'
                    placeholder='Phone'
                    name='phone'
                    type='tel'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </StyleFormItemControl>
              </Col>
            </Row>
            <Flex justify='end'>
              <Button type='primary' htmlType='submit' loading={loading}>
                Save
              </Button>
            </Flex>
          </Form>
        </Card>
      </Col>

      <Col xs={{ span: 24, order: 1 }} lg={{ span: 8, order: 2 }}>
        <StyleCard>
          <ProfileAvatarStyle
            size={86}
            icon={<span>{user.fullname.at(0)}</span>}
          />
          <p className='card__name'>{user.fullname}</p>
          <p className='card__email'>{user.email}</p>
          <Flex gap={6}>
            <Popconfirm
              title={confirmTitle}
              description={confirmMessage}
              onConfirm={handPublicPortfolio}
              okText='Yes'
              cancelText='No'
            >
              <Button type='primary' loading={actionLoading}>
                {user.isPublic ? 'Set Private' : 'Set Public'}
              </Button>
            </Popconfirm>
            <Button onClick={handleNavigatePortfolio}>Portfolio</Button>
          </Flex>
        </StyleCard>
      </Col>
    </Row>
  )
}

export default ProfilePage
