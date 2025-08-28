import React from 'react'
import { Input, Button, Flex, Row, Col } from 'antd'
import { Form } from 'antd'
import { Typography } from 'antd'
import usePortfolioManage from '@/hooks/usePortfolioManage'
import FormItemControl from '@/components/common/formItemControl'
import { useEffect } from 'react'
import UploadImage from '@/components/common/uploadImage'

const Portfolio = () => {
  const { formik, handleAvatarChange, getDataPortfolio } = usePortfolioManage()
  useEffect(() => {
    getDataPortfolio()
  }, [])

  return (
    <>
      <Form onFinish={formik.handleSubmit} labelCol={{ span: 4 }}>
        <Row gutter={16} wrap={true}>
          <Col xs={24} md={6}>
            <FormItemControl name='avatar' formik={formik}>
              <Flex align='center' vertical>
                <UploadImage
                  title='Avatar'
                  data={formik.values.avatar}
                  onChange={handleAvatarChange}
                  maxCount={1}
                  shape='circle'
                />
              </Flex>
            </FormItemControl>
          </Col>

          <Col xs={24} md={18}>
            <FormItemControl label='Email' name='email' formik={formik}>
              <Input
                size='large'
                placeholder='Email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </FormItemControl>
            <FormItemControl label='CV URL' name='cvUrl' formik={formik}>
              <Input
                size='large'
                placeholder='CV URL'
                name='cvUrl'
                value={formik.values.cvUrl}
                onChange={formik.handleChange}
              />
            </FormItemControl>
            <FormItemControl label='Overview' name='overview' formik={formik}>
              <Input.TextArea
                size='large'
                rows={6}
                placeholder='Overview'
                name='overview'
                value={formik.values.overview}
                onChange={formik.handleChange}
              />
            </FormItemControl>
            <div>
              <Typography.Title level={3}>Social</Typography.Title>
            </div>
            <FormItemControl name='facebook' label='Facebook' formik={formik}>
              <Input
                name='facebook'
                value={formik.values.facebook}
                onChange={formik.handleChange}
                placeholder='Enter your facebook url'
              />
            </FormItemControl>
            <FormItemControl name='linkedin' label='Linkedin' formik={formik}>
              <Input
                name='linkedin'
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                placeholder='Enter your linkedin url'
              />
            </FormItemControl>
            <FormItemControl name='instagram' label='Instagram' formik={formik}>
              <Input
                name='instagram'
                value={formik.values.instagram}
                onChange={formik.handleChange}
                placeholder='Enter your instagram url'
              />
            </FormItemControl>
          </Col>
        </Row>
        <Row gutter={16} align={'end'}>
          <Col md={12}></Col>
        </Row>
        <Flex justify='end'>
          <Button type='primary' htmlType='submit' size='large'>
            Submit
          </Button>
        </Flex>
      </Form>
    </>
  )
}

export default Portfolio
