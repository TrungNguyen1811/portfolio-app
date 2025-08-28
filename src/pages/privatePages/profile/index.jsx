import {
  Button,
  Card,
  Flex,
  Col,
  Row,
  Form,
  Input,
  Select,
  Popconfirm
} from 'antd'
import useProfile from '@/hooks/useProfile'
import { StyleCard, StyleFormItemControl } from './styled'
import { ProfileAvatarStyle } from '@/components/privateHeader/styled'

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

  const fields = [
    { label: 'Full Name', name: 'fullname', type: 'text' },
    { label: 'Nick Name', name: 'nickName', type: 'text' },
    { label: 'Birthday', name: 'birthday', type: 'date' },
    {
      label: 'Genre',
      name: 'genre',
      type: 'select',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
    { label: 'Email', name: 'email', type: 'email', readOnly: true },
    { label: 'Phone', name: 'phone', type: 'tel' },
  ]

  return (
    <Row gutter={24}>
      <Col xs={{span: 24, order: 2}} lg={{span:16, order: 1}}>
        <Card title='General information'>
          <Form onFinish={formik.handleSubmit} layout='vertical'>
            <Row gutter={16}>
              {fields.map((field) => (
                <Col xs={{span: 24}} lg={{span: 12}} key={field.name}>
                  <StyleFormItemControl
                    label={field.label}
                    name={field.name}
                    formik={formik}
                  >
                    {field.type === 'select' ? (
                      <Select
                        size='large'
                        placeholder={field.label}
                        value={formik.values[field.name]}
                        onChange={(value) =>
                          formik.setFieldValue(field.name, value)
                        }
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

      <Col xs={{span:24, order: 1}} lg={{span: 8, order: 2}}>
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
