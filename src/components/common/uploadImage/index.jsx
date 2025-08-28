import React, { useState } from 'react'
import { Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { base64ToFile, fileToBase64 } from '@/utils/getImage'
import styled from 'styled-components'
import { useEffect } from 'react'
import { Typography } from 'antd'
import { Flex } from 'antd'

const UploadImage = ({
  data,
  onChange,
  title,
  size = 'medium', // 'small' | 'medium' | 'large'
  maxCount = 1,
  multiple = false,
  shape = 'circle', // 'circle' | 'square'
}) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [file, setFile] = useState(null)

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await fileToBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
  }

  const onImageChange = ({ fileList: newFileList }) => {
    const filtered = newFileList.map((file) => ({
      ...file,
      status: 'done',
    }))
    const newFile = filtered && filtered.length > 0 ? filtered[0] : null
    setFile(newFile)
    onChange(newFile)
  }
  useEffect(() => {
    if (!data) setFile(null)
    else {
      const handleFile = base64ToFile(data, 'avatarPortfolio.png')

      const newFile = {
        uid: '-1',
        name: handleFile.name,
        status: 'done',
        originFileObj: handleFile,
        url: URL.createObjectURL(handleFile),
      }
      setFile(newFile)
      onChange(newFile)
    }
  }, [data])

  return (
    <Flex vertical gap={8}>
      <Typography.Text strong>{title || ''}</Typography.Text>
      <UploadStyle
        listType={shape === 'circle' ? 'picture-circle' : 'picture-card'}
        fileList={file ? [file] : []}
        onChange={onImageChange}
        onPreview={handlePreview}
        multiple={multiple}
        $size={size}
        $shape={shape}
        maxCount={maxCount}
        showUploadList={{
          showPreviewIcon: true,
          showRemoveIcon: true,
        }}
        accept='image/*'
      >
        {!file && <PlusOutlined />}
      </UploadStyle>
      <Modal
        open={previewOpen}
        footer={null}
        style={{ minWidth: '50%' }}
        title='Preview Image'
        onCancel={() => setPreviewOpen(false)}
      >
        <PreviewStyle alt='preview' src={previewImage} />
      </Modal>
    </Flex>
  )
}

export default UploadImage

const UploadStyle = styled(Upload)`
  width: ${(props) => {
    if (props.$size === 'small') return '100px'
    if (props.$size === 'medium') return '160px'
    return '200px'
  }};
  height: ${(props) => {
    if (props.$size === 'small') return '100px '
    if (props.$size === 'medium')
      return props.$shape === 'circle' ? '160px' : '140px'
    return '200px'
  }};

  .ant-upload-list,
  .ant-upload-list-item-container,
  .ant-upload.ant-upload-select {
    width: 100% !important; // override ant design can't set no important
    height: 100% !important;
  }
`

const PreviewStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
