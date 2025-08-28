import {
  addPortfolioItemRequest,
  updatePortfolioItemRequest,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import { fileToBase64 } from '@/utils/getImage'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

const usePortfolioItemModal = ({ editingItem, onSubmitSuccess, onClose }) => {
  const { type } = useSelector((state) => state.portfolioItemManage)
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)

  const initialValues = useMemo(
    () => ({
      title: editingItem?.title || '',
      subtitle: editingItem?.subtitle || '',
      description: editingItem?.description || '',
      startDate: editingItem?.startDate ? dayjs(editingItem.startDate) : null,
      endDate: editingItem?.endDate ? dayjs(editingItem.endDate) : null,
      imageUrl: editingItem?.imageUrl || null,
      linkUrl: editingItem?.linkUrl || null,
      tag: editingItem?.tag || '',
    }),
    [editingItem]
  )

  const formik = useFormik({
    initialValues: initialValues,
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
        dispatch(
          updatePortfolioItemRequest({
            values: { ...formValues, id: editingItem.id },
            callback: onSubmitSuccess,
          })
        )
      } else
        dispatch(
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
