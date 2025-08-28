import { CloseOutlined } from '@ant-design/icons'
import { Modal, Form, Row, Col, Typography, Button } from 'antd'
import * as Yup from 'yup'
import FormItemControl from '@/components/common/formItemControl'
import { Input } from 'antd'
import { DatePicker } from 'antd'
import { Flex } from 'antd'
import UploadImage from '../uploadImage'

import usePortfolioItemModal from '@/hooks/usePortfolioItemModal'
import { Select } from 'antd/es'
import SelectTag from '../selectTag'

const { Text } = Typography
export default function ModalPortfolio({
  loading,
  onSubmitSuccess,
  onClose,
  isModalVisible,
  editingItem,
  titleType = '',
  type,
}) {
  const {
    formik,
    onCloseModal,
    handleAvatarChange,
    tagList,
    onChangeSelectTag,
  } = usePortfolioItemModal({
    editingItem,
    onSubmitSuccess,
    onClose,
  })

  return (
    <Modal
      title={
        <div className='flex items-center'>
          {editingItem ? `Edit ${titleType}` : `Add ${titleType}`}
        </div>
      }
      open={isModalVisible}
      onCancel={onCloseModal}
      footer={null}
      width={600}
      className='portfolio-modal'
      closeIcon={<CloseOutlined />}
    >
      <Form onFinish={formik.handleSubmit} layout='vertical' className='mt-6'>
        <FormItemControl
          label={<Text strong>Title</Text>}
          name='title'
          formik={formik}
        >
          <Input
            placeholder='Enter title'
            size='large'
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </FormItemControl>

        <FormItemControl
          label={<Text strong>Subtitle</Text>}
          name='subtitle'
          formik={formik}
        >
          <Input
            placeholder='Enter subtitle'
            size='large'
            name='subtitle'
            value={formik.values.subtitle}
            onChange={formik.handleChange}
          />
        </FormItemControl>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <FormItemControl
              name='startDate'
              label={<Text strong>Start Date</Text>}
              formik={formik}
            >
              <DatePicker
                picker='month'
                style={{ width: '100%' }}
                size='large'
                value={formik.values.startDate}
                onChange={(date) => formik.setFieldValue('startDate', date)}
                placeholder='Select start date'
              />
            </FormItemControl>
          </Col>

          <Col xs={24} md={12}>
            <FormItemControl
              name='endDate'
              label={<Text strong>End Date</Text>}
              formik={formik}
            >
              <DatePicker
                picker='month'
                style={{ width: '100%' }}
                size='large'
                value={formik.values.endDate}
                onChange={(date) => formik.setFieldValue('endDate', date)}
                placeholder='Select end date (optional)'
              />
            </FormItemControl>
          </Col>
          <Col xs={24} md={8}>
            <FormItemControl name='imageUrl' formik={formik}>
              <UploadImage
                data={formik.values.avatar}
                onChange={handleAvatarChange}
                size={'medium'}
                title={'Image'}
                maxCount={1}
                shape='shape'
              />
            </FormItemControl>
          </Col>
          <Col xs={24} md={16}>
            <FormItemControl
              name='description'
              label={<Text strong>Description</Text>}
              formik={formik}
            >
              <Input.TextArea
                placeholder='Enter description'
                size='large'
                name='description'
                rows={5}
                allowClear
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </FormItemControl>
          </Col>
          {type === 'education' && (
            <Col xs={24} md={24}>
              <FormItemControl
                label={<Text strong>Tag</Text>}
                name='tag'
                formik={formik}
              >
                <SelectTag data={tagList} handleChange={onChangeSelectTag} />
              </FormItemControl>
            </Col>
          )}
          <Col xs={24} md={24}>
            <FormItemControl
              name='linkUrl'
              label={<Text strong>Link URL</Text>}
              formik={formik}
            >
              <Input
                placeholder='Enter link URL'
                size='large'
                name='linkUrl'
                value={formik.values.linkUrl}
                onChange={formik.handleChange}
              />
            </FormItemControl>
          </Col>
        </Row>
        <Flex justify='end' gap={8}>
          <Button onClick={onCloseModal}>Cancel</Button>
          <Button type='primary' htmlType='submit' loading={loading}>
            Submit
          </Button>
        </Flex>
      </Form>
    </Modal>
  )
}
