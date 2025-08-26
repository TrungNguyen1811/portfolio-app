import { useFormik } from 'formik'
import { useState } from 'react'

const usePortfolioManage = () => {
  const [fileList, setFileList] = useState([])
  const [items, setItems] = useState([])

  const formik = useFormik({
    initialValues: {
      overview: '',
      socials: [],
      cvUrl: '',
      avatar: null,
      email: '',
    },
    onSubmit: (values) => {},
  })

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
  }
  const handleChange = ({ fileList: newFileList }) => {
    const filtered = newFileList.map((file) => ({
      ...file,
      status: 'done',
    }))
    setFileList(filtered)
  }

  const handleAddItem = () => {
    if (formik.values.title && formik.values.url) {
      setItems((prev) => [
        ...prev,
        {
          title: formik.values.title,
          url: formik.values.url,
          icon: formik.values.icon,
        },
      ])
      formik.setFieldValue('title', '')
      formik.setFieldValue('url', '')
      formik.setFieldValue('icon', '')
    }
  }

  return {
    fileList,
    items,
    formik,
    handlePreview,
    handleChange,
    handleAddItem,
  }
}

export default usePortfolioManage
