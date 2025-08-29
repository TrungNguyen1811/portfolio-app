import {
  addPortfolioItemRequest,
  updatePortfolioItemRequest,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import { fileToBase64 } from '@/utils/getImage'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

const usePortfolioItemModal = ({ editingItem, onSubmitSuccess, onClose }) => {
  const { type } = useSelector((state) => state.portfolioItemManage)
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)

  const getInitialValues = (editValue) => ({
    title: editValue?.title || '',
    subtitle: editValue?.subtitle || '',
    description: editValue?.description || '',
    startDate: editValue?.startDate ? dayjs(editValue.startDate) : null,
    endDate: editValue?.endDate ? dayjs(editValue.endDate) : null,
    imageUrl: editValue?.imageUrl || null,
    linkUrl: editValue?.linkUrl || null,
    tag: editValue?.tag || '',
  })

  const formik = useFormik({
    initialValues: getInitialValues(editingItem),
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      subtitle: Yup.string().required('Subtitle is required'),
      description: Yup.string(),
      startDate: Yup.date().required('Start date is required'),
      endDate: Yup.date().nullable().notRequired(),
      linkUrl: Yup.string()
        .nullable()
        .notRequired()
        .transform((value, originalValue) =>
          originalValue === '' ? null : value
        )
        .url('Invalid URL'),
      tag: Yup.string(),
    }),
    onSubmit: async (values) => {
      const { startDate, endDate, ...formData } = values
      const formValues = {
        ...formData,
        type: type,
        startDate: startDate ? startDate.toISOString() : null,
        endDate: endDate ? endDate.toISOString() : null,
        imageUrl: file ? await fileToBase64(file.originFileObj) : null,
      }

      if (editingItem) {
        await dispatch(
          updatePortfolioItemRequest({
            values: { ...formValues, id: editingItem.id },
            callback: onSubmitSuccess,
          })
        )
      } else
        await dispatch(
          addPortfolioItemRequest({
            values: formValues,
            callback: onSubmitSuccess,
          })
        )
    },
  })

  const onCloseModal = () => {
    formik.resetForm()
    setFile(null)
    onClose()
  }

  const handleAvatarChange = (file) => {
    setFile(file)
  }
  const getTagList = () => {
    return formik.values.tag
      ? formik.values.tag.split(',').map((item) => item.trim())
      : []
  }

  const onChangeSelectTag = (value) => {
    formik.setFieldValue('tag', value)
  }

  return {
    formik,
    onCloseModal,
    handleAvatarChange,
    file,
    tagList: getTagList(),
    onChangeSelectTag,
  }
}
export default usePortfolioItemModal
