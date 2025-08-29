import React from 'react'
import {
  Table,
  Button,
  Space,
  Typography,
  Card,
  Popconfirm,
  Tooltip,
} from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  LinkOutlined,
} from '@ant-design/icons'
import ModalPortfolio from './ModalPortfolio'
import {} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import usePortfolioItemManage from '@/hooks/usePortfolioItemManage'
const { Text } = Typography

export default function PortfolioItem({ type }) {
  const {
    title,
    list,
    loading,
    actionLoading,
    isModalVisible,
    editingItem,
    onShowModal,
    onCloseModal,
    handleDelete,
    onSubmitSuccess,
  } = usePortfolioItemManage()
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 200,
      render: (title, record) => (
        <div>
          <Text strong>{title}</Text>
          {record.subtitle && (
            <div>
              <Text>{record.subtitle}</Text>
            </div>
          )}
        </div>
      ),
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 300,
      render: (description) => (
        <Tooltip title={description}>
          <Text>
            {description?.length > 80
              ? `${description.substring(0, 80)}...`
              : description}
          </Text>
        </Tooltip>
      ),
    },
    {
      title: 'Duration',
      key: 'duration',
      width: 180,
      render: (_, record) => (
        <div>
          {record.startDate || 'N/A'} - {record.endDate || 'Present'}
        </div>
      ),
      sorter: (a, b) => new Date(a.startDate || 0) - new Date(b.startDate || 0),
    },
    {
      title: 'Links',
      key: 'links',
      width: 80,
      render: (_, record) => (
        <Space>
          {record?.linkUrl && (
            <Tooltip title='Visit Link'>
              <Button
                type='text'
                size='small'
                icon={<LinkOutlined />}
                onClick={() => window.open(record.linkUrl, '_blank')}
              />
            </Tooltip>
          )}
        </Space>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 120,
      fixed: 'right',
      render: (_, record) => (
        <Space>
          <Tooltip title='Edit'>
            <Button
              type='text'
              size='small'
              icon={<EditOutlined />}
              onClick={() => onShowModal(record)}
            />
          </Tooltip>
          <Tooltip title='Delete'>
            <Popconfirm
              title='Are you sure you want to delete this item?'
              onConfirm={() => handleDelete(record.id)}
              okText='Yes'
              cancelText='No'
            >
              <Button type='text' size='small' icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ]
  return (
    <div>
      <Card
        title={`${title} Items`}
        extra={
          <Button
            type='primary'
            icon={<PlusOutlined />}
            onClick={() => onShowModal()}
          >
            Add New
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={list}
          loading={loading}
          rowKey='id'
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
          }}
          scroll={{ x: 1000 }}
        />
      </Card>

      <ModalPortfolio
        isModalVisible={isModalVisible}
        editingItem={editingItem}
        titleType={title}
        onSubmitSuccess={onSubmitSuccess}
        loading={actionLoading}
        type={type}
        onClose={onCloseModal}
      />
    </div>
  )
}
