import React from 'react'
import { Input, Button, Flex, Row, Col } from 'antd'
import { Form } from 'antd'
import { Typography } from 'antd'
import { FacebookFilled, PlusOutlined } from '@ant-design/icons'
import { List } from 'antd'
import { Link } from 'react-router-dom'
import { Empty } from 'antd'
import { UploadStyle } from './styled'
import usePortfolioManage from '@/hooks/usePortfolioManage'
const Portfolio = () => {
  const {
    fileList,
    items,
    formik,
    handlePreview,
    handleChange,
    handleAddItem,
  } = usePortfolioManage()

  return (
    <>
      <Form onSubmit={formik.handleSubmit} labelCol={{ span: 4 }}>
        <Row gutter={16} wrap={true}>
          <Col xs={24} md={6}>
            <Form.Item rules={[{ required: true, message: '' }]}>
              <Typography.Text>Avatar</Typography.Text>
              <UploadStyle
                listType='picture-circle'
                multiple={false}
                fileList={fileList}
                maxCount={1}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length < 1 && <PlusOutlined />}
              </UploadStyle>
            </Form.Item>
          </Col>

          <Col xs={24} md={18}>
            <Form.Item label='Overview'>
              <Input.TextArea
                size='large'
                rows={6}
                name='overview'
                placeholder='Overview'
                value={formik.values.overview}
                onChange={formik.handleChange}
              />
            </Form.Item>

            <Form.Item label='CV URL'>
              <Input
                size='large'
                name='cvUrl'
                placeholder='CV URL'
                value={formik.values.cvUrl}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} wrap={true}>
          <Col md={12}>
            <Typography.Title level={4}>Socials</Typography.Title>

            <Form.Item label='Title'>
              <Input
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder='Enter title'
              />
            </Form.Item>

            <Form.Item label='URL'>
              <Input
                name='url'
                value={formik.values.url}
                onChange={formik.handleChange}
                placeholder='Enter URL'
              />
            </Form.Item>
            <Form.Item label='Icon'>
              <Input
                name='icon'
                value={formik.values.icon}
                onChange={formik.handleChange}
                placeholder='Enter icon Tag'
              />
            </Form.Item>
            <Form.Item>
              <Flex justify='end'>
                <Button type='default' onClick={handleAddItem}>
                  Add Item
                </Button>
              </Flex>
            </Form.Item>
          </Col>
          <Col md={12}>
            <List
              itemLayout='horizontal'
              dataSource={items}
              locale={{
                emptyText: <Empty description='No socials' />,
              }}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<FacebookFilled />}
                    title={item.title}
                    description={
                      <Link target='_blank' href={item.url}>
                        {item.url}
                      </Link>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
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
