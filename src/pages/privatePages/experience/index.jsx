import PortfolioItem from '@/components/common/portfolioItem'
import {
  getPortfolioItemRequest,
  resetPortfolioItemManage,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ExperienceManagement = () => {
  const dispatch = useDispatch()

  const handleGetPortfolioItem = async () => {
    await dispatch(getPortfolioItemRequest('experience'))
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

  return <PortfolioItem type={'experience'} />
}

export default ExperienceManagement
