import PortfolioItem from '@/components/common/portfolioItem'
import {
  getPortfolioItemRequest,
  resetPortfolioItemManage,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const EducationManagement = () => {
  const dispatch = useDispatch()

  const handleGetPortfolioItem = async () => {
    await dispatch(getPortfolioItemRequest('education'))
  }

  const handleResetPortfolioItemManage = async () => {
    await dispatch(resetPortfolioItemManage())
  }

  useEffect(() => {
    handleGetPortfolioItem()
    return () => {
      handleResetPortfolioItemManage()
    }
  }, [])

  return <PortfolioItem type={'education'} />
}

export default EducationManagement
