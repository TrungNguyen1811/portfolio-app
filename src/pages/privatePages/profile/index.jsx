import { UserOutlined } from '@ant-design/icons'
import { Button, Card, Avatar, Flex, Col, Row, Form, Input, Select, Popconfirm } from 'antd'
import useProfile from '@/hooks/useProfile'
import { StyleCard, StyleFormItemControl } from './styled'

const ProfilePage = () => {
  const { user, formik, loading, actionLoading, handPublicPortfolio, handleNavigatePortfolio } = useProfile()

  const confirmTitle = user.isPublic
    ? 'Confirm set private portfolio'
    : 'Confirm set public portfolio'

  const confirmMessage = user.isPublic
    ? 'Are you sure you want to set your portfolio to private?'
    : 'Are you sure you want to set your portfolio to public?'

  const fields = [
    { label: 'Full Name', name: 'fullname', type: 'text', span: 12 },
    { label: 'Nick Name', name: 'nickName', type: 'text', span: 12 },
    { label: 'Birthday', name: 'birthday', type: 'date', span: 12 },
    {
      label: 'Genre',
      name: 'genre',
      type: 'select',
      span: 12,
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
    { label: 'Email', name: 'email', type: 'email', span: 12, readOnly: true },
    { label: 'Phone', name: 'phone', type: 'tel', span: 12 },
  ]

  return (
    <Row gutter={24}>
      <Col span={16}>
        <Card title='General information'>
          <Form onFinish={formik.handleSubmit} layout='vertical'>
            <Row gutter={16}>
              {fields.map((field) => (
                <Col span={field.span} key={field.name}>
                  <StyleFormItemControl label={field.label} name={field.name} formik={formik}>
                    {field.type === 'select' ? (
                      <Select
                        size='large'
                        placeholder={field.label}
                        value={formik.values[field.name]}
                        onChange={(value) => formik.setFieldValue(field.name, value)}
                        options={field.options}
                      />
                    ) : (
                      <Input
                        size='large'
                        placeholder={field.label}
                        name={field.name}
                        type={field.type}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={field.readOnly}
                      />
                    )}
                  </StyleFormItemControl>
                </Col>
              ))}
            </Row>

            <Flex justify='end'>
              <Button type='primary' htmlType='submit' loading={loading}>
                Save
              </Button>
            </Flex>
          </Form>
        </Card>
      </Col>

      <Col span={8}>
        <StyleCard>
          <Avatar size={86} icon={<UserOutlined />} />
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
