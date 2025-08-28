import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  deletePortfolioItemRequest,
  getPortfolioItemRequest,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'

const usePortfolioItemManage = () => {
  const dispatch = useDispatch()
  const { list, loading, type, actionLoading } = useSelector(
    (state) => state.portfolioItemManage
  )
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const getTitle = () =>
    type ? type.charAt(0).toUpperCase() + type.slice(1) : ''

  const onShowModal = (item = null) => {
    setEditingItem(item)
    setIsModalVisible(true)
  }

  const handleDelete = (id) => {
    dispatch(
      deletePortfolioItemRequest({
        id,
        callback: () => dispatch(getPortfolioItemRequest(type)),
      })
    )
  }

  const onSubmitSuccess = () => {
    setIsModalVisible(false)
    dispatch(getPortfolioItemRequest(type))
    setEditingItem(null)
  }

  const onCloseModal = () => {
    setIsModalVisible(false)
    setEditingItem(null)
  }

  return {
    title: getTitle(),
    list,
    loading,
    actionLoading,
    isModalVisible,
    editingItem,
    onShowModal,
    handleDelete,
    onSubmitSuccess,
    onCloseModal,
  }
}

export default usePortfolioItemManage
