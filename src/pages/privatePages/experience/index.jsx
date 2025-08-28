import PortfolioItem from '@/components/common/portfolioItem'
import {
  getPortfolioItemRequest,
  resetPortfolioItemManage,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ExperienceManagement = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolioItemRequest('experience'))
    return () => {
      dispatch(resetPortfolioItemManage())
    }
  }, [dispatch])

  return <PortfolioItem type={'experience'} />
}

export default ExperienceManagement
