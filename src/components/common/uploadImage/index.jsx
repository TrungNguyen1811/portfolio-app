import React, { useState } from 'react'
import { Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { base64ToFile, fileToBase64 } from '@/utils/getImage'
import styled from 'styled-components'
import { useEffect } from 'react'

const UploadImage = ({
  data,
  onChange,
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
    <>
      <UploadStyle
        listType={shape === 'circle' ? 'picture-circle' : 'picture-card'}
        fileList={file ? [file] : []}
        onChange={onImageChange}
        onPreview={handlePreview}
        multiple={multiple}
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
    </>
  )
}

export default UploadImage

const UploadStyle = styled(Upload)`
  .ant-upload-list-item-container,
  .ant-upload.ant-upload-select {
    width: 200px !important;
    height: 200px !important;
  }
`

const PreviewStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
