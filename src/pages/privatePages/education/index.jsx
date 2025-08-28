import PortfolioItem from '@/components/common/portfolioItem'
import {
  getPortfolioItemRequest,
  resetPortfolioItemManage,
} from '@/sagas/portfolioItemManage/portfolioItemManageSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const EducationManagement = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolioItemRequest('education'))
    return () => {
      dispatch(resetPortfolioItemManage())
    }
  }, [dispatch])

  return <PortfolioItem type={'education'} />
}

export default EducationManagement
